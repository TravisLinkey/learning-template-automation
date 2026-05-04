/**
 * Quiz Loader for JSON Format
 * Dynamically loads all quiz JSON files from /content/ directory
 * Supports recursive scanning of subject subdirectories
 */

import { parseQuizJSON, type Quiz, type QuizQuestion } from './quiz-json-parser';
import { resolve, join } from 'path';
import { readdir, stat, readFile } from 'fs/promises';

/**
 * Load and parse a quiz JSON file
 */
async function loadQuizFile(filePath: string): Promise<Quiz> {
  const jsonString = await readFile(filePath, 'utf-8');
  return parseQuizJSON(jsonString, filePath);
}

export interface QuizMetadata {
  id: string;
  title: string;
  subject?: string;
  topic?: string;
  chapters?: number[];
  questionCount: number;
  difficulty_distribution?: {
    easy: number;
    medium: number;
    hard: number;
  };
  sourcePath: string;
}

export interface QuizData {
  quizzes: QuizMetadata[];
  getQuiz(id: string): Promise<Quiz>;
  getQuizzesBySubject(subject: string): Promise<QuizMetadata[]>;
}

const CONTENT_DIR = resolve(process.cwd(), 'content');

/**
 * Extract subject from file path
 * e.g., content/developer/operating-systems/01_Quiz.json → "developer-operating-systems"
 */
function extractSubject(filePath: string): string | undefined {
  const relativePath = filePath.replace(CONTENT_DIR, '');
  const parts = relativePath.split('/').filter(p => p.length > 0);
  
  if (parts.length >= 2) {
    // Combine first two directories: e.g., "developer" + "operating-systems" = "developer-operating-systems"
    return parts.slice(0, 2).join('-');
  }
  
  return undefined;
}

/**
 * Recursively scan for all JSON quiz files in the content directory
 */
async function scanQuizFiles(): Promise<string[]> {
  const quizFiles: string[] = [];

  async function walk(dir: string): Promise<void> {
    try {
      const entries = await readdir(dir);
      for (const entry of entries) {
        const fullPath = join(dir, entry);
        try {
          const stats = await stat(fullPath);
          if (stats.isDirectory()) {
            await walk(fullPath);
          } else if (entry.endsWith('.json')) {
            quizFiles.push(fullPath);
          }
        } catch (error) {
          console.warn(`Failed to process ${fullPath}:`, error);
        }
      }
    } catch (error) {
      console.warn(`Failed to scan directory ${dir}:`, error);
    }
  }

  await walk(CONTENT_DIR);
  return quizFiles;
}

/**
 * Load metadata from all quiz files
 */
export async function loadQuizMetadata(): Promise<QuizMetadata[]> {
  const quizFiles = await scanQuizFiles();
  const quizzes: QuizMetadata[] = [];
  
  for (const filePath of quizFiles) {
    try {
      const quiz = await loadQuizFile(filePath);
      // Always use the subject extracted from the file path (e.g., "developer-operating-systems")
      // This ensures the subject ID matches the URL structure
      const subject = extractSubject(filePath);
      
      quizzes.push({
        id: quiz.metadata.id,
        title: quiz.metadata.topic || quiz.metadata.id,
        subject: subject, // Force path-based subject, ignore JSON field
        topic: quiz.metadata.topic,
        chapters: quiz.metadata.chapters,
        questionCount: quiz.questions.length,
        difficulty_distribution: quiz.metadata.difficulty_distribution,
        sourcePath: filePath
      });
    } catch (error) {
      console.warn(`Failed to load quiz from ${filePath}:`, error);
    }
  }
  
  return quizzes;
}

/**
 * Load a specific quiz by ID
 */
export async function getQuiz(id: string): Promise<Quiz> {
  const quizFiles = await scanQuizFiles();
  
  for (const filePath of quizFiles) {
    try {
      const quiz = await loadQuizFile(filePath);
      if (quiz.metadata.id === id) {
        return quiz;
      }
    } catch (error) {
      // Skip files that fail to load
      continue;
    }
  }
  
  throw new Error(`Quiz not found: ${id}`);
}

/**
 * Build the quiz data object (for use in Astro pages)
 */
export async function getQuizData(): Promise<QuizData> {
  const quizzes = await loadQuizMetadata();
  
  return {
    quizzes,
    getQuiz,
    getQuizzesBySubject: (subject: string) => 
      Promise.resolve(quizzes.filter(q => q.subject === subject))
  };
}

/**
 * For Astro's getStaticPaths - get all quiz IDs
 */
export async function getQuizIds(): Promise<string[]> {
  const quizzes = await loadQuizMetadata();
  return quizzes.map(q => q.id);
}

/**
 * For Astro's getStaticPaths - get all quiz params
 */
export async function getStaticPaths() {
  const quizzes = await loadQuizMetadata();
  
  return quizzes.map(quiz => ({
    params: { slug: quiz.id },
    props: { quizId: quiz.id }
  }));
}
