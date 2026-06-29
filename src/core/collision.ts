import { Position } from "../models/Position";
import { Board } from "../types/types";
import { isEmpty, isInsideBoard } from "./board";

/**
 * Checks if a piece can be placed on a given position by checking if all its positions are empty (null) on the board
 * 
 * @param board - a grid of empty/PieceType Cells
 * @param positions - an array of positions
 * @returns a boolean
 */
export function canPlace(board: Board, positions: ReadonlyArray<Position>) : boolean {
 for(const position of positions) {
    if(!isInsideBoard(position, board) || !isEmpty(position, board)) {
        return false;
    }
 }
 return true;   
}