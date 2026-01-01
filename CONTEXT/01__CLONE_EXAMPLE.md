# Problem Statement
We want to create our content based on the styling and format of the LEARN_CPP (link below) website. Both in the layout of the content and the study plan style. We should start by with a table of contents (Landing Page), and go through the topics in an order that makes sense for a beginner.

The lesson plans should be written in markdown (.md files) and they should be styled similar to the LEARN_CPP format. We do not need the comment section, but I would like to provide Quiz Questions when it makes sense.

---
# Research
Please scan through the code, starting from the `Relevant Files` I give you below and determine exactly what each file is used for and add that information into the `Relevant Files Purpose` section. Once we have an understanding of the relevant files, go ahead and give a `Summary` on how our system works and what needs to be done to accomplish our goal. Once you have finished your research, go ahead and fill out the `TODO` steps below.

# Note
I want to keep this project modularized, this file should only contain necessary information about the LEARN_CPP website. Any content related information should be found in the CONTENT_PLAN mentioned file below.

## Relevant Files
- LEARN_CPP: `https://www.learncpp.com/`
- CONTENT_PLAN: `03__CONTENT_PLAN.md`
- ARCH_DESIGN_PLAN: `02__ARCH_DESIGN_PLAN.md`

## Relevant Files Purpose

### LEARN_CPP Website (`https://www.learncpp.com/`)
The LEARN_CPP website is a comprehensive C++ tutorial site that serves as our reference for content structure and styling. Key observations:

**Site Structure:**
- **Landing Page**: Table of contents organized by chapters (Chapter 0, 1, 2, etc.) with numbered lessons (e.g., 0.1, 0.2, 1.1, 1.2)
- **Lesson Pages**: Individual tutorial pages with clear lesson numbers and titles (e.g., "0.1 — Introduction to these tutorials")
- **Chapter Summary/Quiz Pages**: End-of-chapter pages (e.g., "1.x — Chapter 1 summary and quiz") that include:
  - Chapter review with key concepts and definitions
  - Quiz questions with "Show Solution" links
- **Navigation**: Each lesson has Previous/Next lesson links and a "Back to table of contents" link

**Content Format & Styling:**
- **Headings**: Clear hierarchy with lesson numbers (e.g., "0.1 — Introduction to these tutorials")
  - Format: `{Chapter}.{Lesson} — {Title}` for regular lessons
  - Format: `{Chapter}.x — Chapter {N} summary and quiz` for quiz pages
- **Metadata**: Author name and publication date displayed below title
  - Format: Author icon + Author name (linked) | Date icon + Date
- **Typography**: 
  - Regular paragraphs for explanations
  - **Bold text** for key terms and concepts (e.g., "A **statement** is...")
  - `Monospace/code font` for code examples, keywords, and technical terms
  - Clear, readable spacing between sections
- **Content Elements**:
  - Well-structured paragraphs with clear explanations
  - Code blocks for examples (typically with syntax highlighting)
  - Lists (ordered/unordered) for structured information
  - Tables for comparisons (e.g., initialization types table)
  - Blockquotes for testimonials or important notes
  - Quiz questions formatted as "Question #1", "Question #2", etc. with "Show Solution" links
  - Section headings for organizing content within lessons (e.g., "Lesson structure", "Goals", "Getting the most out of these tutorials")
- **Visual Design**: Clean, minimalist design with white main content area and good typography
- **Navigation Elements**: 
  - "Next lesson" link (with lesson number and title)
  - "Back to table of contents" link
  - "Previous lesson" link (with lesson number and title, or "No previous lesson" for first lesson)

**Key Features to Replicate:**
1. Chapter-based organization with numbered lessons
2. Clear lesson numbering system (Chapter.Lesson format, with .x for quiz pages)
3. Chapter summary and quiz pages (combines review content with quiz questions)
4. Navigation between lessons (Previous/Next/Back to TOC pattern)
5. Consistent markdown formatting with proper use of bold, code blocks, and lists
6. Quiz questions with solutions (format: "Question #N" followed by question text, then "Show Solution" link)
7. Metadata display (author and date) on each lesson page
8. Section organization within lessons (using descriptive headings)

**Content Organization Patterns:**
- **Progressive Disclosure**: Concepts introduced gradually, building on previous lessons
- **Example-Driven**: Heavy use of code examples to illustrate concepts
- **Definition-Focused**: Key terms are defined with bold emphasis within explanatory text
- **Practical Tips**: Best practices and common pitfalls included throughout lessons
- **Review Integration**: Chapter summaries consolidate key concepts before quizzes
- **Self-Contained Lessons**: Each lesson can stand alone but builds on previous knowledge
- **FAQ Sections**: Some lessons include "Common site-related questions" or similar FAQ sections

