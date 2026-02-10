/**
 * Subject Visibility Configuration
 * 
 * This file controls which subjects are visible on the main page.
 * Only subjects listed in the VISIBLE_SUBJECTS array will be displayed.
 * 
 * Subject IDs correspond to the folder structure in /content:
 * - 'quant'                        → /content/quant
 * - 'vim'                          → /content/vim
 * - 'mathematics-statistics'       → /content/mathematics/statistics
 * - 'mathematics-numerical-methods'→ /content/mathematics/numerical-methods
 * - 'mathematics-linear-algebra'   → /content/mathematics/linear-algebra
 * - 'developer-python-pandas'      → /content/developer/python-pandas
 * - 'developer-operating-systems'  → /content/developer/operating-systems
 * - 'developer-concurrency'        → /content/developer/concurrency
 * - 'developer-computer-architecture' → /content/developer/computer-architecture
 * - 'developer-networking'         → /content/developer/networking
 */

export const VISIBLE_SUBJECTS: string[] = [
  // Quantitative Finance (referenced by Project 1)
  'quant',
  
  // Vim (uncomment to enable)
  'vim',
  
  // Mathematics (referenced by Project 1)
  'mathematics-statistics',
  // 'mathematics-numerical-methods',
  // 'mathematics-linear-algebra',
  
  // Developer (referenced by Project 1)
  'developer-python-pandas',
  // 'developer-operating-systems',
  // 'developer-concurrency',
  // 'developer-computer-architecture',
  // 'developer-networking',
  
  // Quant development projects
  'projects-01-backtester',
  'projects-02-paper-bot',
  'projects-03-ml-trader',
];

/**
 * Check if a subject is visible based on the whitelist
 */
export function isSubjectVisible(subjectId: string): boolean {
  return VISIBLE_SUBJECTS.includes(subjectId);
}
