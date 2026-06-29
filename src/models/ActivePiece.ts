import { PieceType } from "../constants/piece-types.constants";
import { Position } from "./Position";

export type Rotation = 0 | 1 | 2 | 3;

/**
 * Current played piece. Subjected to gravity, movable and rotatable.
 */
export interface ActivePiece {
  readonly type: PieceType;
  readonly pivot: Position;
  readonly rotation: Rotation;
  readonly cells: ReadonlyArray<Position>;
}
