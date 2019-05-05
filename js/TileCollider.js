class TileCollider {
  constructor(tileMatrix) {
    this.tiles = new TileResolver(tileMatrix);
  }

  checkY(entity) {
    const match = this.tiles.matchByPosition(
      entity.position.x,
      entity.position.y
    );

    if (match.tile !== 'ground') {
      return;
    }

    if (match.tile === 'ground') {
      if (entity.velocity.y > 0) {
        if (entity.position.y > match.ytop) {
          entity.position.y = match.ytop;
          entity.velocity.y = 0;
        }
      } else if (entity.velocity.y < 0) {
        if (entity.position.y < match.ybottom) {
          entity.position.y = match.ybottom;
          entity.velocity.y = 0;
        }
      }
    }
  }

  test(entity) {
    this.checkY(entity);

    const match = this.tiles.matchByPosition(
      entity.position.x,
      entity.position.y
    );
    if (match) {
      // console.log('matched', match, match.tile);
    }
  }
}
