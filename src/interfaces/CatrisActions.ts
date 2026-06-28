export interface CatrisActions {
  start(): void;  // delete?
  pause(): void;  // delete?
  resume(): void; // delete?
  reset(): void;
  moveLeft(): void;
  moveRight(): void;
  softDrop(): void;
  hardDrop(): void;
  rotateCW(): void;
}
