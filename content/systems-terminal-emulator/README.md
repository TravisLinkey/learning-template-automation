# Project 4: Terminal Emulator (PTY)

Build a simple terminal emulator using PTY (pseudo-terminal) in C.

**Target Audience:** Developers who have completed C Programming fundamentals  
**Prerequisites:** systems-c-programming (chapters 2-3)

---

## Project Overview

### Objective

Create a working terminal emulator that:
- Creates a PTY (pseudo-terminal) pair
- Spawns a shell in the PTY slave
- Reads user input and sends to the shell
- Reads shell output and displays to the user

### Why Build a Terminal Emulator?

- **Understand systems** — Learn how shells and terminals actually work
- **Foundation for tools** — Terminal emulators are used everywhere (iTerm2, Alacritty, etc.)
- **IPC mastery** — Combine fork, exec, PTY, and select()
- **Build real software** — Something you can actually use

### What You'll Build

A command-line terminal emulator that:
- Creates a PTY and spawns `/bin/bash`
- Handles user input (keyboard → PTY)
- Handles shell output (PTY → screen)
- Handles signals gracefully (Ctrl+C, window resize)
- Cleans up properly on exit

---

## Research Findings

### Key APIs Used

1. **PTY Creation**
   - `openpty()` — Simple way to create PTY pair
   - `posix_openpt()` — POSIX alternative

2. **Terminal Setup**
   - `setsid()` — Create new session
   - `ioctl(slave, TIOCSCTTY)` — Set controlling terminal

3. **Process Control**
   - `fork()` — Create child process
   - `execl()` — Execute shell

4. **I/O Multiplexing**
   - `select()` — Wait for stdin and PTY simultaneously

5. **Terminal Attributes**
   - `tcgetattr()` / `tcsetattr()` — Get/set terminal settings
   - `cfmakeraw()` — Set raw mode

### Reference Implementation

Linux man pages:
- `pty(7)` — Pseudo-terminal pseudodevice
- `fork(2)` — Create process
- `exec(3)` — Execute program
- `select(2)` — I/O multiplexing

---

## Lesson Structure

### Lesson 0.1: Project Overview
- What we're building
- Architecture overview
- Prerequisites from C Programming subject
- Step-by-step implementation plan

### Lesson 0.2: Project Guide
- Step-by-step implementation with hints
- Collapsible solutions for each step
- Testing and verification

---

## Prerequisites (with Links)

| Topic | Why You Need It | Where to Learn |
|-------|-----------------|----------------|
| **File I/O** | Reading/writing PTY uses file descriptors | [File Operations](/systems-c-programming/lessons/2.1) |
| **Process fork/exec** | Spawning shell in PTY | [Process Creation](/systems-c-programming/lessons/2.3) |
| **IPC Pipes** | PTY is a bidirectional pipe | [Inter-Process Communication](/systems-c-programming/lessons/2.4) |
| **PTY Concepts** | Understanding master/slave | [Terminal Concepts](/systems-c-programming/lessons/3.1) |
| **PTY Operations** | Creating and using PTY | [Working with PTY](/systems-c-programming/lessons/3.2) |
| **Terminal Control** | Raw mode, signal handling | [Terminal Control](/systems-c-programming/lessons/3.3) |

---

## Skills You'll Learn

- Pseudo-terminal (PTY) creation and management
- Process session and controlling terminal
- I/O multiplexing with select()
- Terminal attribute manipulation
- Signal handling for clean shutdown
- Proper resource cleanup

---

## Deliverable

A working terminal emulator that:
- [ ] Creates PTY pair
- [ ] Spawns bash shell in slave
- [ ] Reads from stdin and writes to PTY
- [ ] Reads from PTY and writes to stdout
- [ ] Handles Ctrl+C gracefully
- [ ] Handles window resize
- [ ] Cleans up resources on exit

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

- [Linux PTY man page](https://man7.org/linux/man-pages/man7/pty.7.html)
- [openpty(3) man page](https://man7.org/linux/man-pages/man3/openpty.3.html)
- [termios(3) man page](https://man7.org/linux/man-pages/man3/termios.3.html)
- [select(2) man page](https://man7.org/linux/man-pages/man2/select.2.html)