**Landing Page Structure:**
- Welcome/introductory paragraph(s) explaining the site
- Table of Contents organized by chapters
- Each chapter section shows:
  - Chapter number and title (e.g., "Chapter 0: Introduction / Getting Started")
  - List of lessons with numbers and titles (e.g., "0.1 Introduction to these tutorials")
  - Chapter summary/quiz link at the end (e.g., "1.x Chapter 1 summary and quiz")
- Chapters are visually separated (likely with horizontal rules or spacing)

**Lesson Page Structure (Detailed):**
1. **Header Section:**
   - Lesson number and title (H1)
   - Author metadata (icon + name link)
   - Date metadata (icon + date)

2. **Content Section:**
   - Introduction paragraph(s)
   - Main content organized with section headings (H2, H3)
   - Code examples in code blocks
   - Key terms in bold
   - Lists for structured information
   - Tables for comparisons
   - Blockquotes for testimonials/notes

3. **Navigation Section:**
   - Next lesson link (with number and title)
   - Back to table of contents link
   - Previous lesson link (with number and title, or "No previous lesson")

**Quiz Page Structure:**
1. **Header Section:** Same as lesson page
2. **Chapter Review Section:**
   - Summary of key concepts
   - Definitions with bold terms
   - Tables for comparisons
   - Best practices and tips
3. **Quiz Section:**
   - "Quiz time" heading
   - Numbered questions ("Question #1", "Question #2", etc.)
   - Each question followed by "Show Solution" link
   - Solutions appear when link is clicked (JavaScript-based)
4. **Navigation Section:** Same as lesson page

## Summary

The LEARN_CPP website demonstrates a well-organized educational content structure that serves as our reference model. Key patterns observed:

**Content Organization Pattern:**
- **Hierarchical Structure**: Content is organized into chapters, with each chapter containing multiple numbered lessons
- **Numbering System**: Uses `Chapter.Lesson` format (e.g., 0.1, 0.2, 1.1, 1.2) for regular lessons, and `Chapter.x` format (e.g., 1.x) for chapter summary/quiz pages
- **Progressive Learning**: Chapters build upon each other, with Chapter 0 serving as an introduction/getting started section

**Content Format Patterns:**
- **Lesson Pages**: Each lesson follows a consistent structure with title, metadata, content sections, and navigation
- **Quiz Pages**: End-of-chapter pages that consolidate learning with review content and quiz questions
- **Navigation**: Consistent navigation pattern (Previous/Next/Back to TOC) on every lesson page

**Styling Patterns:**
- **Typography Hierarchy**: Clear distinction between headings, body text, code, and emphasized terms
- **Code Presentation**: Inline code for keywords/terms, code blocks for examples
- **Content Emphasis**: Bold for key terms, code font for technical terms, regular text for explanations

**Key Takeaways for Replication:**
1. The format is markdown-friendly (can be represented in .md files)
2. Structure is template-driven (consistent patterns across all lessons)
3. Navigation is systematic (can be auto-generated based on lesson order)
4. Content is modular (each lesson is self-contained but linked)

---
# Plan

## Important
1. If during your implementation you begin to get stuck, just add that step to the `Backlog` below, and we can always address it later.
2. If you have any clarifying questions before getting started, please ask them, and we will add the answers as details in this plan file.

## Clarifying Questions
1. **What subject matter/topic will we be teaching?** (e.g., C++, Python, Web Development, Data Structures, etc.)
2. **What is the target audience?** (e.g., complete beginners, intermediate learners, etc.)
3. **How many chapters/lessons are we planning to create initially?**
4. **Do we want to use a static site generator (like Jekyll, Hugo, or MkDocs) to render the markdown, or just keep it as plain markdown files?**
5. **For quiz solutions, do you prefer:**
   - Collapsible sections in markdown (if supported by renderer)
   - Separate solution sections on the same page
   - Separate solution files
   - Inline solutions that can be hidden/shown

## Answers
1. Checkout the ./03__CONTENT_PLAN.md for this information
2. Senior Software Engineers
3. The Landing Page, (Home page) should contain a Table of Contents that should be a work in progress, but should capture the breadth of understanding necessary to understand the entire subject from a beginner/intermediate level. (This should be configurable based on the CONTENT_PLAN)
4. This is already captured in the ARCH_DESIGN_PLAN and it is out of the scope for this document. (See the ARCH_DESIGN_PLAN for more info)
5. Either collapsible sections in markdown or Inline that can be hidden / shown, whatever is supported in markdown. If neither is supported, we can use seperate solution files for now.

