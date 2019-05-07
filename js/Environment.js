const MAX_LEFT_PIXEL = 400;

class Environment {
  constructor() {
    this.comp = new Compositor();
    this.entities = new Set();
    this.tiles = new GridMatrix();
    this.gravity = 1;
    this.lastPosition = 0;

    this.tileCollider = new TileCollider(this.tiles);
  }

  update(camera) {
    this.entities.forEach(entity => {
      // this.tileCollider.test(entity);
      entity.position.x += entity.velocity.x;
      this.tileCollider.checkX(entity);

      console.log(entity.position.x);

      //Camera Movement
      if (entity.position.x > MAX_LEFT_PIXEL) {
        camera.position.x = camera.position.x =
          entity.position.x - MAX_LEFT_PIXEL;
      }

      entity.position.y += entity.velocity.y;
      this.tileCollider.checkY(entity);

      entity.velocity.y += this.gravity;

      this.lastPosition = entity.position.x;

      entity.update();
    });
  }
}
