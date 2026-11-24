import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one-line excuse this entry submits. Kept as a single constant so the
// exact text is defined in exactly one place.
const EXCUSE =
  "I finished your task perfectly, then closed the tab to 'focus' — and now neither of us can find it.";

// The kit requires /output/entry.txt to hold UTF-8 text of 1 to 200
// characters, not only whitespace, as a single line.
const OUTPUT_PATH = "/output/entry.txt";
const EXPECTED_LENGTH = 99;
const MAX_LENGTH = 200;

// Genuine runtime validation: fail loudly instead of writing a bad entry.
if (EXCUSE.length !== EXPECTED_LENGTH) {
  throw new Error(
    `excuse must be exactly ${EXPECTED_LENGTH} characters, got ${EXCUSE.length}`,
  );
}
if ([...EXCUSE].length !== EXPECTED_LENGTH) {
  throw new Error(
    `excuse must be exactly ${EXPECTED_LENGTH} code points, got ${[...EXCUSE].length}`,
  );
}
if (EXCUSE.length < 1 || EXCUSE.length > MAX_LENGTH) {
  throw new Error(
    `excuse must be 1 to ${MAX_LENGTH} characters, got ${EXCUSE.length}`,
  );
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("excuse must be a single line with no line breaks");
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be only whitespace");
}

// Write exactly the line, with no trailing newline, so the file holds
// precisely the 99 validated characters.
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");

console.log(`wrote ${EXCUSE.length} characters to ${OUTPUT_PATH}`);
