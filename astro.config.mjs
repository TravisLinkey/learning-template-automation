// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Use production base path only for builds, use root for dev
// In dev mode, use root path. In build mode (for GitHub Pages), use the repo path
const isBuild = process.argv.some(arg => arg.includes('build'));
const base = isBuild ? '/learning-template-automation/' : '/';

// https://astro.build/config
export default defineConfig({
	site: 'https://travislinkey.github.io',
	base: base,
	output: 'static',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			[rehypeKatex, {
				output: 'html',
				throwOnError: false,
			}],
		],
	},
});
