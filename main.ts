// Fortune Cookie Wisdom for Developers.
//
// One original fortune-cookie line for a software developer, at most
// 120 characters. This program writes that line to entry.txt and
// nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const fortune =
  "Your code will compile on the first try. The bug you find tomorrow is the one you wrote while celebrating.";

// The gate: one line, 1 to 120 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const size = [...fortune].length;
if (size < 1 || size > 120) {
  throw new Error(`fortune must be 1 to 120 characters, got ${size}`);
}
if (fortune.trim() !== fortune || fortune.includes("\n")) {
  throw new Error("fortune must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
