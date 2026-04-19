# Project 5: JSON Parser

Build a Tree-sitter style AST parser for JSON.

**Target Audience:** Developers wanting to understand parser implementation  
**Prerequisites:** None (can be done in C, Python, or other language)

---

## Project Overview

### Objective

Create a working JSON parser that:
- Tokenizes JSON input (lexer)
- Parses tokens into an AST (parser)
- Constructs a tree structure (AST)
- Provides tree traversal capabilities

### Why Build a JSON Parser?

- **Compiler fundamentals** — Lexer + parser is the heart of any compiler
- **Practical skill** — JSON is everywhere, understanding parsing is valuable
- **Manageable scope** — JSON is simple (6 token types) but demonstrates real concepts
- **Foundation for more** — Extend to parse other languages

### What You'll Build

A JSON parser that takes JSON input and produces a traversable AST:

**Input:**
```json
{"name": "Alice", "age": 30, "scores": [95, 87, 92]}
```

**Output (AST structure):**
```
Object
├── key-value "name": String("Alice")
├── key-value "age": Number(30)
└── key-value "scores": Array
    ├── Number(95)
    ├── Number(87)
    └── Number(92)
```

---

## JSON Grammar (Simplified)

JSON has 6 token types:

| Token | Example |
|-------|---------|
| `{` | Object start |
| `}` | Object end |
| `[` | Array start |
| `]` | Array end |
| `:` | Key-value separator |
| Value | string, number, boolean, null |

And the structure:
```
value     → string | number | object | array | true | false | null
object    → "{" (string ":" value ("," string ":" value)*)? "}"
array     → "[" value ("," value)* "]"
```

---

## Lesson Structure

### Lesson 0.1: Project Overview
- What we're building
- JSON grammar overview
- Parser architecture
- Step-by-step plan

### Lesson 0.2: Project Guide
- Step-by-step implementation with hints
- Lexer → Parser → AST → Traversal
- Collapsible solutions

---

## Skills You'll Learn

1. **Lexer/Tokenizer** — Convert character stream to token stream
2. **Recursive Descent Parsing** — Parse JSON's recursive structure
3. **AST Construction** — Build tree data structure
4. **Tree Traversal** — Visit all nodes (depth-first)
5. **Error Handling** — Detect and report parse errors

---

## Deliverable

A working JSON parser that:
- [ ] Tokenizes JSON input
- [ ] Parses tokens into AST
- [ ] Handles objects, arrays, strings, numbers, booleans, null
- [ ] Provides traversal API
- [ ] Reports parse errors with line/column

---

## Progress Tracking

### Completed
- [ ] Research and planning
- [ ] Subject registration
- [ ] README created

### Pending
- [ ] 0.1 Project Overview
- [ ] 0.2 Project Guide

---

## References

- [JSON Specification](https://www.json.org/jsonen.html)
- [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) — Modern parser generator
- [Crafting Interpreters](https://craftinginterpreters.com/) — Excellent resource for parsing
