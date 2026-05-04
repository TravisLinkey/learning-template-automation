/**
 * Quiz JSON Parser
 * Parses quiz JSON files with metadata and questions
 * Supports coverage metadata and concepts for missed question feedback
 */

export interface QuizOption {
  key: string;
  text: string;
  concepts?: string[];  // Concepts related to this option (for missed question feedback)
}

export interface CoverageData {
  notes: string[];      // Note references (e.g., "[[Note 1]]")
  concepts: string[];    // Concepts covered by this quiz
  by_chapter: Record<string, string[]>;  // Concepts by chapter
  topic_emphasis?: string[];  // Topics emphasized in this quiz
}

export interface QuizMetadata {
  id: string;
  title: string;
  subject: string;
  topic: string;
  chapters: number[];
  difficulty_distribution: {
    easy: number;
    medium: number;
    hard: number;
  };
  question_count: number;
  estimated_time_minutes: number;
  coverage?: CoverageData;  // Optional coverage metadata
}

export interface QuizQuestion {
  id: string;
  text: string;
  type: 'single-select' | 'multi-select';
  options: QuizOption[];
  correct_answers: string[];  // Array of correct option keys
  explanation: {
    correct: string;
    incorrect: Record<string, string>;  // Key -> explanation for why that option is wrong
  };
  source_notes?: string[];  // Notes that cover this question
}

export interface Quiz {
  metadata: QuizMetadata;
  questions: QuizQuestion[];
}

export interface QuizAnswer {
  questionId: string;
  selectedOptions: string[];  // Array of selected option keys
  isCorrect: boolean;
  missedConcepts: string[];  // Concepts to review when missed
}

export interface QuizResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  score: number;  // Percentage
  answers: QuizAnswer[];
  conceptsToReview: string[];  // Unique concepts to review across all missed questions
  notesToReview: string[];  // Unique notes to review across all missed questions
}

/**
 * Parse a quiz JSON string into a Quiz object
 * Preserves concepts on options and coverage in metadata
 */
export function parseQuizJSON(jsonString: string, filePath?: string): Quiz {
  try {
    const parsed = JSON.parse(jsonString);
    
    // Validate required fields
    if (!parsed.metadata || !parsed.questions) {
      throw new Error('Invalid quiz JSON: missing metadata or questions');
    }
    
    // Map questions, preserving concepts on options
    const questions: QuizQuestion[] = parsed.questions.map((q: any) => ({
      id: q.id || '',
      text: q.text || '',
      type: q.type || 'single-select',
      options: (q.options || []).map((opt: any) => ({
        key: opt.key || '',
        text: opt.text || '',
        concepts: opt.concepts || [],  // Preserve concepts array
      })),
      correct_answers: q.correct_answers || [],
      explanation: {
        correct: q.explanation?.correct || '',
        incorrect: q.explanation?.incorrect || {},
      },
      source_notes: q.source_notes || [],
    }));
    
    // Build the quiz object, preserving coverage metadata
    const quiz: Quiz = {
      metadata: {
        id: parsed.metadata.id || '',
        title: parsed.metadata.title || '',
        subject: parsed.metadata.subject || '',
        topic: parsed.metadata.topic || '',
        chapters: parsed.metadata.chapters || [],
        difficulty_distribution: parsed.metadata.difficulty_distribution || { easy: 0, medium: 0, hard: 0 },
        question_count: parsed.metadata.question_count || questions.length,
        estimated_time_minutes: parsed.metadata.estimated_time_minutes || 0,
        coverage: parsed.metadata.coverage || undefined,  // Preserve coverage metadata
      },
      questions,
    };
    
    return quiz;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const location = filePath ? ` in ${filePath}` : '';
    throw new Error(`Failed to parse quiz JSON${location}: ${errorMessage}`);
  }
}

/**
 * Get concepts to review for a missed question
 * Combines concepts from the selected incorrect options with coverage concepts
 */
