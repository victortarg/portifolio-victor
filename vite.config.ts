import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const stylesDir = fileURLToPath(new URL('./src/lib/styles', import.meta.url));

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				loadPaths: [stylesDir],
				additionalData: '@use "abstracts" as *;\n'
			}
		}
	},
	plugins: [
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			preprocess: vitePreprocess(),
			adapter: adapter()
		})
	]
});
