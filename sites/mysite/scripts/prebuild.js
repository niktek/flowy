// CF_PAGES_URL
// CF_PAGES_BRANCH
import process from 'node:process';
import { unlinkSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { resolve } from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

if (!!process.env.CF_PAGES && process.env.CF_PAGES_BRANCH == 'trunk') {
	unlinkSync(resolve(__dirname, '../static/robots.txt'));
}
