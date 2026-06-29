import { Cell } from "../constants/piece-types.constants";
import { Position } from "../models/Position";
import { Board } from "../types/types";

/**
 * Creates an empty board
 *
 * @param height - height of the board
 * @param width - width of the board
 * @returns an empty Board
 */
export function createEmptyBoard(height: number, width: number): Board {
  return Array.from({ length: height }, () => Array(width).fill(null)) as Board;
}

/**
 * Prints a piece in the board
 * 
 * @param board - a grid of empty/full Cells
 * @param positions - positions of all cells of the piece
 * @param value - type of the piece
 * @returns a board updated with the piece to print
 */
export function printPiecePositions(
  board: Board,
  positions: ReadonlyArray<Position>,
  value: Cell,
): Board {
  const nextBoard: Cell[][] = board.map((row) => row.slice());

  for (const position of positions) {
    nextBoard[position.row][position.col] = value;
  }

  return nextBoard as Board;
}

/**
 * Checks if a given position of the board is empty or not
 *
 * @param position - position to check
 * @param board - a grid of empty/full Cells
 * @returns boolean
 */
export function isEmpty(position: Position, board: Board): boolean {
  return board[position.row][position.col] == null;
}

/**
 * Checks if a given position is inside or outside the board
 *
 * @param position - position to check
 * @param board - a grid of empty/full Cells
 * @returns boolean
 */
export function isInsideBoard(position: Position, board: Board): boolean {
  return (
    position.row >= 0 &&
    position.row < board.length &&
    position.col >= 0 &&
    position.col < board[0].length
  );
}
