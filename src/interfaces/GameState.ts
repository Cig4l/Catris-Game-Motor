import { PieceType } from "../constants/piece-types.constants";
import { Board, GameStatus } from "../types/types";
import { ActivePiece } from "./ActivePiece";

export interface GameState {
  readonly board: Board;
  readonly active: ActivePiece | null;
  readonly hold: PieceType | null;
  readonly queue: ReadonlyArray<PieceType>;
  readonly status: GameStatus;
  readonly score: number;
  readonly level: number;
  readonly lines: number;
}
