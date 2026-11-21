// Publish the rendered news poster in the contest runner's output directory.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const destination = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const poster = new URL('./entry.png', import.meta.url);
const outputFile = join(destination, 'entry.png');

mkdirSync(destination, { recursive: true });
copyFileSync(poster, outputFile);
