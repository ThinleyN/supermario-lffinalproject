class ArbitraryBlocks {
  constructor() {
    this.blockArray = [];
    this.skyArray = [];
  }
  createBlocks(match) {
    arbitrarybuffer.width = 3500;
    arbitrarybuffer.height = 900;

    if (match.tile === 'surprise') {
      this.blockArray.push({ x: match.xleft, y: match.ytop });
    }
    if (match.tile === 'coin') {
      this.skyArray.push({ x: match.xleft, y: match.ytop });
    }
    this.blockArray.forEach(block => {
      arbitrarybuffer
        .getContext('2d')
        .drawImage(tileset, 48, 0, 16, 16, block.x, block.y, 16, 16);
    });

    this.skyArray.forEach(block => {
      arbitrarybuffer
        .getContext('2d')
        .drawImage(tileset, 48, 330, 16, 16, block.x, block.y, 16, 16);
    });
    return arbitrarybuffer;
  }
}
