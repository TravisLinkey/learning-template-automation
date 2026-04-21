/**
 * Remark plugin to transform blockquotes starting with "Review This Lesson" 
 * into styled divs with class "backlink-box".
 */
export function remarkBacklink() {
	return (tree) => {
		const visit = (node, index, parent) => {
			if (node.type === 'blockquote') {
				// Get text content
				const text = node.children
					.map((child) => {
						if (child.type === 'paragraph') {
							return child.children
								.map((c) => (c.type === 'text' ? c.value : ''))
								.join('');
						}
						return '';
					})
					.join(' ');

				// Check if it's a backlink box
				if (
					text.startsWith('Review This Lesson') ||
					text.startsWith('Back to Lesson') ||
					text.startsWith('Related Lesson')
				) {
					// Replace blockquote with a custom HTML div
					// We need to preserve the inner content
					parent.children[index] = {
						type: 'html',
						value: `<div class="backlink-box">`,
					};
					
					// Insert the original children after the opening div
					const children = node.children;
					node.children.forEach((child, i) => {
						parent.children.splice(index + 1 + i, 0, child);
					});
					
					// Add closing div
					parent.children.splice(index + 1 + children.length, 0, {
						type: 'html',
						value: `</div>`,
					});
				}
			}
			
			// Visit children
			if (node.children) {
				node.children.forEach((child, i, children) => visit(child, i, children));
			}
		};
		
		tree.children.forEach((child, i, children) => visit(child, i, children));
	};
}