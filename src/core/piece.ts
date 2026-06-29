import { PieceType } from "../constants/piece-types.constants";
import { PIECE_DEFAULT_POSITIONS } from "../constants/shape.constants";
import { ActivePiece, Rotation } from "../models/ActivePiece";
import { Position } from "../models/Position";

/**
 * Creates a new active piece from a type and pivot position.
 *
 * @param type - The piece type (tetromino shape, e.g. I, O, T…)
 * @param pivot - The actual position the piece rotates around and is placed relative to
 * @returns an `ActivePiece` initialized
 */
export function createPiece(type: PieceType, pivot: Position): ActivePiece {
  return {
    type: type,
    pivot: pivot,
    rotation: 0 as Rotation,
    cells: calculatePositions(type, pivot, 0),
  };
}

/**
 * Calculates the actual positions of all cells of a PieceType in a given rotation.
 *
 * @param type - The piece type (tetromino shape, e.g. I, O, T…)
 * @param pivot - The actual position the piece rotates around and is placed relative to
 * @param rotation - The current rotation of the piece
 * @returns a ReadonlyArray of the calculated positions
 */
export function calculatePositions(
  type: PieceType,
  pivot: Position,
  rotation: Rotation,
): ReadonlyArray<Position> {
  let offsets = PIECE_DEFAULT_POSITIONS[type];

  for (let i = 0; i < rotation; i++) {
    offsets = rotateOffsetCW(offsets);
  }

  return offsets.map((o) => ({
    col: pivot.col + o.col,
    row: pivot.row + o.row,
  }));
}

/**
 * Calculates the offsets of the next rotation by being given the offsets relevant for the current rotation
 * 
 * @param offsets - offsets of all cells of an ActivePiece relative to the pivot for the current rotation
 * @returns a ReadonlyArray<Position> of all cells of an ActivePiece relative to the pivot for the next rotation
 */
export function rotateOffsetCW(
  offsets: ReadonlyArray<Position>,
): ReadonlyArray<Position> {
  let rotateOffsets: Position[] = [];

  for (const offset of offsets) {
    rotateOffsets.push({ col: offset.row * -1, row: offset.col });
  }
  return rotateOffsets as ReadonlyArray<Position>;
}

/**
 * Modifies where the ActivePiece is in the board (move left...)
 * 
 * @param piece - The active piece
 * @param moveX - Translation offset on the horizontal axis
 * @param moveY - Translation offset on the vertical axis
 * @returns an ActivePiece with updated pivot and cells position
 */
export function move(
  piece: ActivePiece,
  moveX: number,
  moveY: number,
): ActivePiece {
  let pivot: Position = {
    col: piece.pivot.col + moveX,
    row: piece.pivot.row + moveY,
  };

  let cells: ReadonlyArray<Position> = calculatePositions(
    piece.type,
    pivot,
    piece.rotation,
  );

  return { ...piece, cells: cells, pivot: pivot } as ActivePiece;
}

/**
 * Rotates the ActivePiece clockwise
 * 
 * @param piece - The active piece
 * @returns the active piece with updated rotation and cells position
 */
export function rotateCW(piece: ActivePiece): ActivePiece {
  // modifies how active piece rotates
  if (piece.type == "O") {
    return piece;
  }

  let rotation: Rotation = ((piece.rotation + 1) % 4) as Rotation;

  let cells: ReadonlyArray<Position> = calculatePositions(
    piece.type,
    piece.pivot,
    rotation,
  );

  return { ...piece, cells: cells, rotation: rotation } as ActivePiece;
}
