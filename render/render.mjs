import { execFileSync } from 'node:child_process';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const source = new URL('./news.html', import.meta.url);
const output = fileURLToPath(new URL('../entry.png', import.meta.url));

execFileSync('google-chrome', [
  '--headless',
  '--no-sandbox',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1024,1024',
  `--screenshot=${output}`,
  source.href,
], { stdio: 'inherit' });

const { size } = statSync(output);
if (size > 1_048_576) throw new Error(`PNG exceeds the contest limit: ${size} bytes`);
