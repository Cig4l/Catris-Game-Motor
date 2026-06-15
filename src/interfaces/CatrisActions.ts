export interface CatrisActions {
  start(): void;
  pause(): void;
  resume(): void;
  reset(): void;
  moveLeft(): void;
  moveRight(): void;
  softDrop(): void;
  hardDrop(): void;
  rotateCW(): void;
}
