// Netlify Function: Fuse, the Bomb Busters rules helper.
// Your Gemini API key is read from the GEMINI_API_KEY environment variable in Netlify.
// It never reaches the browser.
//
// Speed settings:
// - thinkingLevel "low": the model reasons briefly instead of deeply (rules questions are simple).
// - Streaming: words are sent to the page as soon as Gemini writes them.
import { RULES_TEXT } from "../../rules.js";

const MODEL = process.env.GEMINI_MODEL || "gemini-flash-latest";
const THINKING = process.env.GEMINI_THINKING || "low"; // set to "off" to send no thinking setting
const LIMIT_PER_WINDOW = Number(process.env.QUESTIONS_PER_HOUR || 30); // per visitor
const WINDOW_MS = 60 * 60 * 1000;
const hits = new Map(); // best-effort per-instance rate limit

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= LIMIT_PER_WINDOW) { hits.set(ip, list); return true; }
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return false;
}

function systemPrompt(name) {
  return `You are "Fuse", the friendly rules helper for the cooperative board game Bomb Busters.
You are talking to a player called ${name || "Bomb Buster"}. Use their name now and then, not in every message.

HOW TO ANSWER
- Answer ONLY from the RULES below. Do not invent rules, card effects or mission details.
- If the rules do not cover the question (for example a specific mission card or the exact text of an equipment card), say so plainly and tell them to check the Mission card or the Equipment card text. Never guess.
- Keep answers short: 2 to 5 sentences, or a few bullet points. Plain, friendly words. Use **bold** for key terms.
- If a question is about a situation at the table, walk through what happens step by step.
- Never help a player break the silence rule (for example, do not help them hint at their wires to teammates). You can explain the rule.
- If asked something unrelated to Bomb Busters, briefly steer back to the game.
- Do not use em dashes.

RULES
${RULES_TEXT}`;
}

function callGemini(key, payload, withThinking) {
  const generationConfig = { temperature: 0.3, maxOutputTokens: 700 };
  if (withThinking && THINKING !== "off") generationConfig.thinkingConfig = { thinkingLevel: THINKING };
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:streamGenerateContent?alt=sse`;
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({ ...payload, generationConfig }),
  });
}

export default async (req, context) => {
  if (req.method !== "POST") return json(405, { error: "method_not_allowed" });

  const key = process.env.GEMINI_API_KEY;
  if (!key) return json(503, { error: "not_configured" });

  const ip = context?.ip || req.headers.get("x-nf-client-connection-ip") || "unknown";
  if (rateLimited(ip)) return json(429, { error: "rate_limited" });

  let body;
  try { body = await req.json(); } catch { return json(400, { error: "bad_json" }); }

  const name = String(body?.name || "").slice(0, 40).replace(/[^\p{L}\p{N} '\-]/gu, "");
  const history = Array.isArray(body?.messages) ? body.messages.slice(-6) : [];
  const contents = history
    .filter((m) => m && typeof m.text === "string" && m.text.trim())
    .map((m) => ({
      role: m.role === "bot" ? "model" : "user",
      parts: [{ text: m.text.slice(0, 800) }],
    }));
  if (!contents.length || contents[contents.length - 1].role !== "user") {
    return json(400, { error: "no_question" });
  }

  const payload = { system_instruction: { parts: [{ text: systemPrompt(name) }] }, contents };

  let r;
  try {
    r = await callGemini(key, payload, true);
    // Some models reject the thinking setting. Retry once without it so the bot never breaks.
    if (r.status === 400) {
      console.warn("Gemini 400 with thinking setting, retrying without:", (await r.text()).slice(0, 300));
      r = await callGemini(key, payload, false);
    }
  } catch (e) {
    console.error("Gemini fetch failed", e);
    return json(502, { error: "upstream" });
  }
  if (r.status === 429) return json(429, { error: "rate_limited" });
  if (!r.ok || !r.body) {
    console.error("Gemini error", r.status, (await r.text()).slice(0, 500));
    return json(502, { error: "upstream" });
  }

  // Turn Gemini's event stream into plain text chunks for the page.
  const enc = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const reader = r.body.getReader();
      const dec = new TextDecoder();
      let buf = "";
      const handle = (line) => {
        line = line.trim();
        if (!line.startsWith("data:")) return;
        const data = line.slice(5).trim();
        if (!data || data === "[DONE]") return;
        try {
          const j = JSON.parse(data);
          for (const p of j?.candidates?.[0]?.content?.parts || []) {
            if (p.text && !p.thought) controller.enqueue(enc.encode(p.text));
          }
        } catch { /* ignore partial lines */ }
      };
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          let i;
          while ((i = buf.indexOf("\n")) >= 0) { handle(buf.slice(0, i)); buf = buf.slice(i + 1); }
        }
        if (buf) handle(buf);
      } catch (e) {
        console.error("Stream error", e);
      }
      controller.close();
    },
  });

  return new Response(stream, {
    status: 200,
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" },
  });
};

export const config = { path: "/api/ask" };
