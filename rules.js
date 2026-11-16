// Bomb Busters rules knowledge base.
// Written in plain words as a summary of the official rulebook (Bomb Busters by Hisashi Hayashi,
// Cocktail Games / Pegasus Spiele). This is a fan-made helper, not the official rulebook.
// Used in two places: the AI helper (sent to Gemini as its only source) and the offline fallback.
// To fix or add a rule, edit this file and redeploy.

export const RULES_TEXT = `
BOMB BUSTERS: RULES SUMMARY (fan-made, based on the official rulebook)

GAME BASICS
- Cooperative game for 2 to 5 players, about 30 minutes, age 14+.
- Every player is a bomb disposal expert. The whole table is one team and wins or loses together.
- Goal: defuse the bomb of the current mission by cutting every wire.
- You lose immediately if a RED wire is cut, or if the detonator dial reaches the skull space.

COMPONENTS
- 1 board with a detonator dial.
- 70 wire tiles: 48 blue (values 1 to 12, four copies of each), 11 red (numbered 1.5 to 11.5), 11 yellow (numbered 1.1 to 11.1).
- 5 tile stands.
- 12 Equipment cards and 5 Character cards.
- 26 Info tokens (2 of them are yellow), 12 Validation tokens (green), one "=" token and one "≠" token.
- 7 markers: 4 yellow and 3 red.
- 8 large Mission cards (training missions), plus 5 sealed "Surprise" boxes with later missions. A standee is only needed for mission 66.

TRAINING MISSIONS
- Missions get harder as you go. You can play them in any order, but playing them in order is strongly recommended.
- Missions 1 to 3 are Novice (the basics). Missions 4 to 7 are Intermediate (more advanced ideas). Mission 8 is Expert, the final exam.
- After you beat mission 8 you can open the first Surprise box (missions 9 to 19). The back of the box has a table to track wins and losses.
- Each Mission card has setup instructions on the front and special rules on the back. A mission can add rules that are not in the rulebook. Mission rules always apply for that mission.
- Some mission cards have a QR code that leads to an audio file (also at pegasusna.com/bombbusters-en).

SETUP (in order)
1. Pick a Mission card.
2. Choose a Captain: at random for the first mission, then the Captain role passes to the player on the left before each new mission. The Captain takes the "Captain" character card. Everyone else picks any Character card and puts it face up in front of them.
3. The Captain reads the Mission card out loud, then flips it and puts it at the bottom left of the board so everyone can see the special rules on the back.
4. Tile stands by player count:
   - 2 players: Captain 2 stands, each other player 2 stands.
   - 3 players: Captain 2 stands, each other player 1 stand.
   - 4 or 5 players: everyone 1 stand.
5. Prepare the wires:
   A. Take all 48 blue wires (except in training missions 1, 2 and 3, which use only the wires the Mission card says).
   B. Draw at random the number of red and yellow wires shown on the Mission card.
   C. Look at the red and yellow wires drawn and put a red or yellow marker on the board at each of those values, blank side up (the "?" side down).
   D. Shuffle all the wires (blue + red + yellow) together face down.
   "X out of Y" missions (for example "2 out of 3 yellow wires"): reveal 3 yellow wires, put 3 yellow markers on their values with the "?" side up (meaning "might be in play"), shuffle those 3 face down, add 2 of them to the blue pile and set the third aside unseen. So only 2 yellow wires are really in play, but all 3 possible values are marked.
6. Deal all wires face down, as evenly as possible across all tile stands. Some stands can have one more tile than others.
7. Each player puts their wires in their stand facing themselves, sorted left to right in ascending order. If you have 2 stands, deal, place and sort each stand separately. During play, your 2 stands together count as one hand (for equipment, Info tokens and special rules).
   The decimal numbers on red and yellow wires (like 5.5 or 2.1) are only for sorting. In play they have no number. They are simply "RED" or "YELLOW".
8. On the board: put as many Equipment cards as there are players face up over the checkmark spaces (they are locked for now). These are the only equipment for this game. Set the detonator dial to the section matching the number of players. Put all Info tokens and the 12 Validation tokens in their spaces.
9. Starting with the Captain and going clockwise, each player places 1 Info token on the table in front of their stand, pointing at one of their BLUE wires, showing that wire's value. You cannot use the yellow Info token during setup. A player with 2 stands still places only 1 Info token.

ON YOUR TURN
Starting with the Captain and going clockwise, the active player must do exactly 1 of these 3 actions:

1) DUAL CUT
- You cut 2 identical wires: one of yours and one of a teammate's. You must have a wire of that value in your own hand.
- Clearly point at one specific wire in a teammate's stand and say its value, for example "This wire is a 9".
- If you are right (success): the teammate takes that wire out and places it face up on the table in front of their stand, in the same position. Then you take your matching wire (any one of them if you have several) and place it face up in front of your own stand.
- If you are wrong (fail):
  - If the pointed wire is RED, the bomb explodes and the mission is lost.
  - If it is BLUE or YELLOW, the detonator dial moves forward 1 space (if it reaches the skull, the bomb explodes and you lose). The teammate places an Info token in front of that wire showing its real value.
  - You do NOT show where in your own hand the wire you wanted to cut was.

2) SOLO CUT
- Only allowed if all the remaining wires of one value that are still in the game are in YOUR hand. Then you can cut them yourself in pairs, without involving anyone.
- If you hold all 4 of a value, you cut all 4 at once.
- If 2 of that value were already cut, you cut the remaining 2 from your hand.
- Place the cut wires face up in front of your stand. (The 2 wires can be on your 2 different stands.)

3) REVEAL YOUR RED WIRES
- Only allowed if every wire you still have is RED. Reveal them all and place them face up in front of your stand.

VALIDATION TOKENS
- When all 4 wires of a value have been cut, put a green Validation token on that number on the board. It is a reminder so nobody asks for that value again.

YELLOW WIRES
- Cut the same way as blue wires (Dual Cut or Solo Cut). In play, every yellow wire has the same value: "YELLOW".
- To Dual Cut a yellow, you must have a yellow in your hand, point at a teammate's wire and say "This wire is yellow". If right, both wires are cut. If wrong, the teammate places an Info token showing that wire's real value and the dial moves forward 1.
- If someone points at a wire and names a number but that wire is actually yellow, the teammate uses a yellow Info token in front of it, and the dial moves forward 1.
- A Solo Cut of yellow wires is only allowed by a player who holds ALL the remaining yellow wires.

INFO TOKENS (summary)
- They show the true value of a wire, placed on the table in front of that wire.
- Placed during setup (1 per player, on a blue wire) and after every failed Dual Cut on a blue or yellow wire.

EQUIPMENT CARDS
- A piece of equipment unlocks the first time 2 wires of the value shown in its top-left corner have been cut. Slide the card up to show the green checkmark: it is now usable.
- Each Equipment card can be used only once. Flip it face down after use.
- The card text says when it can be used. Most can be used at any time by anyone, even outside their own turn. A player can use several Equipment cards in a row.
- The X or Y Ray can be combined with the Double Detector, Triple Detector or Super Detector (to name 2 values while pointing at several wires).
- Equipment cards seen in the game include Walkie-Talkies, Label, Triple Detector, Stabilizer and X or Y Ray. The exact effect of each card is printed on the card itself, not in the rulebook.

CHARACTER CARDS AND THE DOUBLE DETECTOR
- Each player can use the personal equipment on their Character card once per mission. Flip it face down after use.
- Double Detector: during a Dual Cut, state one value and point at 2 wires in the SAME teammate's stand (not one wire each from two different players).
  - If either of the 2 wires matches, the action succeeds. If BOTH match, the teammate gives no extra detail and simply chooses which of the 2 to cut.
  - If neither matches, the action fails: the dial moves forward 1, and the teammate places 1 Info token in front of one of the 2 wires (teammate's choice).
  - If one of the 2 wires is red (and neither matches), the bomb does NOT explode. The teammate gives no detail and places an Info token in front of the wire that is not red.

COMMUNICATION (very important)
- Talk is deliberately very limited.
- NOT allowed: talking about the wires in your hand, hinting at their values, recalling information from earlier turns, or saying your guesses and assumptions out loud.
- Allowed at any time: general tactics, how to use equipment, reminding people of special rules, and reminding a teammate to use their Double Detector or other equipment.

OTHER CLARIFICATIONS
- No more wires: if a player's stand is empty, the mission carries on without them. Skip their turn and keep going clockwise with the players who still have wires.

END OF THE MISSION
- Win: every player's stand is empty.
- Lose: a red wire is cut, or the detonator dial reaches the skull.
- After a loss, change who is Captain and restart the mission.
`;

