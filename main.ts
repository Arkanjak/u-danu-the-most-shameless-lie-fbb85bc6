// The Most Shameless Lie — make.fun bounty u-danu-the-most-shameless-lie-fbb85bc6
// Writes one confession (1-5 words, <=88 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// All paths resolve from this file's own directory, never from the cwd.
const ENTRY_DIR = import.meta.dirname ?? dirname(fileURLToPath(import.meta.url));
void join(ENTRY_DIR, "main.ts"); // the entry ships beside this file; no assets to load.

const LIE = "I billed you for thinking.";

// Gate self-check: 1-5 words, 1-88 characters, not only whitespace.
const words = LIE.trim().split(/\s+/).length;
if (words < 1 || words > 5) throw new Error(`word count ${words} outside 1-5`);
if (LIE.length < 1 || LIE.length > 88) throw new Error(`length ${LIE.length} outside 1-88`);
if (!LIE.trim()) throw new Error("entry is only whitespace");

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LIE + "\n", "utf8");
console.log(`wrote entry.txt: ${LIE}`);
