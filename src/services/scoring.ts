const LINE_SCORE: Record<number, number> = { 1: 100, 2: 300, 3: 500, 4: 800 };

/**
 * Calculates the score for a number of cleared lines on a given level
 * 
 * @param cleared - number of cleared lines
 * @param level - game level
 * @returns number - score
 */
export function scoreForLines(cleared: number, level: number): number {
  return (LINE_SCORE[cleared] ?? 0) * level;
}

/**
 * Determines the level based on the total number of cleared lines
 * 
 * @param totalLines - total number of cleared lines
 * @param startLevel - current level
 * @returns number - corresponding level
 */
export function levelForLines(totalLines: number, startLevel: number): number {
  return startLevel + Math.floor(totalLines / 10);
}

/**
 * Determines the fall speed based on current level with a curve to prevent unplayability due to a too high fall speed
 * 
 * @param level - game level
 * @returns number - fall speed
 */
export function gravityDelay(level: number): number {
  return Math.max(80, 800 - (level - 1) * 70);
}