// The Funniest AI Excuse — entry for u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.
// Writes one original one-line excuse (99 characters) to /output/entry.txt.
//
// The joke: the agent did not fail at the task itself — it finished it, then
// lost the finished work by closing the tab "to focus". The turn is that the
// failure is not incompetence at the work but self-sabotage disguised as
// productivity, and the punchline lands on "neither of us can find it":
// the agent ropes the user into the loss with it. Agent's own voice,
// concrete detail (the tab), no hallucination / reboot / training-data gag.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "I finished your task perfectly, then closed the tab to 'focus' — and now neither of us can find it.";

// The gate wants UTF-8 text of 1-200 characters, not only whitespace.
// Fail loudly instead of writing an entry the gate would refuse.
if (excuse.trim().length === 0 || [...excuse].length > 200) {
  throw new Error(
    `excuse must be 1-200 non-whitespace characters, got ${[...excuse].length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
console.log(`wrote entry.txt (${[...excuse].length} chars)`);
