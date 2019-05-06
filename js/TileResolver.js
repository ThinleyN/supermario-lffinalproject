class TileResolver {
  constructor(matrix, tileSize = 16) {
    this.matrix = matrix;
    this.tileSize = tileSize;
  }

  toIndex(pos) {
    return Math.floor(pos / this.tileSize);
  }

  toIndexRange(position1, position2) {
    let posMax = Math.ceil(position2 / this.tileSize) * this.tileSize;
    let range = [];
    do {
      range.push(this.toIndex(position1));
      position1 += this.tileSize;
    } while (position1 < posMax);
    return range;
  }

  getByIndex(indexX, indexY) {
    let tile = this.matrix.get(indexX, indexY);
    let xleft = indexX * this.tileSize;
    let xright = xleft + this.tileSize;
    // console.log(xright);
    let ytop = indexY * this.tileSize;
    let ybottom = ytop + this.tileSize;
    if (tile) {
      return {
        tile,
        ytop,
        ybottom,
        xleft,
        xright
      };
    }
  }

  matchByPosition(posX, posY) {
    return this.getByIndex(this.toIndex(posX), this.toIndex(posY));
  }

  matchByRange(x1, x2, y1, y2) {
    let matches = [];
    this.toIndexRange(x1, x2).forEach(indexX => {
      this.toIndexRange(y1, y2).forEach(indexY => {
        let match = this.getByIndex(indexX, indexY);
        if (match) {
          matches.push(match);
        }
      });
    });
    return matches;
  }
}
