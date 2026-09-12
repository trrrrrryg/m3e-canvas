/* Capture real M3E Canvas desktop UI states for the walkthrough video. */
import { createRequire } from 'node:module';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
// resolve global playwright when NODE_PATH is not honored under ESM
const gRoot = process.env.NODE_PATH?.split(';')[0] || '';
let _electron;
try {
  ({ _electron } = require('playwright'));
} catch {
  ({ _electron } = require(path.join(gRoot, 'playwright')));
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'docs', 'demo-assets', 'ui-shots');
const EXE = path.join(ROOT, 'release', 'win-unpacked', 'M3E Canvas.exe');

fs.mkdirSync(OUT, { recursive: true });

async function main() {
  const app = await _electron.launch({
    executablePath: EXE,
    args: [],
    env: { ...process.env, M3E_MIRROR_TEST: '1' },
  });
  const page = await app.firstWindow();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(2500);

  const shot = async (name) => {
    const file = path.join(OUT, name);
    await page.screenshot({ path: file, type: 'png' });
    console.log('saved', file);
  };

  await shot('01-main.png');

  const connect = page.locator('button:has-text("Connect")').first();
  if (await connect.count()) {
    await connect.click();
    await page.waitForTimeout(1500);
    await shot('02-connect-dialog.png');
    await page.waitForTimeout(800);
    await shot('03-connect-hold.png');
  } else {
    console.log('Connect button not found');
  }

  await app.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
