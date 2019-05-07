const MAX_LEFT_PIXEL = 400;

class Environment {
  constructor() {
    this.comp = new Compositor();
    this.entities = new Set();
    this.tiles = new GridMatrix();
    this.gravity = 1;

    this.tileCollider = new TileCollider(this.tiles);
  }

  update(camera) {
    this.entities.forEach(entity => {
      // console.log(entity.name);
      entity.position.x += entity.velocity.x;
      this.tileCollider.checkX(entity);

      //Camera Movement
      if (entity.name === 'mario') {
        // console.log(entity.name);
        if (entity.position.x > MAX_LEFT_PIXEL) {
          camera.position.x = camera.position.x =
            entity.position.x - MAX_LEFT_PIXEL;
        }
      }

      entity.position.y += entity.velocity.y;
      this.tileCollider.checkY(entity);

      entity.velocity.y += this.gravity;

      entity.update();
    });
  }
}
