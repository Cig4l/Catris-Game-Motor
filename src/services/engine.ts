import { createNewState, orchestrate } from "../core/orchestrator";
import { GameState } from "../interfaces/GameState";
import { Action } from "../types/actions.enum";

/**
 * List of exposed endpoints
 */
export interface CatrisActions {
  start(): void;
  pause(): void;
  resume(): void;
  reset(): void;
  moveLeft(): void;
  moveRight(): void;
  hardDrop(): void;
  rotateCW(): void;
  tick(): void;
}

/**
 * Interaction bridges used to manipulate the game
 */
export interface CatrisEngine {
  getState(): GameState;
  subscribe(listener: (state: GameState) => void): () => void;
  readonly actions: CatrisActions;
}

/**
 * Builds the Catris Game Engine with the signals relay (observer pattern) with subscribe/dispatch. 
 * Initializes GameState and exposes interaction bridges to manipulate the game 
 * 
 * @returns CatrisEngine - interaction bridges : getState, subscribe, actions
 */
export function createCatris(): CatrisEngine {
  let state = createNewState();
  const listeners = new Set<(s: GameState) => void>();  // créer set de fonctions (pas de doublon) : (s : GameState) => void

  function dispatch(action: Action): void {
    const next = orchestrate(state, action);
    if (next !== state) {
      state = next;
      listeners.forEach((l) => l(state));
    }
  }

  const actions: CatrisActions = {
    start: () => dispatch(Action.START),
    pause: () => dispatch(Action.PAUSE),
    resume: () => dispatch(Action.RESUME),
    reset: () => dispatch(Action.RESET),
    moveLeft: () => dispatch(Action.MOVE_LEFT),
    moveRight: () => dispatch(Action.MOVE_RIGHT),
    hardDrop: () => dispatch(Action.HARD_DROP),
    rotateCW: () => dispatch(Action.ROTATE_CW),
    tick: () => dispatch(Action.TICK),
  };

  return {
    getState: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    actions,
  };
}
