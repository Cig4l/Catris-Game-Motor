import { PieceType } from "../constants/piece-types.constants";
import { PIECE_DEFAULT_POSITIONS } from "../constants/shape.constants";
import { ActivePiece, Rotation } from "../models/ActivePiece";
import { Position } from "../models/Position";

export function calculatePositions(
  type: PieceType,
  pivot: Position,
  rotation: Rotation,
): ReadonlyArray<Position> {
  let offsets = PIECE_DEFAULT_POSITIONS[type];

  for (let i = 0; i < rotation; i++) {
    offsets = rotateOffsetCW(offsets);
  }

  return offsets.map((o) => ({col: pivot.col + o.col, row: pivot.row + o.row}));
}

export function rotateOffsetCW(offsets: ReadonlyArray<Position>) : ReadonlyArray<Position> {
    let rotateOffsets : Position[] = [];

    for(const offset of offsets) {
        rotateOffsets.push({col: offset.row * -1, row: offset.col})
    }
    return rotateOffsets as ReadonlyArray<Position>;
}
