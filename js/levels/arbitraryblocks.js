class ArbitraryBlocks {
  constructor() {
    this.blockArray = [];
    this.skyArray = [];
    this.arbitraryState = document.createElement('canvas');
  }
  createBlocks(match) {
    if (match.tile === 'surprise') {
      this.blockArray.push({ x: match.xleft, y: match.ytop });
    }

    if (match.tile === 'coin') {
      this.skyArray.push({ x: match.xleft, y: match.ytop });
    }
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
