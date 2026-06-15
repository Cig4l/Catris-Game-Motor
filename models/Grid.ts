import { EMPTY_CELL, GRID_HEIGHT, GRID_WIDTH } from "../constants/grid.constants";
import { Block } from "./Block";
import { Cell } from "./Cell";
import { IBlock } from "./IBlock";

export class Grid {
  private grid: (Cell<any> | null)[][];
  private level : number = 1;
  private score : number = 0;

  constructor() {
    const block : IBlock = new IBlock();

    this.grid = Array.from({ length: GRID_HEIGHT }, () =>
      Array.from({ length: GRID_WIDTH }, () => EMPTY_CELL)
    );

    for (const cell of block.getCells()) {
      this.grid[cell.getCurrentX()][cell.getCurrentY()] = cell;
    }
  }

  public display() : void {
    console.log("\n");
    for(let i=0; i<GRID_HEIGHT; i++) {
      let row : String = ""
      for(let j=0; j<GRID_WIDTH; j++) {
        if(this.grid[i][j] instanceof Cell) {
          row += "X";
        } else {
          row += ".";
        }
      }
      console.log(row + "\n");
    }
  }

  // public move(): void {
  //   if(this.isMovable) {
  //       // can use arrow keys to move
  //   }
  // }

  // public fall(): void {
  //   if(this.isMovable) {
  //       // fall
  //   }
  // }

  // public collide() {
  //   if(this.isMovable) {
  //       // si collision : setIsMovable(false)
  //   }
  // }
}