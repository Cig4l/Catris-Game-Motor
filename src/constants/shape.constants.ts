import { POSITION_TYPES, PositionType } from "./position.constants";

export const I_SHAPE: Record<number, Record<PositionType, number[]>> = {
  0: {
    [POSITION_TYPES[0]]: [1, 3],
    [POSITION_TYPES[1]]: [0, 5],
    [POSITION_TYPES[2]]: [2, 6],
    [POSITION_TYPES[3]]: [3, 4]
  },
  1: {
    [POSITION_TYPES[0]]: [1, 4],
    [POSITION_TYPES[1]]: [1, 5],
    [POSITION_TYPES[2]]: [2, 5],
    [POSITION_TYPES[3]]: [2, 4]
  },
  2: {
    [POSITION_TYPES[0]]: [1, 5],
    [POSITION_TYPES[1]]: [2, 5],
    [POSITION_TYPES[2]]: [2, 4],
    [POSITION_TYPES[3]]: [1, 4]
  },
  3: {
    [POSITION_TYPES[0]]: [1, 6],
    [POSITION_TYPES[1]]: [3, 5],
    [POSITION_TYPES[2]]: [2, 3],
    [POSITION_TYPES[3]]: [0, 4]
  }
};
