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
			fallback: 'index.html', // Essential for Single Page App (SPA) mode
			precompress: false,
			strict: true
		}),
		csp: {
			mode: 'hash', // SvelteKit will generate hashes for all inline scripts
			directives: {
				'default-src': ['self', 'http://localhost', 'https://localhost'],
				'script-src': [
					'self',
					'unsafe-inline',
					'unsafe-eval',
					'http://localhost',
					'https://localhost',
					'https://ssl.gstatic.com'
				],
				'img-src': ['self', 'data:', 'http://localhost', 'https://localhost'],
				'style-src': ['self', 'unsafe-inline'],
				'object-src': ['none']
			}
		},
		appDir: 'app',
		paths: {
			relative: true,
			base: '',
			assets: ''
		}
	},
	preprocess: [mdsvex({ extensions: ['.svx', '.md'] }), vitePreprocess()],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
