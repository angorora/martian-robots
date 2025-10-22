export class Grid {
  private maxVertical: number;
  private maxHorizontal: number;
  private scents = new Set();

  constructor(width: number, height: number) {
    this.maxHorizontal = width;
    this.maxVertical = height;
  }

  addScents(x: number, y: number) {
    this.scents.add(`${x},${y}`);
  }

  hasScent(coordinates: string): boolean {
    return this.scents.has(coordinates);
  }

  isOffGrid(x: number, y: number): boolean {
    return x < 0 || x > this.maxHorizontal || y < 0 || y > this.maxVertical;
  }
}
