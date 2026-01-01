# Template Setup Guide

This guide will help you customize this template for your own learning subject.

## Step 1: Update Configuration Files

### 1.1 Update `astro.config.mjs`

Replace the repository name and site URL. **Note:** For local development, set `base: '/'`. For GitHub Pages deployment, set `base: '/{{REPOSITORY_NAME}}/'`.

```javascript
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	site: 'https://{{GITHUB_USERNAME}}.github.io',
	base: '/', // Set to '/{{REPOSITORY_NAME}}/' for GitHub Pages deployment
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
```

**Example:**
```javascript
export default defineConfig({
	site: 'https://travislinkey.github.io',
	base: '/', // Local development
	// base: '/probability/', // For GitHub Pages deployment
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
```

**Important:** This template includes math rendering support (KaTeX) for LaTeX equations. The configuration is already set up - you just need to update the site URL and base path.

### 1.2 Update `package.json`

Update the project name:

```json
{
  "name": "{{PROJECT_NAME}}",
  ...
}
```

**Note:** The template already includes the following dependencies:
- `astro` - Static site generator
- `katex` - Math rendering library
- `rehype-katex` - KaTeX plugin for rehype
- `remark-math` - Math plugin for remark
- `gh-pages` - GitHub Pages deployment (dev dependency)

No additional installation needed unless you want to add more features.

### 1.3 Update `src/components/Header.astro`

Change the site title:

```astro
<h1 class="site-title-text">Learn {{SUBJECT_NAME}}</h1>
```

**Example:**
```astro
<h1 class="site-title-text">Learn Python Pandas</h1>
```

### 1.4 Update `src/pages/index.astro` and `src/pages/home.astro`

Both files serve as table of contents pages. Update the welcome text and site description in both:

```astro
const SITE_TITLE = "Learn {{SUBJECT_NAME}}";
const SITE_DESCRIPTION = "A comprehensive tutorial series for learning {{SUBJECT_NAME}}";
const TARGET_AUDIENCE = "{{TARGET_AUDIENCE}}";
const SUBJECT_DESCRIPTION = "{{SUBJECT_DESCRIPTION}}";
```

**Note:** The template includes both `/` (index.astro) and `/home` (home.astro) routes for the table of contents. Both display the same content.

## Step 2: Update Content Plan

Edit `CONTEXT/03__CONTENT_PLAN.md`:

1. Replace `{{SUBJECT_NAME}}` with your subject
2. Replace `{{OFFICIAL_DOCS_URL}}` with official documentation link
3. Replace `{{TARGET_AUDIENCE}}` with your target audience
4. Replace `{{AUTHOR_NAME}}` with your name

## Step 3: Create Your Content

### 3.1 Create Chapter Structure

Create directories in `content/lessons/`:

```bash
mkdir -p content/lessons/chapter-0
mkdir -p content/lessons/chapter-1
# ... etc
```

### 3.2 Create Lesson Files

Create markdown files following this pattern:

**File:** `content/lessons/chapter-0/0.1-introduction.md`

```markdown
---
title: "Introduction to {{SUBJECT_NAME}}"
chapter: 0
lesson: 1
author: "{{AUTHOR_NAME}}"
date: "2025-01-15"
description: "An introduction to {{SUBJECT_NAME}}"
---

# 0.1 — Introduction to {{SUBJECT_NAME}}

Your lesson content here...
```

### 3.3 Create Quiz Files

**File:** `content/lessons/chapter-0/0.x-chapter-0-summary-and-quiz.md`

```markdown
---
title: "Chapter 0 summary and quiz"
chapter: 0
lesson: x
author: "{{AUTHOR_NAME}}"
date: "2025-01-15"
description: "Summary and quiz for Chapter 0"
---

# 0.x — Chapter 0 summary and quiz

## Chapter summary

Your chapter summary here...

## Quiz time

**Question #1**

Your question here...

<details>
<summary>Show Solution</summary>

Your solution here...

</details>
```

## Step 4: Update GitHub Pages Configuration

### 4.1 Update Workflow (if needed)

The workflow in `.github/workflows/deploy.yml` should work as-is, but verify the branch name matches your default branch (usually `main`).

### 4.2 Enable GitHub Pages

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Push your code to trigger deployment

## Step 5: Customize Styling (Optional)

### 5.1 Update Colors

Edit `src/layouts/BaseLayout.astro` to change color scheme:

