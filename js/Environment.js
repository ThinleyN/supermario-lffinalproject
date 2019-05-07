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

      if (entity.position.x - 500 > 1) {
        camera.position.x =
          camera.position.x - this.lastPosition + entity.position.x;
      }

      entity.position.y += entity.velocity.y;
      this.tileCollider.checkY(entity);

      entity.velocity.y += this.gravity;

      this.lastPosition = entity.position.x;

      entity.update();
    });
  }
}
