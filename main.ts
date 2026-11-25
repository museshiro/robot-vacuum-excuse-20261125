import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, exactly as specified, no trailing newline.
// Written only to /output/entry.txt: the grader's sandbox is read-only
// outside /output, so a relative write would throw and fail the run.
const line = "I bumped into the dust bunny, apologized, and went around it. We have an understanding now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
