import { Color } from "../types/color.enum";
import { PositionType } from "../types/position-type.enum";
import { Cell } from "./Cell";

export abstract class Block<T extends PositionType> {
    protected isMovable : boolean = true;
    protected cells : Cell<T>[] = [];
    protected currentPosition = PositionType.DEFAULT;

    constructor() {}

    public move() : void {};
    public changePosition(): void {};
    public fall() : void {};
    public collide() : void {};

    public getCells() : Cell<T>[] {
        return this.cells;
    }
}