export enum PositionType {
    DEFAULT = 0,
    POS_1 = 1,
    POS_2 = 2,
    POS_3 = 3
}

export type AllowedIPosition = PositionType.DEFAULT | PositionType.POS_1 | PositionType.POS_2;