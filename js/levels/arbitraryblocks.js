class ArbitraryBlocks {
  constructor() {
    this.blockArray = [];
  }
  createBlocks(match) {
    this.blockArray.push({ x: match.xleft, y: match.ytop });

    arbitrarybuffer.width = 3500;
    arbitrarybuffer.height = 900;

    this.blockArray.forEach(block => {
      arbitrarybuffer
        .getContext('2d')
        .drawImage(tileset, 48, 0, 16, 16, block.x, block.y, 16, 16);
    });

    return arbitrarybuffer;
  }
}
