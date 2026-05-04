# Quizzes Directory

This directory contains JSON-formatted quiz files that are rendered by the `/quizes` route in the Astro application.

## Structure

Each quiz is a JSON file with the following structure:

```json
{
  "metadata": {
    "id": "Quiz_01_Process_Virtualization",
    "subject": "Operating Systems",
    "topic": "Process Virtualization (Chapters 3, 4, 5)",
    "chapters": [3, 4, 5],
    "question_count": 20,
    "difficulty_distribution": {
      "easy": 7,
      "medium": 7,
      "hard": 6
    }
  },
  "questions": [...]
}
```

## Rendering

These quizzes are rendered at:
- **List page**: `/quizes`
- **Individual quiz**: `/quizes/{quiz-id}` (without `.json` extension)

## Future Integration

This quiz system currently operates separately from the subject-based chapter quizzes (which use markdown files in `content/` and render at `/{subject}/quiz/{chapter}.x`).

In the future, we may integrate these two systems to provide a unified quiz experience across the learning platform.

## Adding New Quizzes

1. Create a new JSON file in this directory
2. Follow the existing quiz format (see other files for examples)
3. The quiz will automatically appear at `/quizes` after restarting the dev server (or rebuilding)
