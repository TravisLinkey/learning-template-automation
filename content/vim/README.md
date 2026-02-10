# Vim Course Plan

This document serves as the roadmap and context for the Vim learning course.

**Target Audience:** Software Engineers looking to master Vim  
**Skill Progression:** Beginner → Intermediate → Advanced  
**Official Documentation:** [Vim Manual](https://www.vim.org/docs.php) | [Neovim User Docs](https://neovim.io/doc/user/)

---

## Research Findings

### Source Material Analyzed

1. **Vim User Manual** (`https://www.vim.org/docs.php`) - Official documentation
2. **Vim Galore** (`https://github.com/mhinz/vim-galore`) - Community reference
3. **Vim University** (`https://github.com/wincent/vim-university`) - Structured curriculum
4. **Neovim Quick Reference** (`https://neovim.io/doc/user/quickref.html`) - Command reference

### Key Learning Progression

The Vim learning curve follows a distinct progression:

| Level | Focus Area | Outcome |
|-------|------------|---------|
| **Survival** | Modes, basic navigation, save/exit | Can edit files without panic |
| **Efficiency** | Motions, operators, text objects | Edits faster than with arrow keys |
| **Professional** | Splits, registers, configuration | Comfortable multi-file workflow |
| **Expert** | Macros, Vimscript/Lua, plugins | Automated personalized setup |

### Core Vim Concepts

1. **Modal Editing**: The fundamental paradigm - Normal, Insert, Visual, Command-line modes
2. **The Vim Language**: Combining Operators + Motions + Text Objects (e.g., `d2w` = delete 2 words)
3. **Composition**: Small commands combine to create powerful operations
4. **Repeatability**: The `.` command and macros enable efficient repetitive edits

---

## Chapter Structure

### Chapter 0: Introduction and Getting Started ✅
- 0.1: Introduction to Vim
- 0.2: Installing and Launching Vim
- 0.3: Survival Guide — Basic Modes and Exiting
- 0.x: Chapter 0 Summary and Quiz

### Chapter 1: Understanding Vim Modes ✅
- 1.1: Normal Mode — The Command Center
- 1.2: Insert Mode — Entering Text
- 1.3: Visual Mode — Selecting Text
- 1.4: Command-Line Mode — Ex Commands
- 1.x: Chapter 1 Summary and Quiz

### Chapter 2: Basic Navigation ✅
- 2.1: Character and Line Movement (h, j, k, l)
- 2.2: Word-Based Movement (w, e, b, W, E, B)
- 2.3: Line Navigation (0, ^, $, f, t, F, T)
- 2.4: Screen and File Navigation (gg, G, H, M, L, Ctrl-D, Ctrl-U)
- 2.x: Chapter 2 Summary and Quiz

### Chapter 3: Operators and Motions
- 3.1: Understanding Operators
  - The core operators: `d` (delete), `c` (change), `y` (yank), `>` (indent), `<` (unindent)
  - How operators wait for a motion
  - Doubling operators for line-wise operation (dd, cc, yy)
- 3.2: Combining Operators with Motions
  - The grammar: `[count][operator][motion]`
  - Examples: `d2w`, `c$`, `y3j`, `>ap`
  - Building complex commands from simple parts
- 3.3: The Power of the Dot Command
  - What `.` repeats (and what it doesn't)
  - Designing repeatable changes
  - Common dot command workflows
  - The relationship between `.` and undo
- 3.4: Counts and Multipliers
  - Count before operator vs. count before motion
  - When to use counts vs. when to repeat
  - Relative line numbers for quick counts
- 3.x: Chapter 3 Summary and Quiz

### Chapter 4: Text Objects
- 4.1: Inner vs Around (i vs a)
  - The difference between `i` (inner) and `a` (around/a)
  - How "around" includes delimiters or whitespace
  - Choosing the right one for the task
- 4.2: Word and WORD Objects
  - `iw` / `aw` — inner word / a word
  - `iW` / `aW` — inner WORD / a WORD
  - When word vs. WORD matters
- 4.3: Bracket and Quote Objects
  - `i(` / `a(` / `ib` / `ab` — parentheses
  - `i[` / `a[` — square brackets
  - `i{` / `a{` / `iB` / `aB` — curly braces
  - `i"` / `a"` — double quotes
  - `i'` / `a'` — single quotes
  - `i`` / `a`` — backticks
  - `i<` / `a<` — angle brackets
- 4.4: Sentence, Paragraph, and Block Objects
  - `is` / `as` — sentence
  - `ip` / `ap` — paragraph
  - `it` / `at` — HTML/XML tags
  - Custom text objects (with plugins)
- 4.x: Chapter 4 Summary and Quiz

### Chapter 5: Search and Replace
- 5.1: Basic Search
  - `/pattern` — search forward
  - `?pattern` — search backward
  - `n` / `N` — next / previous match
  - `*` / `#` — search word under cursor
  - Search history and navigation
- 5.2: Search Options and Patterns
  - Case sensitivity: `\c`, `\C`, `ignorecase`, `smartcase`
  - Very magic mode: `\v` for regex without escaping
  - Word boundaries: `\<` and `\>`
  - Useful patterns: `^`, `$`, `.`, `*`, `\+`, `\?`
  - Character classes: `\d`, `\w`, `\s`, `[...]`
- 5.3: Substitution Basics
  - `:s/old/new/` — substitute on current line
  - `:%s/old/new/g` — substitute in entire file
  - Flags: `g` (global), `c` (confirm), `i` (case-insensitive), `n` (count only)
  - Ranges: `1,10`, `.,$`, `'<,'>`, `%`
- 5.4: Advanced Substitution and Global Commands
  - Capture groups and backreferences: `\(...\)` and `\1`
  - Special replacement patterns: `&`, `\u`, `\l`, `\U`, `\L`
  - The global command: `:g/pattern/command`
  - Inverse global: `:v/pattern/command`
  - Combining `:g` with other Ex commands
- 5.x: Chapter 5 Summary and Quiz

### Chapter 6: Registers and Clipboard
- 6.1: Understanding Registers
  - What registers are (named storage locations)
  - How delete, yank, and put use registers
  - Viewing register contents with `:reg`
- 6.2: Named Registers (a-z, A-Z)
  - Using lowercase registers: `"ayy`, `"ap`
  - Appending with uppercase: `"Ayy`
  - Strategies for organizing registers
- 6.3: Special Registers
  - `""` — unnamed register (default)
  - `"0` — yank register (last yank)
  - `"1`-`"9` — numbered registers (delete history)
  - `"-` — small delete register
  - `"/` — last search pattern
  - `":` — last command
  - `".` — last inserted text
  - `"%` — current filename
  - `"#` — alternate filename
  - `"=` — expression register
- 6.4: Working with System Clipboard
  - `"+` — system clipboard
  - `"*` — selection clipboard (X11)
  - Setting `clipboard=unnamedplus`
  - Copying between Vim and other applications
- 6.x: Chapter 6 Summary and Quiz

### Chapter 7: Windows, Buffers, and Tabs
- 7.1: Buffer Management
  - What buffers are vs. files
  - `:ls` / `:buffers` — list buffers
  - `:b N` / `:b name` — switch to buffer
  - `:bn` / `:bp` — next / previous buffer
  - `:bd` — delete (close) buffer
  - Hidden buffers and `hidden` option
- 7.2: Split Windows
  - `:sp` / `Ctrl-w s` — horizontal split
  - `:vs` / `Ctrl-w v` — vertical split
  - `Ctrl-w h/j/k/l` — navigate between windows
  - `Ctrl-w H/J/K/L` — move windows
  - `Ctrl-w =` — equalize window sizes
  - `Ctrl-w _` / `Ctrl-w |` — maximize height / width
  - `Ctrl-w q` / `:close` — close window
  - `Ctrl-w o` / `:only` — close all other windows
- 7.3: Tab Pages
  - `:tabe` / `:tabnew` — new tab
  - `gt` / `gT` — next / previous tab
  - `{n}gt` — go to tab n
  - `:tabc` — close tab
  - `:tabo` — close all other tabs
  - When to use tabs vs. buffers
- 7.4: Efficient Multi-File Workflow
  - Opening multiple files: `vim file1 file2 file3`
  - Argument list: `:args`, `:argadd`, `:argdo`
  - Quickfix list: `:copen`, `:cnext`, `:cprev`
  - Location list: `:lopen`, `:lnext`, `:lprev`
  - Project navigation strategies
- 7.x: Chapter 7 Summary and Quiz

### Chapter 8: Macros and Automation
- 8.1: Recording Macros
  - `q{register}` — start recording to register
  - `q` — stop recording
  - Choosing a register for macros
  - What gets recorded
- 8.2: Playing and Repeating Macros
  - `@{register}` — play macro
  - `@@` — repeat last macro
  - `{count}@{register}` — play macro N times
  - Using macros across lines
- 8.3: Editing Macros
  - Macros are just register contents
  - `"ap` — paste macro to edit
  - `"ay$` — yank edited macro back
  - Fixing mistakes in macros
- 8.4: Recursive and Complex Macros
  - Self-calling macros: `@a` at end of macro `a`
  - Macros that stop on error
  - Running macros on visual selections
  - `:argdo normal @a` — run macro on all files
  - Combining macros with search
- 8.x: Chapter 8 Summary and Quiz

### Chapter 9: Configuration and Customization
- 9.1: The vimrc File
  - Location: `~/.vimrc` or `~/.config/nvim/init.vim`
  - Neovim and `init.lua`
  - Reloading configuration: `:source %`
  - Organizing your vimrc
- 9.2: Essential Settings
  - Line numbers: `number`, `relativenumber`
  - Search: `hlsearch`, `incsearch`, `ignorecase`, `smartcase`
  - Tabs/spaces: `expandtab`, `tabstop`, `shiftwidth`, `softtabstop`
  - Interface: `ruler`, `showcmd`, `showmode`, `wildmenu`
  - Files: `autoread`, `hidden`, `backup`, `undofile`
  - Performance: `lazyredraw`, `ttyfast`
- 9.3: Key Mappings and Abbreviations
  - `:map` vs `:noremap` (and why noremap is safer)
  - Mode-specific mappings: `nmap`, `imap`, `vmap`
  - The leader key: `let mapleader = " "`
  - Common useful mappings
  - Abbreviations: `:iabbrev`, `:cabbrev`
- 9.4: Filetype-Specific Configuration
  - `filetype plugin indent on`
  - Autocommands: `autocmd FileType`
  - After directories: `after/ftplugin/`
  - Language-specific settings
- 9.x: Chapter 9 Summary and Quiz

### Chapter 10: Plugins and Ecosystem (Advanced)
- 10.1: Plugin Managers
  - vim-plug (Vim/Neovim)
  - packer.nvim (Neovim)
  - lazy.nvim (Neovim, newer)
  - Installing and updating plugins
  - Lazy loading for faster startup
- 10.2: Essential Plugins
  - File explorers: NERDTree, nvim-tree, oil.nvim
  - Status lines: lightline, lualine
  - Git integration: fugitive, gitsigns
  - Commenting: commentary, Comment.nvim
  - Surrounding: surround, nvim-surround
  - Autopairs and completion basics
- 10.3: Fuzzy Finding and Navigation
  - fzf.vim / telescope.nvim
  - Finding files, buffers, and grep
  - Live grep and project-wide search
  - Integration with git
- 10.4: Building Your Development Environment
  - LSP basics (language servers)
  - nvim-lspconfig and Mason
  - Completion: nvim-cmp
  - Treesitter for syntax highlighting
  - Debugging: nvim-dap
  - Building a cohesive configuration
- 10.x: Chapter 10 Summary and Quiz

---

## Content Creation Guidelines

### Lesson Format

Each lesson follows the established format from `CONTEXT/01__REFERENCE_AND_ARCHITECTURE.md`:

```yaml
---
title: "Lesson Title"
chapter: N
lesson: M  # or 'x' for quizzes
author: "Vim Learning Team"
date: "2025-01-19"
description: "Brief description"
---

# N.M — Lesson Title

Content...
```

### Content Principles

1. **Progressive Disclosure**: Start with survival, build to mastery
2. **Hands-On Examples**: Every concept with practical exercises
3. **Real-World Context**: Show how commands apply to actual coding
4. **Muscle Memory Focus**: Emphasize repetition and practice
5. **Visual Aids**: Use tables for keybinding reference

### Key Terms to Bold

- **Normal mode**, **Insert mode**, **Visual mode**, **Command-line mode**
- **Operator**, **Motion**, **Text object**
- **Register**, **Buffer**, **Window**, **Tab**
- **Macro**, **Mapping**, **Abbreviation**

---

## Progress Tracking

### Completed
- [x] Research and planning
- [x] Chapter structure defined
- [x] README.md created
- [x] Subject registration in visibility.ts
- [x] Chapter titles configured in index.astro
- [x] Chapter 0: Introduction and Getting Started (4 lessons)
- [x] Chapter 1: Understanding Vim Modes (5 lessons)
- [x] Chapter 2: Basic Navigation (5 lessons)

### Pending
- [ ] Chapter 3: Operators and Motions
- [ ] Chapter 4: Text Objects
- [ ] Chapter 5: Search and Replace
- [ ] Chapter 6: Registers and Clipboard
- [ ] Chapter 7: Windows, Buffers, and Tabs
- [ ] Chapter 8: Macros and Automation
- [ ] Chapter 9: Configuration and Customization
- [ ] Chapter 10: Plugins and Ecosystem

---

## References

- [Vim Documentation](https://www.vim.org/docs.php)
- [Neovim User Manual](https://neovim.io/doc/user/)
- [Vim Galore](https://github.com/mhinz/vim-galore)
- [Vim University](https://github.com/wincent/vim-university)
- [Practical Vim by Drew Neil](https://pragprog.com/titles/dnvim2/practical-vim-second-edition/)
