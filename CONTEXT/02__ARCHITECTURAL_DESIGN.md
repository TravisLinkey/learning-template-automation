# Problem Statement
We are using [Astro](https://docs.astro.build/en/getting-started/) to build our statically hosted site. Astro will process markdown files, generate static pages, and handle routing for our educational content platform.

---
# Research
Please scan through the code, starting from the `Relevant Files` I give you below and determine exactly what each file is used for and add that information into the `Relevant Files Purpose` section. Once we have an understanding of the relevant files, go ahead and give a `Summary` on how our system works and what needs to be done to accomplish our goal. Once you have finished your research, go ahead and fill out the `TODO` steps below.

## Relevant Files
- ASTRO_DOCS: `https://docs.astro.build/en/getting-started/` - Official Astro documentation
- CLONE_PLAN: `01__CLONE_EXAMPLE.md` - Reference for content structure and patterns
- CONTENT_PLAN: `03__CONTENT_PLAN.md` - Content organization structure

## Relevant Files Purpose

### Astro Documentation (`https://docs.astro.build/en/getting-started/`)
Astro is a modern static site generator that:
- Processes markdown files natively
- Supports frontmatter for metadata
- Generates static HTML at build time
- Supports components (`.astro` files)
- Has built-in routing based on file structure
- Can integrate with various frameworks if needed

**Key Features for Our Project:**
- [Markdown & MDX](https://docs.astro.build/en/guides/markdown-content/) - Native markdown support with frontmatter
- [File-based Routing](https://docs.astro.build/en/core-concepts/routing/) - Automatic routing from file structure
- [Content Collections](https://docs.astro.build/en/guides/content-collections/) - Type-safe content management (optional but recommended)
- [Layouts](https://docs.astro.build/en/core-concepts/astro-pages/#page-layouts) - Reusable page layouts
- [Components](https://docs.astro.build/en/core-concepts/astro-components/) - `.astro` component files

### CLONE_PLAN (`01__CLONE_EXAMPLE.md`)
Provides the content structure patterns we need to implement:
- Lesson page structure
- Quiz page structure
- Landing page structure
- Navigation patterns
- Markdown format conventions

### CONTENT_PLAN (`03__CONTENT_PLAN.md`)
Defines how content should be organized:
- Chapter structure
- Lesson numbering
- File naming conventions
- Content metadata requirements

## Summary

**Architecture Overview:**
We're building a static site with Astro that processes markdown lesson files and generates HTML pages. The architecture follows Astro's file-based routing and component system.

**How It Works:**
1. **Content Files**: Markdown files in `content/lessons/` organized by chapters
2. **Astro Pages**: Pages in `src/pages/` that process markdown and render content
3. **Components**: Reusable `.astro` components for layouts, navigation, metadata
4. **Routing**: Astro automatically creates routes from `src/pages/` file structure
5. **Build**: Astro generates static HTML files at build time

**File Structure:**
```
project-root/
├── content/
│   └── lessons/
│       ├── chapter-0/
│       │   ├── 0.1-introduction.md
│       │   └── ...
│       └── chapter-1/
│           ├── 1.1-first-lesson.md
│           └── ...
├── src/
│   ├── components/
│   │   ├── LessonLayout.astro
│   │   ├── QuizLayout.astro
│   │   ├── Navigation.astro
│   │   └── LessonMetadata.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro (landing page)
│   │   ├── lessons/
│   │   │   └── [...slug].astro (dynamic lesson pages)
│   │   └── quiz/
│   │       └── [...slug].astro (dynamic quiz pages)
│   └── styles/
│       └── global.css
└── astro.config.mjs
```

**Key Implementation Details:**
- Use Astro's markdown integration for processing `.md` files
- Use frontmatter for lesson metadata (title, chapter, lesson number, author, date)
- Use dynamic routes (`[...slug].astro`) to handle all lessons from a single template
- Generate navigation links by reading frontmatter and file structure
- **Math Rendering**: Configure `remark-math` and `rehype-katex` for LaTeX equation support
- **Code Copy Buttons**: JavaScript automatically adds copy buttons to all code blocks
- **Display Math Styling**: Display math (`$$...$$`) appears in recessed cards with "Example" labels
- **Duplicate Title Prevention**: First H1 in markdown is hidden (component header is used)
- Use Content Collections (optional) for type-safe content management

---
# Plan

## Important
1. If during your implementation you begin to get stuck, just add that step to the `Backlog` below, and we can always address it later.
2. If you have any clarifying questions before getting started, please ask them, and we will add the answers as details in this plan file.

## Implementation Steps

1. **Astro Project Initialization**
   - Run `npm create astro@latest` or equivalent
   - Choose minimal template
   - Install math rendering: `npm install remark-math rehype-katex katex`
   - Configure `astro.config.mjs` with math plugins
   - Add KaTeX CSS to BaseLayout

2. **Project Structure Setup**
   - Create `content/lessons/` directory structure
   - Create `src/components/` directory
   - Create `src/layouts/` directory
   - Create `src/pages/` directory structure
   - Create `src/styles/` directory

3. **Markdown Configuration**
   - Configure markdown in `astro.config.mjs` with math plugins
   - Set up frontmatter schema/types
   - Configure KaTeX for math rendering (output: 'html')
   - Add KaTeX CSS link to BaseLayout
   - Test markdown processing and math rendering

4. **Base Layout Component**
   - Create `BaseLayout.astro` with HTML structure
   - Add global styles
   - Include navigation component
   - Add metadata/SEO support
   - Add KaTeX CSS for math rendering
   - Add copy button JavaScript for code blocks
   - Style display math equations (recessed cards with labels)
   - Hide duplicate H1 headings from markdown

5. **Lesson Layout Component**
   - Create `LessonLayout.astro` component
   - Accept markdown content and frontmatter
   - Display lesson title, metadata (author, date)
   - Render markdown content
   - Include navigation component

6. **Quiz Layout Component**
   - Create `QuizLayout.astro` component
   - Similar to lesson layout but for quiz pages
   - Handle quiz question formatting
   - Handle solution display (collapsible or separate)

7. **Navigation Component**
   - Create `Navigation.astro` component
   - Accept current lesson info and all lessons data
   - Generate Previous/Next links
   - Add "Back to TOC" link
   - Handle edge cases (first/last lesson)

8. **Landing Page**
   - Create `src/pages/index.astro` (table of contents at `/`)
   - Create `src/pages/home.astro` (table of contents at `/home`)
   - Read all lesson files to build table of contents
   - Organize by chapters
   - Display chapter titles and lesson lists
   - Link to lesson pages
   - Both routes display the same content

9. **Dynamic Lesson Pages**
   - Create `src/pages/lessons/[...slug].astro`
   - Read markdown file based on slug
   - Process frontmatter
   - Render using `LessonLayout` component
   - Handle 404 for missing lessons

10. **Dynamic Quiz Pages**
    - Create `src/pages/quiz/[...slug].astro`
    - Similar to lesson pages but use `QuizLayout`
    - Handle quiz-specific formatting

11. **Styling**
    - Create global CSS file
    - Style typography to match LEARN_CPP
    - Style code blocks with copy buttons
    - Style display math equations (recessed cards with "Example" labels)
    - Style inline math equations
    - Style navigation elements
    - Hide duplicate H1 headings
    - Ensure responsive design

12. **Navigation Logic**
    - Create utility to read all lessons and determine order
    - Generate navigation links based on lesson order
    - Handle chapter boundaries
    - Link quiz pages appropriately

## Relevant code snippets

*To be added during implementation*

**Key Astro Patterns:**
- Frontmatter access: `Astro.props.frontmatter` in components
- Markdown content: Use `<slot />` in layout components
- Dynamic routes: Use `getStaticPaths()` in `[...slug].astro`
- Content reading: Use `Astro.glob()` to read all markdown files

---
# Implement

## TODO
- [x] 1. Initialize Astro project with markdown support
- [x] 2. Set up project directory structure
- [x] 3. Create BaseLayout.astro component
- [x] 4. Create LessonLayout.astro component
- [x] 5. Create QuizLayout.astro component
- [x] 6. Create Navigation.astro component
- [x] 7. Create landing page (index.astro) with table of contents
- [x] 8. Create home page (home.astro) with table of contents
- [x] 9. Create dynamic lesson page route ([...slug].astro)
- [x] 10. Create dynamic quiz page route ([...slug].astro)
- [x] 11. Implement navigation link generation logic
- [x] 12. Configure markdown processing and frontmatter
- [x] 13. Configure math rendering (KaTeX)
- [x] 14. Add copy buttons to code blocks
- [x] 15. Style display math equations (recessed cards)
- [x] 16. Hide duplicate H1 headings
- [x] 17. Style components to match LEARN_CPP design
- [x] 18. Test all page types and navigation

## Backlog

- [ ] 1. Add Content Collections for type-safe content
- [ ] 2. Add search functionality
- [ ] 3. Add syntax highlighting for code blocks (currently plain text)
- [ ] 4. Add table of contents generation script
- [ ] 5. Add content validation
- [ ] 6. Add build-time navigation generation
- [ ] 7. Optimize images if needed
- [ ] 8. Add analytics integration (if needed)
- [ ] 9. Add dark mode support
- [ ] 10. Add print stylesheet