```css
/* Primary link color */
a {
  color: #2980b9; /* Change this */
}

/* Accent color for code blocks */
border-left: 4px solid #3498db; /* Change this */

/* Display math card background */
background-color: #f0f2f5; /* Change this for math example cards */
```

### 5.2 Update Fonts

Edit `src/layouts/BaseLayout.astro`:

```css
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...;
  font-size: 20px; /* Adjust as needed */
}
```

### 5.3 Math Equation Styling

The template includes styled display math equations that appear in recessed cards with "Example" labels. To customize:

- **Card background**: Edit `.katex-display` background-color in `BaseLayout.astro`
- **Label text**: Change `content: "Example"` in `.katex-display::before` to your preferred label
- **Label styling**: Adjust colors, fonts, and positioning in the `::before` pseudo-element styles

### 5.4 Code Block Copy Buttons

Copy buttons are automatically added to all code blocks. To customize:

- **Button position**: Adjust `top` and `right` values in `.copy-code-button` styles
- **Button colors**: Change `background-color` for normal and hover states
- **Button text**: Modify the JavaScript in `BaseLayout.astro` to change button text/icons

## Step 6: Test Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to preview your site.

## Step 7: Deploy

```bash
git add .
git commit -m "Initial setup for {{SUBJECT_NAME}}"
git push origin main
```

The GitHub Action will automatically deploy your site.

## Step 8: Math and Code Features

### 8.1 Math Equations

The template supports LaTeX math rendering:

- **Inline math**: Use single dollar signs `$...$` for inline equations
  ```markdown
  The sample space is $\Omega = \{1, 2, 3\}$.
  ```

- **Display math**: Use double dollar signs `$$...$$` for block equations (appears in styled cards)
  ```markdown
  $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
  ```

- **Example cards**: Display math automatically appears in recessed cards with "Example" labels

### 8.2 Code Blocks

- All code blocks automatically include a **copy button** in the top-right corner
- Click the button to copy code to clipboard
- Button shows "✓ Copied!" confirmation when clicked
- Works with all code blocks (Python, JavaScript, bash, etc.)

### 8.3 Content Formatting Tips

- **Hide duplicate H1**: The first H1 in markdown content is automatically hidden (component header is used instead)
- **Math symbols**: Use LaTeX commands like `\neq`, `\ne`, or `\not=` for "not equal"
- **Example equations**: Convert bullet-point examples to display math (`$$...$$`) for styled card appearance

## Quick Reference: Placeholders to Replace

| Placeholder | Where to Find | Example |
|------------|---------------|---------|
| `{{SUBJECT_NAME}}` | Header, titles, descriptions | "Python Pandas" |
| `{{REPOSITORY_NAME}}` | `astro.config.mjs` | "learning-template-automation" |
| `{{GITHUB_USERNAME}}` | `astro.config.mjs` | "travislinkey" |
| `{{TARGET_AUDIENCE}}` | `CONTEXT/03__CONTENT_PLAN.md` | "Senior Software Engineers" |
| `{{AUTHOR_NAME}}` | Lesson frontmatter | "Your Name" |
| `{{OFFICIAL_DOCS_URL}}` | `CONTEXT/03__CONTENT_PLAN.md` | "https://pandas.pydata.org/" |
| `{{SUBJECT_DESCRIPTION}}` | `src/pages/index.astro` | "the Pandas library for data manipulation" |

## Need Help?

- Check `CONTEXT/01__CLONE_EXAMPLE.md` for content formatting patterns
- Check `CONTEXT/02__ARCHITECTURAL_DESIGN.md` for technical details
- Check `CONTEXT/04__FEATURES_AND_CONFIG.md` for features documentation (math rendering, copy buttons, etc.)
- Review the example content in `content/lessons/chapter-0/` as a template

## New Features in This Template

This template includes several enhanced features:

1. **Math Rendering**: Full LaTeX support with KaTeX
   - Inline math: `$...$`
   - Display math: `$$...$$` (appears in styled cards)

2. **Code Copy Buttons**: Automatic copy buttons on all code blocks

3. **Display Math Styling**: Example equations appear in recessed cards with labels

4. **Home Page Route**: Table of contents available at both `/` and `/home`

5. **Duplicate Prevention**: Automatic hiding of duplicate H1 headings

See `CONTEXT/04__FEATURES_AND_CONFIG.md` for detailed documentation on all features.

