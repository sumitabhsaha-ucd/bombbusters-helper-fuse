# Bomb Busters Squad Helper: how to put it online

This takes about 15 minutes. You don't need a terminal or any code. When you're done you'll have a link like `https://bombbusters-squad.netlify.app` that anyone can open.

## What's in the folder

| File | What it does |
|---|---|
| `index.html` | The whole page: name screen, training, quiz, quick rules and chat |
| `rules.js` | The rules summary. Both the AI and the offline answers read from this file. **To fix a rule, edit this file.** |
| `netlify/functions/ask.mjs` | Small server code that sends questions to Gemini. Your API key stays here, hidden. |
| `netlify.toml` | Tells Netlify where everything is |

---

## Step 1: Get a free Gemini API key (3 min)

1. Go to **https://aistudio.google.com/apikey** and sign in with your Google account.
2. Click **Create API key**. If it asks for a project, choose **Create new project**.
3. Copy the key (it starts with `AIza...`). Keep it somewhere private for Step 4.
   - Don't paste it into the code, into GitHub, or into any chat.

The free tier needs no card. It has a daily request limit, which is plenty for game nights. One thing to know: on the free tier, Google may use the questions people ask to improve its products. Nothing personal gets sent, only the player's first name and their rules question.

## Step 2: Put the files on GitHub (5 min)

1. Unzip `bombbusters-helper.zip` on your laptop.
2. Go to **https://github.com/new** (create a free account if you need one).
3. Repository name: `bombbusters-helper`. Leave it **Public** or choose **Private** (both work). Click **Create repository**.
4. On the next page, click the link **uploading an existing file**.
5. Open the unzipped `bombbusters-helper` folder. Select **everything inside it** (`index.html`, `rules.js`, `netlify.toml`, `DEPLOY.md` and the `netlify` folder) and drag it all into the GitHub page.
   - Drag the files that are *inside* the folder, not the folder itself.
   - Check that GitHub lists `netlify/functions/ask.mjs`. If the `netlify` folder didn't come through, drag that folder in again on its own.
6. Click **Commit changes**.

## Step 3: Connect Netlify (3 min)

1. Go to **https://app.netlify.com** and sign up with **GitHub** (the easiest option).
2. Click **Add new project** (it may say **Add new site**), then **Import an existing project**.
3. Choose **GitHub**, allow access, and pick `bombbusters-helper`.
4. Leave all the build settings as they are. Netlify reads them from `netlify.toml`.
5. **Before you click Deploy**, find **Add environment variables** on the same screen and add:
   - Key: `GEMINI_API_KEY`
   - Value: your `AIza...` key
6. Click **Deploy**.

If you've already deployed without the key, add it under **Project configuration → Environment variables**, then go to **Deploys → Trigger deploy → Deploy project** so it takes effect.

## Step 4: Get your shareable URL (1 min)

1. Netlify gives you a random name like `https://jolly-otter-12ab.netlify.app`.
2. To change it, go to **Project configuration → General → Change project name** and type something like `bombbusters-squad`. Your link becomes `https://bombbusters-squad.netlify.app`.
3. Open the link on your phone, enter a name, skip to the helper, and ask: *"How does the Double Detector work?"*
   - If the answer **doesn't** have the grey "Quick answer from the rules summary" label under it, the AI is working.
   - If it does have the label, the key isn't set up yet. Recheck Step 3.5 and redeploy.

Share that link with anyone. Tip: turn it into a QR code (for example at qr-code-generator.com) and leave it next to the game box.

---

## Optional settings (Netlify environment variables)

| Key | Default | What it changes |
|---|---|---|
| `GEMINI_MODEL` | `gemini-flash-latest` | The Gemini model used. Change this if Google retires the name. |
| `QUESTIONS_PER_HOUR` | `30` | The most questions one visitor can ask per hour. This is a soft limit. |

## Updating rules or text later

On GitHub, open `rules.js` (or `index.html`), click the pencil icon, edit, and click **Commit changes**. Netlify redeploys automatically in about a minute.

## If something breaks

- **Every answer has the "Quick answer" label:** the key is missing or wrong, or the free daily limit is used up. Check **Logs → Functions → ask** in Netlify for the error.
- **Gemini says the model isn't found:** add the `GEMINI_MODEL` variable with a current Flash model name from https://ai.google.dev/gemini-api/docs/models, then redeploy.
- **The page loads but looks plain:** the Google font is blocked on that network. The page still works.
