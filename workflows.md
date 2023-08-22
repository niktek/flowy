on master
	- if we can detect source branch from anything other than dev, then reject it - https://stackoverflow.com/questions/58033366/how-to-get-the-current-branch-within-github-actions
	- lint and svelte-check (technically not needed as if we check for dev source only, it must have been already fixed - just not from assholes that commit directly to master :P)
	- changesets publish skeleton@latest to npm to get release notes and semver calcs
	- publish csa@latest to npm
	- publish skeleton.dev to hosting provider as production

on dev
	- lint and svelte-check reject if fail
	- if changed snapshot skeleton@dev to npm with @dev tag
	- if changed snapshot csa@dev to npm with @dev tag
	- publish skeleton.dev to hosting provider as dev.skeleton.dev

on version-*
	- if new version create v*.skeleton.dev subdomain and gen versions.json for menu switching
	- lint and svelte-check reject if fail
	- if changed snapshot skeleton@dev to npm with @next tag
	- if changed snapshot csa@dev to npm with @next tag
	- publish skeleton.dev to hosting provider as v*.skeleton.dev


need to determine if changesets can handle pre-release mode for the incrementals - it can

Setup:
confirm registry setting in root .npmrc
add wrangler as project dep
add vercel as global tool
create CI tokens for both - add to .env