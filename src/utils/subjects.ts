export interface Subject {
	id: string;
	name: string;
	description: string;
	targetAudience: string;
	subjectDescription: string;
}

export const SUBJECTS: Subject[] = [
	{
		id: 'quant',
		name: 'Quant Research',
		description: 'A comprehensive tutorial series for learning probability theory for quantitative finance and algorithmic trading',
		targetAudience: 'quantitative developers and software engineers transitioning to quant roles',
		subjectDescription: 'probability theory, stochastic processes, and statistical methods for quantitative finance',
	},
	{
		id: 'python-pandas',
		name: 'Python Pandas',
		description: 'Learn Python Pandas for data manipulation and analysis',
		targetAudience: 'developers and data analysts working with tabular data',
		subjectDescription: 'data manipulation, analysis, and visualization with pandas',
	},
];

export function getSubjectById(id: string): Subject | undefined {
	return SUBJECTS.find(s => s.id === id);
}

export function getAllSubjects(): Subject[] {
	return SUBJECTS;
}


