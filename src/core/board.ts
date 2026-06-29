import { Cell } from "../constants/piece-types.constants";
import { Position } from "../models/Position";
import { Board } from "../types/types";

export function createEmptyBoard(height: number, width: number): Board {
  return Array.from({ length: height }, () => Array(width).fill(null)) as Board;
}

export function printPiecePositions(
  board: Board,
  positions: ReadonlyArray<Position>,
  value: Cell,
): Board {
  const nextBoard: Cell[][] = board.map((row) => row.slice());

  for (const position of positions) {
    nextBoard[position.col][position.row] = value;
  }

  return nextBoard as Board;
}

export function isEmpty(position: Position, board: Board): boolean {
  return board[position.col][position.row] == null;
}

export function isInsideBoard(position: Position, board: Board): boolean {
  return (
    position.col >= 0 &&
    position.col < board.length &&
    position.row >= 0 &&
    position.row < board[0].length
  );
}

