// CF_PAGES_URL - only shows pages.dev url
// CF_PAGES_BRANCH
import process from 'node:process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { resolve } from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

if (!!process.env.CF_PAGES && process.env.CF_PAGES_BRANCH == 'trunk') {
	const robotsFile = resolve(__dirname, '../static/robots.txt')
	writeFileSync(robotsFile,
`User-agent: * 
Disallow:
`)
}
