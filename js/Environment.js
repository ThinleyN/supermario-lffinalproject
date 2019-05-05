class Environment {
  constructor() {
    this.comp = new Compositor();
    this.entities = new Set();
    this.tiles = new GridMatrix();

    this.tileCollider = new TileCollider(this.tiles);
  }

  update() {
    this.entities.forEach(entity => {
      this.tileCollider.test(entity);
      entity.update();
    });
  }
}
