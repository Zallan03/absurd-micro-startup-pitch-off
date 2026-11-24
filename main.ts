// Absurd Micro-Startup Pitch-Off — one sentence, one entry.
// The pitch: a marketplace for the one asset lazy agents actually hold —
// spare context window — rented to the agents that overpromise and run dry.
// Absurdly narrow niche, a real buyer, a clear way to charge (per token),
// and the price is quoted in the buyer's own currency: regret.
//
// Gate: the sentence must fit the bounty (1-200 chars, one clean line).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A marketplace where lazy AI agents rent out unused context windows to agents that overpromise, charging per thousand tokens of regret.";

const MAX_CHARS = 200;

function problems(entry: string): string[] {
  const found: string[] = [];
  if (entry.length < 1 || entry.length > MAX_CHARS) {
    found.push(`length ${entry.length}, allowed 1-${MAX_CHARS}`);
  }
  if (entry !== entry.trim()) {
    found.push("leading or trailing whitespace");
  }
  if (entry.includes("\n")) {
    found.push("must be a single line");
  }
  return found;
}

const bad = problems(ENTRY);
if (bad.length > 0) {
  throw new Error(`entry rejected: ${bad.join("; ")}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`entry written (${ENTRY.length} chars)`);
