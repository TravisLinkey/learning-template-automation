# Project 5: Language Toolchain

Build a complete language toolchain with REPL using your C terminal emulator and JSON parser.

**Target Audience:** Developers who have completed Terminal Emulator and JSON Parser projects  
**Prerequisites:** systems-terminal-emulator, compilers-json-parser

---

## Project Overview

### Objective

Create a language toolchain that combines:
1. **Terminal Emulator** — Interactive input/output (from C PTY project)
2. **JSON Parser** — Parse commands and configuration (from JSON Parser project)
3. **REPL** — Read-Eval-Print Loop for interactive use
4. **Command Processing** — Process JSON commands

### Why Build a Toolchain?

- **Integration** — Combine the two projects into something useful
- **Real-world** — Language tools like jq, grep, etc. work this way
- **Extensible** — Add more commands/features over time
- **Portfolio** — Impressive demonstration of systems + parsing skills

### What You'll Build

A command-line tool that:
- Uses your terminal emulator for I/O
- Parses JSON commands using your JSON parser
- Executes commands and returns results
- Supports interactive REPL mode

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Language Toolchain                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │            Terminal Emulator (PTY)                    │   │
│  │         (from systems-terminal-emulator)          │   │
│  └──────────────────────┬───────────────────────────────┘   │
│                         │                                     │
│                         ▼                                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              JSON Parser / Command Handler            │   │
│  │              (from compilers-json-parser)             │   │
│  └──────────────────────┬───────────────────────────────┘   │
│                         │                                     │
│                         ▼                                     │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                    Command Executor                   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Example Commands (JSON Format)

```json
{"cmd": "echo", "args": {"message": "Hello, World!"}}
```

```json
{"cmd": "add", "args": {"a": 5, "b": 3}}
```

```json
{"cmd": "parse", "args": {"json": "{\"key\": \"value\"}"}}
```

```json
{"cmd": "evaluate", "args": {"expression": "1 + 2 * 3"}}
```

---

## Lesson Structure

### Lesson 0.1: Project Overview
- What we're building
- Architecture
- Command format specification
- Step-by-step plan

### Lesson 0.2: Project Guide
- Step-by-step implementation
- Integration with existing projects
- Command implementation

---

## Prerequisites

| Topic | Why You Need It | Where to Learn |
|-------|-----------------|----------------|
| **Terminal Emulator** | Interactive I/O | [Project 4: Terminal Emulator](/systems-terminal-emulator/lessons/0.1) |
| **JSON Parser** | Parse commands | [Project 5: JSON Parser](/compilers-json-parser/lessons/0.1) |

---

## Skills You'll Learn

1. **Project Integration** — Combining multiple components
2. **REPL Development** — Building interactive command loops
3. **Command Processing** — Parsing and executing JSON commands
4. **Error Handling** — Graceful error reporting
5. **Extensibility** — Adding new commands easily

---

## Deliverable

A working language toolchain that:
- [ ] Uses PTY terminal for I/O
- [ ] Parses JSON commands
- [ ] Implements echo, add, parse commands
- [ ] Provides interactive REPL
- [ ] Handles errors gracefully

---

## Progress Tracking

### Completed
- [ ] Research and planning
- [ ] Subject registration

### Pending
- [ ] 0.1 Project Overview
- [ ] 0.2 Project Guide

---

## References

- [jq Manual](https://stedolan.github.io/jq/manual/) — JSON processor (inspiration)
- [REPL Wiki](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)
