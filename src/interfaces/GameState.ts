import { PieceType } from "../constants/piece-types.constants";
import { Board, GameStatus } from "../types/types";
import { ActivePiece } from "../models/ActivePiece";

/**
 * Current state of the game. 
 * Board : can only contain empty cells (null) or PieceType cells representing a chunk of a piece no longer active. 
 * Lines : number of cleared lines
 * Queue : PieceTypes of the next ActivePieces
 */
export interface GameState {
  readonly board: Board;  
  readonly active: ActivePiece | null;
  readonly queue: ReadonlyArray<PieceType>;  
  readonly status: GameStatus;
  readonly score: number;
  readonly level: number;
  readonly lines: number;   
}
