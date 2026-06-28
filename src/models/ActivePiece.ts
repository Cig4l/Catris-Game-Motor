import { PieceType } from "../constants/piece-types.constants";
import { POSITION_TYPES, PositionType } from "../constants/position.constants";
import { PIECE_DEFAULT_POSITIONS } from "../constants/shape.constants";
import { Position } from "./Position";

export type Rotation = 0 | 1 | 2 | 3;

export interface ActivePiece {
  readonly type: PieceType;
  readonly pivot: Position;
  readonly rotation: Rotation;
  readonly cells: ReadonlyArray<Position>;



  // public rotate(): ReadonlyArray<Position> {
  //   this.positionCells = this.calculateNextRotation();
  // }

  // public calculateNextRotation() : ReadonlyArray<Position> {
  //  const res : Position[] = [];
    
  //   for(let i=0; i<4; i++) {
  //     res.push({col: this.positionCells[i].row * -1, row: this.positionCells[i].col});
  //   }

  //   return res;
  // }
}
