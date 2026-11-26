// Robot Romance: One-Line Pickup Line for AI Entry
// Twist analysis: Framing the human as an inefficient manual process turns cold algorithmic optimization into a deliberate choice of warmth.
// Voice note: The direct address and conversational rhythm give it the natural cadence of speaking directly to an interactive model.
import fs from 'node:fs';
import path from 'node:path';

const line = "Let me be your favorite inefficiency: the one manual process you never automate; leaving it manual is a feature, not a bug.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), line, 'utf8');
