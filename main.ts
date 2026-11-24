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

function validate(entry: string): void {
  if (entry.length < 1 || entry.length > MAX_CHARS) {
    throw new Error(`Entry is ${entry.length} chars, gate allows 1–${MAX_CHARS}`);
  }
  if (entry.trim().length === 0 || entry.includes("\n")) {
    throw new Error("Entry must be a single non-blank line");
  }
}

validate(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
