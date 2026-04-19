/**
 * Rehype plugin: prepend site base path to internal links (href starting with /).
 * Ensures links work in both dev (base /) and production e.g. GitHub Pages (base /learning-template-automation/).
 */
const isBuild = process.argv.some((arg) => arg.includes('build'));
const base = isBuild ? '/learning-template-automation/' : '/';

function visit(tree, fn) {
	if (tree.type === 'element' && tree.tagName === 'a' && tree.properties?.href) {
		fn(tree);
	}
	if (tree.children) {
		for (const child of tree.children) {
			visit(child, fn);
		}
	}
}

export default function rehypeInternalLinksBase() {
	return (tree) => {
		visit(tree, (node) => {
			const href = node.properties.href;
			if (typeof href !== 'string') return;
			// Internal link: starts with / but not // (protocol-relative) or http
			if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/http')) {
				node.properties.href = base.replace(/\/$/, '') + href;
			}
		});
	};
}
