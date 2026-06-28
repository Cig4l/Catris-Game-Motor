export const POSITION_TYPES = ['default-pos', 'pos1', 'pos2', 'pos3'] as const;
export type PositionType = typeof POSITION_TYPES[number];

