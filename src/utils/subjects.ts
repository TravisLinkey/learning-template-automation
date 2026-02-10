import { isSubjectVisible } from '../config/visibility';

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
		id: 'vim',
		name: 'Vim',
		description: 'Master Vim, the powerful modal text editor for efficient code editing',
		targetAudience: 'software engineers who want to edit code faster and more efficiently',
		subjectDescription: 'modal editing, navigation, operators and motions, text objects, macros, and configuration',
	},
	{
		id: 'mathematics-statistics',
		name: 'Applied Statistics',
		description: 'Learn applied statistical methods for quantitative developers, focusing on practical analysis and inference',
		targetAudience: 'quantitative developers and software engineers who need practical statistical skills',
		subjectDescription: 'hypothesis testing, regression analysis, ANOVA, sampling methods, and correlation vs causation',
	},
	{
		id: 'mathematics-numerical-methods',
		name: 'Numerical Methods',
		description: 'Numerical methods and scientific computing for model-to-code translation in quantitative finance',
		targetAudience: 'quantitative developers implementing and maintaining numerical models',
		subjectDescription: 'floating point basics, Monte Carlo simulation, optimization, calibration, and performance tuning',
	},
	{
		id: 'mathematics-linear-algebra',
		name: 'Linear Algebra',
		description: 'Linear algebra and calculus fundamentals for understanding and maintaining quantitative model implementations',
		targetAudience: 'quantitative developers who need to understand model code and implementations',
		subjectDescription: 'vectors, matrices, gradients, optimization intuition, and understanding model implementations',
	},
	{
		id: 'developer-python-pandas',
		name: 'Python Pandas',
		description: 'Learn Python Pandas for data manipulation and analysis',
		targetAudience: 'developers and data analysts working with tabular data',
		subjectDescription: 'data manipulation, analysis, and visualization with pandas',
	},
	{
		id: 'developer-operating-systems',
		name: 'Operating Systems',
		description: 'Operating systems, especially Linux/UNIX for quant developers',
		targetAudience: 'quantitative developers who need systems-level understanding',
		subjectDescription: 'processes vs threads, virtual memory, debugging on Linux, and systems programming',
	},
	{
		id: 'developer-concurrency',
		name: 'Concurrency & Multithreading',
		description: 'Concurrency and multithreading for high-performance quant systems',
		targetAudience: 'quantitative developers building high-performance and HFT systems',
		subjectDescription: 'data races, locks, deadlocks, atomics, memory models, and lock-free programming',
	},
	{
		id: 'developer-computer-architecture',
		name: 'Computer Architecture / Performance',
		description: 'Computer architecture and performance optimization for quant developers',
		targetAudience: 'quantitative developers optimizing code for performance',
		subjectDescription: 'CPU caches, branch prediction, memory models, NUMA, and profiling methodology',
	},
	{
		id: 'developer-networking',
		name: 'Networking',
		description: 'Networking fundamentals for quant systems and HFT',
		targetAudience: 'quantitative developers working with networked systems and market infrastructure',
		subjectDescription: 'TCP vs UDP, latency/throughput tradeoffs, packet lifecycle, and low-latency networking',
	},
	// Quant development projects (roadmap)
	{
		id: 'projects-01-backtester',
		name: 'Project 1: Backtesting Engine',
		description: 'Build a simple, reliable backtesting system from scratch with Python and Pandas',
		targetAudience: 'software engineers and quant developers learning algorithmic trading',
		subjectDescription: 'data ingestion, signal generation, P&L calculation, and performance metrics',
	},
	{
		id: 'projects-02-paper-bot',
		name: 'Project 2: Paper Trading Bot',
		description: 'Extend the backtester into a real-time paper trading bot using broker APIs',
		targetAudience: 'developers who have completed Project 1 and want live paper trading',
		subjectDescription: 'API integration, order execution, real-time data, and market microstructure',
	},
	{
		id: 'projects-03-ml-trader',
		name: 'Project 3: ML Trading Strategy',
		description: 'Add predictive models to the trading workflow and execute via the paper bot',
		targetAudience: 'developers who have completed Projects 1–2 and want ML-driven signals',
		subjectDescription: 'feature engineering, model training, strategy optimization, and execution',
	},
];

export function getSubjectById(id: string): Subject | undefined {
	return SUBJECTS.find(s => s.id === id);
}

/**
 * Get all visible subjects (filtered by whitelist in config/visibility.ts)
 */
export function getAllSubjects(): Subject[] {
	return SUBJECTS.filter(s => isSubjectVisible(s.id));
}

/**
 * Get all subjects including hidden ones (for internal use, dynamic routes, etc.)
 */
export function getAllSubjectsUnfiltered(): Subject[] {
	return SUBJECTS;
}





