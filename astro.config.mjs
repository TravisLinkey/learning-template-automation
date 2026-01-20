// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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
			rehypeSlug,
			[rehypeAutolinkHeadings, {
				behavior: 'append',
				properties: {
					className: ['anchor-link'],
					ariaLabel: 'Link to this section',
					ariaHidden: false,
				},
				content: {
					type: 'text',
					value: '#',
				},
			}],
			[rehypeKatex, {
				output: 'html',
				throwOnError: false,
			}],
		],
		shikiConfig: {
			// Use dual themes - light by default, dark when html.dark is active
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			// Use CSS variables approach for theme switching
			defaultColor: false,
		},
	},
});
