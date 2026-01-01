// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://travislinkey.github.io',
	base: '/', // Set to '/your-repo-name/' for GitHub Pages deployment
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
