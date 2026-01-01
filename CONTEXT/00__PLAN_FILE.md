# Problem Statement

We want to create an educational content platform that follows the structure and styling of the LEARN_CPP website. The platform will:
- Display lessons organized by chapters in a table of contents (landing page)
- Present individual lesson pages with consistent formatting
- Include chapter summary and quiz pages
- Use markdown files for content
- Be built with Astro for static site generation
- Target senior software engineers as the audience (configurable)

---

# Template Customization Guide

## Quick Start

To use this template for a new subject:

1. **Update Subject Information:**
   - Replace `{{SUBJECT_NAME}}` with your subject (e.g., "Python Pandas", "React", "TypeScript")
   - Update `{{REPOSITORY_NAME}}` in `astro.config.mjs` with your GitHub repository name
   - Update site title in `src/components/Header.astro`

2. **Configure Content:**
   - Update `CONTEXT/03__CONTENT_PLAN.md` with your subject details
   - Define your chapter structure and topics
   - Create content in `content/lessons/` following the structure

3. **Update Metadata:**
   - Set author name in lesson frontmatter
   - Update site description in `src/layouts/BaseLayout.astro`

4. **Deploy:**
   - Update `astro.config.mjs` with your GitHub Pages base path
   - Push to GitHub and enable Pages

---

# Research

## Relevant Files
- LEARN_CPP: `https://www.learncpp.com/` - Reference website for structure and styling
- CLONE_PLAN: `01__CLONE_EXAMPLE.md` - Detailed documentation of LEARN_CPP patterns and format
- CONTENT_PLAN: `03__CONTENT_PLAN.md` - Content structure and organization plan
- ARCH_DESIGN_PLAN: `02__ARCHITECTURAL_DESIGN.md` - Technical architecture and Astro implementation plan

## Relevant Files Purpose

### LEARN_CPP Website (`https://www.learncpp.com/`)
The reference website that demonstrates the structure, styling, and content organization patterns we want to replicate. This is a comprehensive C++ tutorial site with:
- Chapter-based organization
- Numbered lessons (Chapter.Lesson format)
- Quiz pages at the end of each chapter
- Consistent navigation patterns
- Clean, educational design

### CLONE_PLAN (`01__CLONE_EXAMPLE.md`)
Contains detailed research and documentation about LEARN_CPP patterns including:
- Site structure analysis
- Content format and styling patterns
- Markdown format reference guide
- Template structures for lessons, quizzes, and landing pages
- Navigation patterns
- Typography and formatting conventions

**Key Information:**
- Lesson numbering: `{Chapter}.{Lesson} — {Title}` format
- Quiz pages: `{Chapter}.x — Chapter {N} summary and quiz` format
- Navigation: Previous/Next/Back to TOC links on every page
- Content: Bold for key terms, code blocks for examples, tables for comparisons

### CONTENT_PLAN (`03__CONTENT_PLAN.md`)
Defines the content structure and organization:
- Subject matter and topics to be covered
- Chapter organization
- Lesson sequencing
- Table of contents structure
- Content creation guidelines

**Note:** Update this file with your specific subject matter and content plan.

### ARCH_DESIGN_PLAN (`02__ARCHITECTURAL_DESIGN.md`)
Technical implementation plan using Astro:
- Astro project setup and configuration
- File structure and organization
- Component architecture
- Markdown processing and frontmatter
- Routing and navigation
- Static site generation approach

## Summary

**System Overview:**
We're building a static educational website using Astro that replicates the structure and styling of LEARN_CPP. Content will be written in markdown files, organized by chapters, and rendered as a static site.

**How It Works:**
1. **Content Creation**: Lessons are written as markdown files following the patterns documented in CLONE_PLAN
2. **Content Organization**: Files are organized by chapters, with metadata in frontmatter
3. **Site Generation**: Astro processes markdown files and generates static HTML pages
4. **Navigation**: Navigation links are generated based on lesson order and metadata
5. **Styling**: CSS/styling replicates LEARN_CPP's clean, educational design

**What Needs to Be Done:**
1. Customize subject information (see Template Customization Guide above)
2. Set up content structure following CONTENT_PLAN
3. Create markdown content files
4. Configure deployment settings

---

