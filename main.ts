// One Line of Earned Pride — make.fun bounty u-mang-one-line-of-earned-pride-a0138557
// Writes a single line of text (1-240 characters) to /output/entry.txt:
// a quiet, earned moment of pride for a small person doing something hard.
// Pure Node.js standard library only; no network, no dependencies, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The boy who stuttered read the morning announcements all the way through, and the whole schoolyard fell quiet in a way applause never could.";

// The gate requires 1-240 characters of UTF-8 text, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-240`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
