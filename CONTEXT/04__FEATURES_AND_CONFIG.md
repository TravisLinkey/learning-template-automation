# Features and Configuration Guide

This document details all the features and configurations included in this template.

## Table of Contents

1. [Math Rendering](#math-rendering)
2. [Code Block Copy Buttons](#code-block-copy-buttons)
3. [Display Math Styling](#display-math-styling)
4. [Routing](#routing)
5. [Content Formatting](#content-formatting)
6. [Dependencies](#dependencies)

---

## Math Rendering

### Overview

The template includes full LaTeX math equation support using KaTeX. Math equations can be rendered inline or as display blocks with custom styling.

### Configuration

**File:** `astro.config.mjs`

```javascript
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			[rehypeKatex, {
				output: 'html',  // Prevents duplicate rendering
				throwOnError: false,
			}],
		],
	},
});
```

### Dependencies

```json
{
  "dependencies": {
    "katex": "^0.16.27",
    "rehype-katex": "^7.0.1",
    "remark-math": "^6.0.0"
  }
}
```

### CSS Setup

**File:** `src/layouts/BaseLayout.astro`

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
<link rel="preconnect" href="https://cdn.jsdelivr.net" />
```

### Usage

**Inline Math:**
```markdown
The sample space is $\Omega = \{1, 2, 3\}$.
```

**Display Math:**
```markdown
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
```

### Styling

- **Inline math**: Renders inline with text, no special styling
- **Display math**: Appears in recessed card with "Example" label (see Display Math Styling section)

---

## Code Block Copy Buttons

### Overview

All code blocks automatically include a copy button in the top-right corner. Users can click to copy code to their clipboard.

### Implementation

**File:** `src/layouts/BaseLayout.astro`

JavaScript automatically adds copy buttons to all `<pre><code>` blocks on page load.

### Features

- ✅ Automatic button addition to all code blocks
- ✅ Visual feedback ("✓ Copied!" confirmation)
- ✅ Cross-browser support (modern API + fallback)
- ✅ Styled to match site theme

### Customization

**Button Position:**
```css
.copy-code-button {
  top: 0.75rem;
  right: 0.75rem;
}
```

**Button Colors:**
```css
.copy-code-button {
  background-color: #3498db; /* Normal state */
}

.copy-code-button:hover {
  background-color: #2980b9; /* Hover state */
}

.copy-code-button.copied {
  background-color: #27ae60; /* Copied state */
}
```

**Button Text:**
Modify the JavaScript in `BaseLayout.astro`:
```javascript
copyButton.innerHTML = '📋 Copy'; // Change icon/text here
```

---

## Display Math Styling

### Overview

Display math equations (using `$$...$$`) appear in styled recessed cards with an "Example" label above them.

### Styling Details

**Card Appearance:**
- Background: `#f0f2f5` (recessed gray)
- Border: `1px solid #d0d4d8`
- Border radius: `6px`
- Inset shadow for depth effect
- Padding: `1.5rem`

**Example Label:**
- Positioned above the card
- White background with border
- Small uppercase text: "EXAMPLE"
- Subtle shadow

### CSS Location

**Files:**
- `src/layouts/BaseLayout.astro` (global styles)
- `src/components/LessonLayout.astro` (lesson-specific)
- `src/components/QuizLayout.astro` (quiz-specific)

### Customization

**Change Label Text:**
```css
.katex-display::before {
  content: "Example"; /* Change to your preferred label */
}
```

**Change Card Colors:**
```css
.katex-display {
  background-color: #f0f2f5; /* Card background */
  border: 1px solid #d0d4d8; /* Card border */
}
```

**Change Label Styling:**
```css
.katex-display::before {
  background-color: #fff; /* Label background */
  color: #6c757d; /* Label text color */
  /* ... other styles ... */
}
```

---

## Routing

### Available Routes

1. **`/`** - Table of contents (index.astro)
2. **`/home`** - Table of contents (home.astro) - same content as `/`
3. **`/lessons/{chapter}.{lesson}`** - Individual lesson pages
4. **`/quiz/{chapter}.x`** - Chapter summary and quiz pages

### Base Path Configuration

**File:** `astro.config.mjs`

```javascript
export default defineConfig({
  base: '/', // Local development
  // base: '/repository-name/', // GitHub Pages deployment
});
```

**Important:** 
- For local development, use `base: '/'`
- For GitHub Pages, set `base: '/your-repo-name/'`

---

## Content Formatting

### Duplicate Title Prevention

The first H1 heading in markdown content is automatically hidden to prevent duplication with the component header.

**CSS:**
```css
.lesson-content :global(h1:first-of-type),
.quiz-content :global(h1:first-of-type) {
  display: none;
}
```

**Note:** You can still include H1 in markdown for readability, but it won't render on the page.

### Math Equation Best Practices

1. **Use inline math** (`$...$`) for equations within sentences
2. **Use display math** (`$$...$$`) for example equations that should appear in styled cards
3. **Place display math on its own line** with blank lines before and after
4. **Use `\text{}` for text within math** when needed

**Example:**
```markdown
The probability is $P(A) = 0.5$.

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
```

### Code Block Formatting

- Use triple backticks with language identifier
- Copy buttons are automatically added
- No special formatting needed

**Example:**
````markdown
```python
import numpy as np
print("Hello, World!")
```
````

---

## Dependencies

### Required Dependencies

```json
{
  "dependencies": {
    "astro": "^5.16.6",
    "katex": "^0.16.27",
    "rehype-katex": "^7.0.1",
    "remark-math": "^6.0.0"
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }
}
```

### Installation

```bash
npm install
```

This will install all required dependencies including:
- Astro (static site generator)
- KaTeX and plugins (math rendering)
- gh-pages (deployment)

---

## Configuration Checklist

When setting up a new project from this template:

- [ ] Update `astro.config.mjs` with your site URL and base path
- [ ] Update `package.json` with your project name
- [ ] Update `src/components/Header.astro` with your subject name
- [ ] Update `src/pages/index.astro` and `src/pages/home.astro` with your subject details
- [ ] Update `CONTEXT/03__CONTENT_PLAN.md` with your content plan
- [ ] Create your content in `content/lessons/`
- [ ] Test math rendering with sample equations
- [ ] Test copy buttons on code blocks
- [ ] Verify display math appears in styled cards

---

## Troubleshooting

### Math Symbols Not Rendering

- Check that KaTeX CSS is loaded (inspect page source)
- Verify `remark-math` and `rehype-katex` are installed
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Copy Buttons Not Appearing

- Check browser console for JavaScript errors
- Verify code blocks use `<pre><code>` structure
- Ensure JavaScript is enabled in browser

### Duplicate Math Symbols

- Verify `output: 'html'` is set in `rehype-katex` config
- Check that MathML elements are hidden in CSS

### Display Math Not Styled

- Verify CSS is included in `BaseLayout.astro`
- Check that equations use `$$...$$` (double dollar signs)
- Ensure equations are on their own line with blank lines

---

## Additional Resources

- [KaTeX Documentation](https://katex.org/docs/api.html)
- [Astro Markdown Guide](https://docs.astro.build/en/guides/markdown-content/)
- [remark-math](https://github.com/remarkjs/remark-math)
- [rehype-katex](https://github.com/remarkjs/rehype-katex)

