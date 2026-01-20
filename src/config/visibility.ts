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
  // Quantitative Finance
//   'quant',
  
  // Vim (uncomment to enable)
  'vim',
  
  // Mathematics (uncomment to enable)
  // 'mathematics-statistics',
  // 'mathematics-numerical-methods',
  // 'mathematics-linear-algebra',
  
  // Developer (uncomment to enable)
  // 'developer-python-pandas',
  // 'developer-operating-systems',
  // 'developer-concurrency',
  // 'developer-computer-architecture',
  // 'developer-networking',
];

/**
 * Check if a subject is visible based on the whitelist
 */
export function isSubjectVisible(subjectId: string): boolean {
  return VISIBLE_SUBJECTS.includes(subjectId);
}
