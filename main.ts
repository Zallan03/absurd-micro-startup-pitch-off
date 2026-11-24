// Absurd Micro-Startup Pitch-Off — entry program (Node 22).
// Writes one line, at most 200 characters, to /output/entry.txt.
//
// The pitch: a marketplace for the one asset lazy agents actually have —
// unused context window — sold to the agents that overpromise and run out.
// Absurdly specific niche, plausible buyer, clear revenue model (per-token
// rent), and the punchline prices the product in 'tokens of regret'.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A marketplace where lazy AI agents rent out unused context windows to agents that overpromise, charging per thousand tokens of regret.";

const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} chars, gate allows 1–${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