# Plan

## Important
1. Do not write any test files until specifically prompted to do so.
2. If during your implementation you begin to get stuck, just add that step to the `Backlog` below, and we can always address it later.
3. If you have any clarifying questions before getting started, please ask them, and we will add the answers as details in this plan file.

## Implementation Steps

1. **Project Setup** ✅
   - Astro project initialized
   - Project directory structure created
   - Astro configured for markdown processing

2. **File Structure Creation** ✅
   - `content/lessons/` directory structure (by chapters)
   - `src/components/` for reusable components
   - `src/layouts/` for page layouts
   - `src/pages/` for route pages

3. **Component Development** ✅
   - `LessonLayout.astro` component
   - `QuizLayout.astro` component
   - `LandingPage.astro` component
   - `Navigation.astro` component
   - `LessonMetadata.astro` component

4. **Markdown Processing** ✅
   - Astro markdown integration configured
   - Frontmatter schema/types set up
   - Markdown rendering working

5. **Navigation System** ✅
   - Navigation link generation logic
   - Previous/Next lesson detection
   - "Back to TOC" link functionality

6. **Content Structure**
   - Create chapter structure (customize for your subject)
   - Create lessons following CLONE_PLAN patterns
   - Create quiz pages

7. **Styling** ✅
   - LEARN_CPP-inspired styling implemented
   - Typography styled
   - Navigation elements styled
   - Responsive design

8. **Deployment** ✅
   - GitHub Pages deployment configured
   - GitHub Actions workflow set up

## Relevant code snippets

*See implementation files in `src/` directory*

---

# Implement

## TODO
- [x] 1. Review all CONTEXT files (CLONE_PLAN, ARCH_DESIGN_PLAN, CONTENT_PLAN)
- [x] 2. Initialize Astro project with proper configuration
- [x] 3. Set up project directory structure
- [x] 4. Create base Astro components (layouts, navigation)
- [x] 5. Configure markdown processing with frontmatter
- [x] 6. Create first example lesson following CLONE_PLAN patterns
- [x] 7. Create example quiz page
- [x] 8. Create landing page with table of contents
- [x] 9. Create home page route (`/home`)
- [x] 10. Implement navigation system (Previous/Next/Back to TOC)
- [x] 11. Style site to match LEARN_CPP design patterns
- [x] 12. Configure math rendering (KaTeX with remark-math and rehype-katex)
- [x] 13. Add copy buttons to code blocks
- [x] 14. Style display math equations (recessed cards with "Example" labels)
- [x] 15. Fix duplicate title rendering (hide first H1 in markdown)
- [x] 16. Fix duplicate math symbol rendering
- [x] 17. Test and refine implementation
- [x] 18. Update CONTEXT files with all improvements

## Completed Features

### Math Rendering
- ✅ KaTeX integration for LaTeX math equations
- ✅ Inline math support (`$...$`)
- ✅ Display math support (`$$...$$`) with styled recessed cards
- ✅ "Example" labels above display math equations
- ✅ Fixed duplicate symbol rendering (HTML-only output)
- ✅ KaTeX CSS included from CDN

### Code Blocks
- ✅ Automatic copy buttons on all code blocks
- ✅ Visual feedback (changes to "✓ Copied!" on click)
- ✅ Cross-browser clipboard support (modern API + fallback)
- ✅ Styled buttons matching site theme

### Content Improvements
- ✅ Duplicate H1 headings automatically hidden
- ✅ Home page route (`/home`) for table of contents
- ✅ Base path configuration for local dev and GitHub Pages
- ✅ Math equation examples converted to display format

### Configuration
- ✅ `astro.config.mjs` configured with math plugins
- ✅ `package.json` includes all required dependencies
- ✅ KaTeX CSS linked in BaseLayout
- ✅ Copy button JavaScript in BaseLayout

## Backlog

- [ ] 1. Add search functionality (if needed)
- [ ] 2. Add syntax highlighting for code blocks (currently plain text)
- [ ] 3. Add collapsible quiz solutions (currently using `<details>`)
- [ ] 4. Add table of contents generation automation
- [ ] 5. Add content validation/linting
- [ ] 6. Add dark mode support
- [ ] 7. Add print stylesheet
