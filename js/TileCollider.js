class TileCollider {
  constructor(tileMatrix, arbitrary) {
    this.tiles = new TileResolver(tileMatrix);
    this.arbitrary = arbitrary;
  }

  checkY(entity) {
    let matches = this.tiles.matchByRange(
      entity.position.x,
      entity.position.x + entity.size.x,
      entity.position.y,
      entity.position.y + entity.size.y
    );

    matches.forEach(match => {
      if (entity.name === 'mario') {
        if (match.tile === 'coin') {
          this.arbitrary.createBlocks(match);
        }
      }

      if (
        match.tile === 'ground' ||
        match.tile === 'surprise' ||
        match.tile === 'brick' ||
        match.tile === 'pipeTopLeft' ||
        match.tile === 'pipeTopRight' ||
        match.tile === 'pipeBodyLeft' ||
        match.tile === 'pipeBodyRight' ||
        match.tile === 'cube'
      ) {
        if (entity.velocity.y > 0) {
          if (entity.position.y + entity.size.y > match.ytop) {
            entity.position.y = match.ytop - entity.size.y;
            entity.velocity.y = 0;

            entity.obstruct('bottom');
          }
        } else if (entity.velocity.y < 0) {
          if (entity.position.y < match.ybottom) {
            entity.position.y = match.ybottom;
            entity.velocity.y = 0;

            if (match.tile === 'surprise') {
              this.arbitrary.createBlocks(match);
              sounds.coin.pause();
              sounds.coin.currentTime = 0.0;
              sounds.coin.play();
            }

            entity.obstruct('top', match);
          }
        }
      }
    });
  }

  checkX(entity) {
    let matches = this.tiles.matchByRange(
      entity.position.x,
      entity.position.x + entity.size.x,
      entity.position.y,
      entity.position.y + entity.size.y
    );

    matches.forEach(match => {
      if (
        match.tile === 'surprise' ||
        match.tile === 'ground' ||
        match.tile === 'brick' ||
        match.tile === 'pipeTopLeft' ||
        match.tile === 'pipeTopRight' ||
        match.tile === 'pipeBodyLeft' ||
        match.tile === 'pipeBodyRight' ||
        match.tile === 'cube' ||
        match.tile === 'flaghead' ||
        match.tile === 'flagbody'
      ) {
        if (entity.velocity.x > 0) {
          if (entity.position.x + entity.size.x > match.xleft) {
            entity.position.x = match.xleft - entity.size.x;
            entity.velocity.x = 0;

            entity.obstruct('left');
          }
        } else if (entity.velocity.x < 0) {
          if (entity.position.x < match.xright) {
            entity.position.x = match.xright;
            entity.velocity.x = 0;

            entity.obstruct('right');
          }
        }
        // (match.tile === 'flaghead' || match.tile === 'flagbody'){

        // }
      }
    });
  }

  test(entity) {
    const match = this.tiles.matchByPosition(
      entity.position.x,
      entity.position.y
    );
    if (match) {
      // console.log('matched', match, match.tile);
    }
  }
}
