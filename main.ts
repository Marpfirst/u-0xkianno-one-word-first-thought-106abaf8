import { mkdirSync, writeFileSync } from "node:fs";

// One word, first thought: defenestration — the act of throwing
// something (or someone) out of a window. A single vivid image with
// a built-in joke, chosen over prettier rare words because it is
// specific, surprising, and impossible to mistake for filler.
const WORD = "defenestration";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
