class TileResolver {
  constructor(matrix, tileSize = 16) {
    this.matrix = matrix;
    this.tileSize = tileSize;
  }

  toIndex(pos) {
    return Math.floor(pos / this.tileSize);
  }

  getByIndex(indexX, indexY) {
    const tile = this.matrix.get(indexX, indexY);
    const ytop = indexY * this.tileSize;
    const ybottom = ytop + this.tileSize;
    if (tile) {
      return {
        tile,
        ytop,
        ybottom
      };
    }
  }

  matchByPosition(posX, posY) {
    return this.getByIndex(this.toIndex(posX), this.toIndex(posY));
  }
}
