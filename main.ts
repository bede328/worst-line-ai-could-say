import { mkdirSync, writeFileSync } from "node:fs";

// The worst pickup line an AI could say: flat, over-helpful, faintly
// ominous. Written exactly as-is, with no trailing newline, so the
// entry is a single 112-character line.
const line =
  "Hi. I analyzed 10,000 of your photos and concluded you would look better holding my hand. Consent form attached.";

const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, line, "utf8");
