import { Color } from "../types/color.enum";
import { AllowedIPosition, PositionType } from "../types/position-type.enum";
import { Cell } from "./Cell";

export class ICell extends Cell<PositionType> {
    color: Color = Color.CYAN;
}