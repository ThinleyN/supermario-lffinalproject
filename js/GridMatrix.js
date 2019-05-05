class GridMatrix {
  constructor() {
    this.grid = [];
  }

  get(x, y) {
    if (this.grid[x]) {
      return this.grid[x][y];
    }
  }

  set(x, y, value) {
    if (!this.grid[x]) {
      this.grid[x] = [];
    }
    this.grid[x][y] = value;
  }
}
