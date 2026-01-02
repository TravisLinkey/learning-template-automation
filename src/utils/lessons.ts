export interface Lesson {
	subject: string;
	chapter: number;
	lesson: number | string;
	title: string;
	slug: string;
	author: string;
	date: string;
	description?: string;
	isQuiz: boolean;
}

export function getAllLessons(): Lesson[] {
	// This will be populated by reading markdown files
	// For now, return empty array - will be implemented with Astro.glob()
	return [];
}

export function sortLessons(lessons: Lesson[]): Lesson[] {
	return lessons.sort((a, b) => {
		// Sort by chapter first
		if (a.chapter !== b.chapter) {
			return a.chapter - b.chapter;
		}
		
		// Within same chapter, quizzes (x) come last
		if (a.lesson === 'x' && b.lesson !== 'x') {
			return 1;
		}
		if (a.lesson !== 'x' && b.lesson === 'x') {
			return -1;
		}
		
		// Both are numbers or both are 'x'
		if (a.lesson === 'x' && b.lesson === 'x') {
			return 0;
		}
		
		// Both are numbers
		return (a.lesson as number) - (b.lesson as number);
	});
}

export function getPrevNextLesson(
	allLessons: Lesson[],
	currentChapter: number,
	currentLesson: number | string
): { prev?: Lesson; next?: Lesson } {
	const sorted = sortLessons(allLessons);
	const currentIndex = sorted.findIndex(
		(l) => l.chapter === currentChapter && l.lesson === currentLesson
	);
	
	if (currentIndex === -1) {
		return {};
	}
	
	return {
		prev: currentIndex > 0 ? sorted[currentIndex - 1] : undefined,
		next: currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : undefined,
	};
}

export function groupLessonsByChapter(lessons: Lesson[]): Map<number, Lesson[]> {
	const grouped = new Map<number, Lesson[]>();
	
	for (const lesson of lessons) {
		if (!grouped.has(lesson.chapter)) {
			grouped.set(lesson.chapter, []);
		}
		grouped.get(lesson.chapter)!.push(lesson);
	}
	
	// Sort lessons within each chapter
	for (const [chapter, chapterLessons] of grouped.entries()) {
		grouped.set(chapter, sortLessons(chapterLessons));
	}
	
	return grouped;
}

