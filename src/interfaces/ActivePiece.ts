import { PieceType } from "../constants/piece-types.constants";
import { Position } from "./Position";

export interface ActivePiece {
  readonly type: PieceType;
  readonly cells: ReadonlyArray<Position>;
}
