import { I_SHAPE } from "../constants/shape.constants";
import { Color } from "../types/color.enum";
import { AllowedIPosition, PositionType } from "../types/position-type.enum";
import { Block } from "./Block";
import { Cell } from "./Cell";
import { ICell } from "./ICell";

export class IBlock extends Block<PositionType> {
    constructor() {
      super();

      this.cells = Object.keys(I_SHAPE).map((key) =>
        new ICell(I_SHAPE[Number(key)])
      );
    }
}