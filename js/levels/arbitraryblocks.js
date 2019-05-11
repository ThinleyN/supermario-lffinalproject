class ArbitraryBlocks {
  constructor() {
    this.blockArray = [];
    this.skyArray = [];
    this.arbitraryState = document.createElement('canvas');
  }
  createBlocks(match) {
    if (match.tile === 'surprise') {
      const { length } = this.blockArray;
      const found = this.blockArray.some(
        element => (element.x === match.xleft) & (element.y === match.ytop)
      );
      if (!found) {
        this.blockArray.push({ x: match.xleft, y: match.ytop });
        sounds.coin.pause();
        sounds.coin.currentTime = 0.0;
        sounds.coin.play();
      } else {
        sounds.bump.pause();
        sounds.bump.currentTime = 0.0;
        sounds.bump.play();
      }
    }
    console.log(this.blockArray);

    if (match.tile === 'coin') {
      const { length } = this.skyArray;
      const found = this.skyArray.some(
        element => (element.x === match.xleft) & (element.y === match.ytop)
      );
      if (!found) {
        this.skyArray.push({ x: match.xleft, y: match.ytop });
        sounds.coin.pause();
        sounds.coin.currentTime = 0.0;
        sounds.coin.play();
      }
    }
    console.log(this.skyArray);
  }

  drawBlocks(context, camera) {
    this.arbitraryState.width = 3800;
    this.arbitraryState.height = 500;

    this.blockArray.forEach(block => {
      this.arbitraryState
        .getContext('2d')
        .drawImage(tileset, 48, 0, 16, 16, block.x, block.y, 16, 16);
    });

    this.skyArray.forEach(block => {
      this.arbitraryState
        .getContext('2d')
        .drawImage(tileset, 48, 330, 16, 16, block.x, block.y, 16, 16);
    });

    context.drawImage(
      this.arbitraryState,
      -camera.position.x,
      -camera.position.y
    );
  }
}
