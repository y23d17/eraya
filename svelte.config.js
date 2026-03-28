import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { relative, sep } from 'node:path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// defaults to rune mode for the project, execept for `node_modules`. Can be removed in svelte 6.
		runes: ({ filename }) => {
			const relativePath = relative(import.meta.dirname, filename);
			const pathSegments = relativePath.toLowerCase().split(sep);
			const isExternalLibrary = pathSegments.includes('node_modules');

			return isExternalLibrary ? undefined : true;
		}
	},
	kit: {
		adapter: adapter({
			pages: 'build/www',
			assets: 'build/www',
			fallback: undefined // Essential for Single Page App (SPA) mode
			// precompress: false,
			// strict: false
		}),
		csp: {
			mode: 'hash', // SvelteKit will generate hashes for all inline scripts
			directives: {
				'script-src': ['self', 'unsafe-eval', 'https://ssl.gstatic.com'],
				'object-src': ['none'],
				'base-uri': ['self']
			}
		},
		paths: {
			relative: true
		}
	},
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] }), vitePreprocess()],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
