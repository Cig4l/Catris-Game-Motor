import { GRID_WIDTH } from "../constants/grid.constants";
import {
  Cell,
  PIECE_TYPES,
  PieceType,
} from "../constants/piece-types.constants";
import { GameState } from "../interfaces/GameState";
import { ActivePiece } from "../models/ActivePiece";
import { Board } from "../types/types";
import { printPiecePositions } from "./board";
import { canPlace } from "./collision";
import { calculatePositions, createPiece, move } from "./piece";

function gravityTick(gameState: GameState): GameState {
  if (!gameState.active) {
    return gameState;
  }

  let movedPiece: ActivePiece = move(gameState.active, 0, +1);

  if (canPlace(gameState.board, movedPiece.cells)) {
    return { ...gameState, active: movedPiece } as GameState;
  }

  return resolvePiece(gameState) as GameState;
}

function resolvePiece(gameState: GameState): GameState {
  if (!gameState.active) {
    return gameState;
  }

  const newBoard: Board = printPiecePositions(
    gameState.board,
    gameState.active.cells,
    gameState.active.type,
  );

  const clearedRes : ClearResult = clearLines(newBoard);
  const lines : number = gameState.lines + clearedRes.cleared;

  return spawnNextActivePiece({ // TODO : score + level
    ...gameState,
    board: clearedRes.board,
    active: null,
    lines: lines
  });
}

function spawnNextActivePiece(gameState: GameState): GameState {
  const newPiece = createPiece(gameState.queue[0], {
    col: GRID_WIDTH + 1 / 2,
    row: 0,
  });

  if (!canPlace(gameState.board, newPiece.cells)) {
    return { ...gameState, active: null, status: "gameover" };
  }

  if (gameState.queue.length > 0) {
    return {
      ...gameState,
      active: newPiece,
      queue: gameState.queue.filter((v) => {
        v != gameState.queue[0];
      }),
    };
  }
  return {
    ...gameState,
    active: newPiece,
    queue: refillQueue(),
  };
}

function refillQueue(): ReadonlyArray<PieceType> {
  const pieceTypeArr = [];
  for (const pieceType of PIECE_TYPES) {
    pieceTypeArr.push(pieceType);
  }
  return pieceTypeArr.sort(
    () => Math.random() - 0.5,
  ) as ReadonlyArray<PieceType>;
}

export interface ClearResult {
  board: Board;
  cleared: number;
}

function clearLines(board: Board): clearResult {
  const clearedBoard = board.filter((row) => row.some((cell) => cell == null));
  const clearedCount = board.length - clearedBoard.length;
  const emptyLines: Cell[][] = [];

  for (let i = 0; i < clearedCount; i++) {
    emptyLines.push(Array(board[0].length).fill(null) as Cell[]);
  }

  return { board: [...emptyLines, ...clearedBoard], cleared: clearedCount };
}
