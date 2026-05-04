# Coding Notes - Learning Template Automation

## Session: 2026-05-03

### Fixed: Astro Routing Issue with /quiz, /favicon.ico, and Added /quiz Route

**Problem:**
- Requests to `/quiz` were being matched by the `[subject]/index.astro` dynamic route
- Since "quiz" is not a valid subject ID, `getStaticPaths()` didn't generate a matching path
- This caused warnings: `[WARN] [router] A getStaticPaths() route pattern was matched, but no matching static path was found for requested path /quiz`
- Same issue occurred with `/favicon.ico`
- User wanted to access quizzes from `quizes/` directory (JSON quiz files)
- After creating quiz page, submit button and answer selection didn't work
- Quiz options showed original keys (A,B,C,D) out of order after shuffling

**Root Cause:**
- The `[subject]` dynamic route pattern matches ANY single path segment
- When `/quiz` is requested, Astro tries to match it against `[subject]/index.astro`
- The `getStaticPaths()` function only generates paths for valid subject IDs (quant, vim, etc.)
- No static path exists for "quiz" as a subject
- Two separate quiz systems exist: markdown-based chapter quizzes and JSON-based quiz collection
- Initial quiz page was display-only (no JavaScript for interactivity)
- Options were shuffled but keys (A,B,C,D) weren't reassigned to match new order

**Solution:**

1. **Removed `src/pages/quiz.astro`** - No longer redirect `/quiz` to homepage
   - `/quiz` now properly returns 404 (not caught by `[subject]` route)

2. **Created `src/pages/favicon.ico.astro`** - Redirects `/favicon.ico` to `/favicon.svg`
   - Prevents favicon requests from being caught by `[subject]` route

3. **Created `src/pages/quiz/index.astro`** - Lists all quizzes from `quizes/` directory
   - Reads JSON quiz files and displays them in a card layout
   - Links to individual quiz pages at `/quiz/{quiz-id}`

4. **Created `src/pages/quiz/[id].astro`** - Renders individual JSON quizzes
   - Dynamic route that loads and displays quiz questions
   - Uses `getStaticPaths()` to pre-render all quizzes
   - URLs like `/quiz/01_Quiz_Process_Virtualization`
   - **Interactive functionality**: answer selection, submit button, score display
   - **Shuffles options** and reassigns keys (A,B,C,D) based on shuffled order
   - **Quiz data serialization**: maps correct_answers to new keys after shuffling
   - **Client-side JavaScript**: grades quiz, shows correct/incorrect answers, displays explanations

5. **Created `quizes/README.md`** - Documentation for the quizzes directory
   - Explains the structure and future integration plans

**Files Changed:**
- Deleted: `src/pages/quiz.astro` (old redirect)
- Deleted: `src/pages/favicon.ico.ts` (had syntax error)
- Created: `src/pages/favicon.ico.astro`
- Created: `src/pages/quiz/index.astro` (quiz listing at `/quiz`)
- Created: `src/pages/quiz/[id].astro` (individual quizzes at `/quiz/{id}`)
- Created: `quizes/README.md`

**Testing:**
- `/quiz` → 200 ✓ (lists all quizzes at `/quiz`)
- `/quiz/01_Quiz_Process_Virtualization` → 200 ✓ (individual quiz with interactivity)
- Quiz options shuffled and displayed with A,B,C,D in new order ✓
- Answer selection works (radio/checkbox) ✓
- Submit button grades quiz and shows score ✓
- Correct/incorrect answers highlighted after submission ✓
- Explanations shown for each question ✓
- `/quizes` → 404 ✓ (old URL properly not found)
- `/favicon.ico` → 302 redirect to `/favicon.svg` ✓
- `/quant` → 200 ✓ (valid subject route still works)
- Subject-specific quizzes (`/quant/quiz/1.x`) → 200 ✓

**Architecture Notes:**
- Two separate quiz systems:
  1. **Chapter quizzes**: Markdown-based, in `content/{subject}/lessons/`, URLs like `/{subject}/quiz/{chapter}.x`
  2. **Quiz collection**: JSON-based, in `quizes/` directory, URLs like `/quiz/{quiz-id}`
- These are kept separate for now; future integration planned (see `quizes/README.md`)
- The `/quiz` URL now correctly shows the quiz directory listing (not the chapter quizzes)
- Option keys are reassigned after shuffling to maintain A,B,C,D order in display