## Implementation Steps

*Note: Implementation details for our project are documented in ARCH_DESIGN_PLAN.md. This section focuses on understanding LEARN_CPP patterns.*

1. **Document LEARN_CPP Patterns** ✅
   - Analyze site structure and organization
   - Document content format patterns
   - Identify styling conventions
   - Map navigation patterns

2. **Template Pattern Analysis**
   - Identify reusable template patterns from LEARN_CPP
   - Document lesson page structure
   - Document quiz page structure
   - Document landing page structure

3. **Markdown Format Mapping**
   - Map LEARN_CPP visual elements to markdown syntax
   - Document how to represent LEARN_CPP patterns in markdown
   - Identify any limitations or considerations

4. **Style Guide Documentation**
   - Document typography patterns (bold, code, headings)
   - Document content organization patterns
   - Document quiz question format patterns
   - Create reference examples

## Markdown Format Reference

*This section documents how LEARN_CPP patterns translate to markdown syntax*

### Lesson Title Format
```markdown
# {Chapter}.{Lesson} — {Title}
```
Example: `# 0.1 — Introduction to these tutorials`

### Quiz Page Title Format
```markdown
# {Chapter}.x — Chapter {N} summary and quiz
```
Example: `# 1.x — Chapter 1 summary and quiz`

### Metadata Format
*To be documented based on frontmatter requirements (see ARCH_DESIGN_PLAN)*
Note: LEARN_CPP displays author and date below the title. In markdown, this could be:
- Frontmatter (YAML/TOML) for metadata
- Plain text below title for display

### Key Terms Format
Use **bold** for key terms within sentences:
```markdown
A **statement** is a type of instruction that causes the program to perform some action.
```

### Code Format
- **Inline code**: Use single backticks for keywords, function names, and technical terms
  ```markdown
  Every C++ program must include a special function named `main`.
  ```
- **Code blocks**: Use triple backticks with language specification for examples
  ````markdown
  ```cpp
  int x = 5;
  ```
  ````

### Section Headings
Use descriptive headings to organize content within lessons:
```markdown
## Lesson structure
## Goals
## Getting the most out of these tutorials
```

### Lists Format
- **Unordered lists** for general information
- **Ordered lists** for sequential steps or numbered items
- Lists can contain paragraphs, code blocks, and nested lists

### Tables Format
Use markdown tables for comparisons:
```markdown
| Initialization Type | Example | Note |
|---------------------|---------|------|
| Default-initialization | `int x;` | In most cases, leaves variable with indeterminate value |
```

### Blockquotes Format
Use blockquotes for testimonials or important notes:
```markdown
> "It's crazy how perfect this website explains C++ concepts..."
```

### Quiz Question Format
```markdown
## Quiz time

**Question #1**

What is the difference between initialization and assignment?

[Show Solution](#solution-1)

<!-- Solution section (could be collapsible or separate) -->
```

### Navigation Format
*To be documented based on navigation system (see ARCH_DESIGN_PLAN)*
Pattern observed:
- Next lesson: `{Next Chapter}.{Next Lesson} {Next Title}`
- Previous lesson: `{Prev Chapter}.{Prev Lesson} {Prev Title}` or "No previous lesson"
- Back to TOC: "Back to table of contents"

### Code Example Formatting Patterns
- Code blocks typically include syntax highlighting (language specified)
- Examples are often preceded by explanatory text
- Code examples may include comments explaining key parts
- Output/result examples may be shown separately or inline
- Common pattern: Explanation → Code Example → Explanation of what the code does

### FAQ/Common Questions Format
Some lessons include FAQ sections with the following pattern:
```markdown
## Common site-related questions

**Q: {Question text}**

{Answer text}

**Q: {Next question}**

{Answer text}
```
Questions are formatted with bold "Q:" prefix, answers follow in regular paragraphs.

---
# Implement

## TODO
- [x] 1. Research LEARN_CPP website structure and format
- [x] 2. Document LEARN_CPP content organization patterns
- [x] 3. Document LEARN_CPP styling and typography patterns
- [x] 4. Document detailed lesson page template structure
- [x] 5. Document detailed quiz page template structure
- [x] 6. Document landing page (table of contents) structure
- [x] 7. Create markdown format reference guide (how to represent LEARN_CPP patterns in markdown)
- [x] 8. Document navigation pattern details
- [x] 9. Document specific code example formatting patterns
- [x] 10. Document FAQ/common questions section patterns
- [ ] 11. Review and refine documentation based on additional LEARN_CPP pages (optional enhancement)

## Backlog

- [ ] 1.
