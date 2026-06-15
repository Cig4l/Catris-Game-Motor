import { Color } from "../types/color.enum";
import { AllowedIPosition, PositionType } from "../types/position-type.enum";

export abstract class Cell<T extends PositionType> {
  private height: number = 1;
  private width: number = 1;
  private currentX: number;
  private currentY: number;

  protected positionTypes: Record<T, number[]>;
  abstract color: Color;

  constructor(positionTypes: Record<T, number[]>) {
    this.positionTypes = positionTypes;
    this.currentX = this.positionTypes[PositionType.DEFAULT as T][0];
    this.currentY = this.positionTypes[PositionType.DEFAULT as T][1];
  }

  public changePosition(positionType: T) {
    this.currentX = this.positionTypes[positionType][0];
    this.currentY = this.positionTypes[positionType][1];
  }

  public getCurrentX() : number {
    return this.currentX;
  }

  public getCurrentY() : number {
    return this.currentY;
  }

  public getHeight(): number {
    return this.height;
  }

  public getWidth(): number {
    return this.width;
  }

  public getColor(): Color {
    return this.color;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public setColor(color: Color): void {
    this.color = color;
  }
}