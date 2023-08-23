// CF_PAGES_URL
// CF_PAGES_BRANCH
import process from 'node:process';
import { unlinkSync } from 'node:fs';

if (!!process.env.CF_PAGES && process.env.CF_PAGES_BRANCH == 'trunk' ) {
	unlinkSync('../static/robots.txt')
}