export function getMissedQuestionConcepts(
  question: QuizQuestion,
  selectedOptions: string[]
): string[] {
  const concepts: Set<string> = new Set();
  
  // Add concepts from selected incorrect options
  for (const selected of selectedOptions) {
    if (!question.correct_answers.includes(selected)) {
      const option = question.options.find(opt => opt.key === selected);
      if (option && option.concepts) {
        option.concepts.forEach(c => concepts.add(c));
      }
    }
  }
  
  // Add coverage concepts if available
  if (question.source_notes && question.source_notes.length > 0) {
    // We don't add notes directly to concepts, but they'll be shown separately
  }
  
  return Array.from(concepts);
}

/**
 * Get notes to review for a missed question
 */
export function getMissedQuestionNotes(question: QuizQuestion): string[] {
  return question.source_notes || [];
}

/**
 * Grade a quiz submission and return results
 */
export function gradeQuiz(
  quiz: Quiz,
  userAnswers: Record<string, string[]>  // questionId -> selected option keys
): QuizResult {
  const answers: QuizAnswer[] = [];
  const conceptsToReview = new Set<string>();
  const notesToReview = new Set<string>();
  
  for (const question of quiz.questions) {
    const selected = userAnswers[question.id] || [];
    const isCorrect = checkAnswerCorrect(question, selected);
    
    let missedConcepts: string[] = [];
    if (!isCorrect) {
      missedConcepts = getMissedQuestionConcepts(question, selected);
      missedConcepts.forEach(c => conceptsToReview.add(c));
      
      const notes = getMissedQuestionNotes(question);
      notes.forEach(n => notesToReview.add(n));
    }
    
    answers.push({
      questionId: question.id,
      selectedOptions: selected,
      isCorrect,
      missedConcepts,
    });
  }
  
  const correctCount = answers.filter(a => a.isCorrect).length;
  const totalQuestions = quiz.questions.length;
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  
  return {
    totalQuestions,
    correctCount,
    incorrectCount: totalQuestions - correctCount,
    score,
    answers,
    conceptsToReview: Array.from(conceptsToReview),
    notesToReview: Array.from(notesToReview),
  };
}

/**
 * Check if a user's answer is correct
 * For single-select: exact match of the correct answer
 * For multi-select: all correct answers selected, no incorrect answers
 */
function checkAnswerCorrect(question: QuizQuestion, selected: string[]): boolean {
  const correct = question.correct_answers;
  
  if (question.type === 'single-select') {
    return selected.length === 1 && correct.includes(selected[0]);
  }
  
  // Multi-select: must select ALL correct answers and NO incorrect answers
  if (selected.length !== correct.length) return false;
  
  const selectedSet = new Set(selected);
  const correctSet = new Set(correct);
  
  for (const opt of selectedSet) {
    if (!correctSet.has(opt)) return false;
  }
  for (const opt of correctSet) {
    if (!selectedSet.has(opt)) return false;
  }
  
  return true;
}

/**
 * Get all concepts to review across multiple missed questions
 */
export function getConceptsToReview(quiz: Quiz, userAnswers: Record<string, string[]>): string[] {
  const concepts = new Set<string>();
  
  for (const question of quiz.questions) {
    const selected = userAnswers[question.id] || [];
    if (!checkAnswerCorrect(question, selected)) {
      const missed = getMissedQuestionConcepts(question, selected);
      missed.forEach(c => concepts.add(c));
    }
  }
  
  return Array.from(concepts);
}

/**
 * Get all notes to review across multiple missed questions
 */
export function getNotesToReview(quiz: Quiz, userAnswers: Record<string, string[]>): string[] {
  const notes = new Set<string>();
  
  for (const question of quiz.questions) {
    const selected = userAnswers[question.id] || [];
    if (!checkAnswerCorrect(question, selected)) {
      const questionNotes = getMissedQuestionNotes(question);
      questionNotes.forEach(n => notes.add(n));
    }
  }
  
  return Array.from(notes);
}
