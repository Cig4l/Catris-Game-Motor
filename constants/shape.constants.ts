import { PositionType } from "../types/position-type.enum";

export const I_SHAPE: Record<number, Record<PositionType, number[]>> = {
  0: {
    [PositionType.DEFAULT]: [1, 3],
    [PositionType.POS_1]: [0, 5],
    [PositionType.POS_2]: [2, 6],
    [PositionType.POS_3]: [3, 4]
  },
  1: {
    [PositionType.DEFAULT]: [1, 4],
    [PositionType.POS_1]: [1, 5],
    [PositionType.POS_2]: [2, 5],
    [PositionType.POS_3]: [2, 4]
  },
  2: {
    [PositionType.DEFAULT]: [1, 5],
    [PositionType.POS_1]: [2, 5],
    [PositionType.POS_2]: [2, 4],
    [PositionType.POS_3]: [1, 4]
  },
  3: {
    [PositionType.DEFAULT]: [1, 6],
    [PositionType.POS_1]: [3, 5],
    [PositionType.POS_2]: [2, 3],
    [PositionType.POS_3]: [0, 4]
  }
};
