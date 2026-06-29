import { Cell } from "../constants/piece-types.constants";
import { printPiecePositions } from "../core/board";
import { GameState } from "../interfaces/GameState";


export function render(state: GameState): string {
  const board = state.active
    ? printPiecePositions(state.board, state.active.cells, state.active.type)
    : state.board;

  const top = '┌' + '──'.repeat(board[0].length) + '┐';
  const bottom = '└' + '──'.repeat(board[0].length) + '┘';

  const rows = board.map(
    (row) => '│' + row.map((c: Cell) => (c ? c + ' ' : '. ')).join('') + '│',
  );

  const hud =
    `status=${state.status}  score=${state.score}  ` +
    `level=${state.level}  lines=${state.lines}  ` +
    `next=${state.queue.slice(0, 5).join('')}`;

  return ['',top, ...rows, bottom, hud].join('\n');
}