import { mkdirSync, writeFileSync } from "node:fs";

const partA = "I didn't miss it; my sensor labeled that spot ";
const partB = "'furniture,' and I don't vacuum furniture.";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