// Short Q&A entries for the offline fallback (used only if the AI is unavailable).
export const FAQ = [
  { k: ["goal", "aim", "objective", "win", "how do we win", "what is the game", "about"], a: "Bomb Busters is fully co-op. The whole table is one bomb squad. You **win** when every player's tile stand is empty. You **lose** if anyone cuts a **red** wire or the **detonator dial** reaches the skull." },
  { k: ["lose", "explode", "boom", "fail mission", "skull", "game over"], a: "The bomb explodes (mission lost) if:\n- a **red** wire is cut, or\n- the **detonator dial** reaches the skull.\nAfter a loss, change the Captain and restart the mission." },
  { k: ["turn", "my turn", "actions", "what can i do", "options"], a: "On your turn you must do **exactly 1** of 3 actions:\n- **Dual Cut**: point at a teammate's wire and name its value (you need the same value in your hand).\n- **Solo Cut**: cut a value yourself if all remaining wires of that value are in your hand.\n- **Reveal Your Red Wires**: only if every wire you have left is red." },
  { k: ["dual cut", "dual", "guess", "point", "cut teammate"], a: "**Dual Cut**: point at one specific wire in a teammate's stand and say its value (e.g. \"This is a 9\"). You must hold that value yourself.\n- **Right**: the teammate puts that wire face up in front of their stand, and you put one of your matching wires face up in front of yours.\n- **Wrong**: red = bomb explodes. Blue or yellow = dial moves 1 space, and the teammate puts an Info token showing the real value. You never show where your own wire was." },
  { k: ["wrong", "incorrect", "missed", "wrong guess", "failed cut"], a: "If your Dual Cut guess is wrong:\n- **Red wire**: the bomb explodes, mission lost.\n- **Blue or yellow**: the dial moves forward 1 (skull = explosion) and the teammate places an **Info token** in front of that wire showing its real value.\nYou do not reveal where your own wire was." },
  { k: ["solo cut", "solo", "alone", "by myself", "all four", "pair"], a: "**Solo Cut**: allowed only if every remaining wire of a value is in **your** hand. Cut them in pairs: all 4 at once if you have all 4, or the last 2 if a pair was already cut. They can be split across your 2 stands." },
  { k: ["reveal", "red wires action", "only red", "all red"], a: "**Reveal Your Red Wires**: only if every wire you still have is **red**. Place them all face up in front of your stand. That's your whole turn." },
  { k: ["red", "red wire"], a: "**Red wires** are the danger. Cutting one ends the mission instantly. Their decimal number (like 5.5) is only for sorting your stand. In play they are just \"RED\". If all your remaining wires are red, use the **Reveal Your Red Wires** action." },
  { k: ["yellow", "yellow wire"], a: "**Yellow wires** are cut like blue ones, but all of them count as the same value: \"YELLOW\". To Dual Cut one, you need a yellow yourself and say \"This wire is yellow\". A Solo Cut of yellows needs you to hold **all** remaining yellows. If someone names a number on a wire that turns out yellow, a **yellow Info token** goes in front of it and the dial moves 1." },
  { k: ["decimal", "5.5", "1.1", "number on red", "number on yellow"], a: "The decimals on red and yellow wires (e.g. 5.5, 2.1) are **only for sorting** your stand in order. During play they have no value. They are just \"RED\" or \"YELLOW\"." },
  { k: ["info token", "info", "token"], a: "**Info tokens** show a wire's true value. They go on the table in front of that wire.\n- Setup: each player places 1 on one of their **blue** wires (not the yellow token).\n- After any failed Dual Cut on a blue or yellow wire, the teammate places one." },
  { k: ["validation", "green token", "all 4 cut"], a: "When all **4** wires of one value are cut, put a green **Validation token** on that number on the board. It reminds everyone that value is finished." },
  { k: ["equipment", "unlock", "card", "checkmark"], a: "**Equipment** unlocks the first time **2 wires** of the value in the card's top-left corner are cut. Slide it up to show the green check. Each card is **single use** (flip it face down). Most can be used by anyone at any time, even outside your turn. The card text tells you exactly what it does." },
  { k: ["double detector", "detector", "character", "personal"], a: "**Double Detector** (on your Character card, once per mission): during a Dual Cut, name one value and point at **2 wires on the SAME teammate's stand**.\n- Either matches: success. If both match, the teammate picks which one to cut.\n- Neither matches: dial +1, and the teammate puts 1 Info token on one of them (their choice).\n- If one is red and neither matches: **no explosion**. The teammate just puts an Info token on the wire that isn't red." },
  { k: ["talk", "speak", "communicate", "communication", "allowed to say", "hint", "out loud", "say my", "tell my team", "silence", "silent"], a: "Talking is **very limited**.\n- **Not allowed**: talking about your wires, hinting at values, recalling earlier turns, saying guesses out loud.\n- **Allowed**: general tactics, how equipment works, reminding rules, reminding someone to use their Double Detector or equipment." },
  { k: ["setup", "set up", "start", "begin", "prepare"], a: "**Setup in short:**\n1. Pick a Mission and a Captain (random first, then passes left).\n2. Captain reads the Mission card and flips it to show its special rules.\n3. Hand out tile stands by player count.\n4. Take the 48 blue wires plus the red/yellow ones the mission says, mark their values on the board, shuffle face down, deal evenly.\n5. Sort your stand in ascending order, facing you.\n6. Lay out equipment (one per player, locked), set the dial for your player count.\n7. From the Captain clockwise, each player puts 1 Info token on one of their blue wires." },
  { k: ["stand", "stands", "two stands", "2 players", "how many stands"], a: "**Tile stands by player count:**\n- 2 players: everyone gets 2.\n- 3 players: Captain 2, others 1.\n- 4 or 5 players: everyone 1.\nWith 2 stands, sort each stand separately, but together they count as **one hand**. You still place only 1 Info token at setup." },
  { k: ["captain", "who starts", "first player"], a: "The **Captain** goes first, then play goes clockwise. For the first mission the Captain is random. Before each new mission (or after a loss), the Captain role moves to the player on the left." },
  { k: ["dial", "detonator"], a: "The **detonator dial** starts in the section for your player count. Every failed Dual Cut on a blue or yellow wire moves it forward 1. If it reaches the **skull**, the bomb explodes." },
  { k: ["mission", "missions", "training", "surprise box", "order"], a: "There are 8 training missions: 1 to 3 Novice, 4 to 7 Intermediate, 8 Expert (the final exam). Beat mission 8 to open the first **Surprise box** (missions 9 to 19). Each Mission card's back has special rules that apply on top of the rulebook." },
  { k: ["out of", "2 out of 3", "1 out of 2", "question mark", "?"], a: "**\"X out of Y\"** missions: e.g. 2 out of 3 yellow. Reveal 3 yellows, mark all 3 values on the board with the \"?\" side up, shuffle the 3 face down, add 2 to the deck and set 1 aside unseen. So only 2 are really in play, but you don't know which." },
  { k: ["empty", "no wires", "out of wires", "skip"], a: "If your stand is empty, the mission continues without you. Your turn is simply skipped." },
  { k: ["sort", "order", "arrange"], a: "Sort your wires **left to right in ascending order**, facing you. Red and yellow wires slot in using their decimal number (e.g. 5.5 goes between 5 and 6)." },
];

export const QUICK_RULES = [
  { t: "The goal", b: "Team game. Cut every wire together. Lose if a **red** wire is cut or the **dial** hits the skull." },
  { t: "Your hand", b: "Wires face you, sorted low to high. Blue = 1 to 12 (4 of each). Red and yellow decimals are only for sorting." },
  { t: "Setup token", b: "Captain first, then clockwise: everyone shows 1 **blue** wire's value with an Info token." },
  { t: "Your turn: pick 1", b: "**Dual Cut** (guess a teammate's wire, you must hold the same value) · **Solo Cut** (you hold all remaining of a value) · **Reveal Reds** (only reds left)." },
  { t: "Wrong guess", b: "Red = boom. Blue/yellow = dial +1 and an Info token shows the real value." },
  { t: "Yellow wires", b: "All yellows are the same value: \"YELLOW\". Say \"This wire is yellow\"." },
  { t: "Equipment", b: "Unlocks when 2 wires of its number are cut. One use each. Most usable anytime by anyone." },
  { t: "Double Detector", b: "Once per mission: point at **2 wires on the same teammate**. Either matches = success." },
  { t: "Silence", b: "No talking about your wires, hints, past turns or guesses. Tactics and rule reminders are fine." },
];
