const MAX_LEFT_PIXEL = 400;

class Environment {
  constructor(arbitraryState) {
    this.comp = new Compositor();
    this.entities = new Set();
    this.tiles = new GridMatrix();
    this.gravity = 1;
    this.entityCollider = new EntityCollider(this.entities);
    this.arbitrary = new ArbitraryBlocks();

    this.tileCollider = new TileCollider(this.tiles, this.arbitrary);
  }

  update(camera) {
    this.entities.forEach(entity => {
      entity.forEach(element => {
        element.position.x += element.velocity.x;
        this.tileCollider.checkX(element);

        if (this.tileCollider.poleCheck(element) === true) {
          this.gravity = 0.09;
          gameover = 1;
        }

        //Camera Movement
        if (element.name === 'mario') {
          if (element.position.x > MAX_LEFT_PIXEL) {
            camera.position.x = element.position.x - MAX_LEFT_PIXEL;
          }
          this.entityCollider.check(element);
        }

        element.position.y += element.velocity.y;
        this.tileCollider.checkY(element);
        if (element.name !== 'rocket') {
          element.velocity.y += this.gravity;
        }
        if (element.name === 'rocket') {
          element.velocity.y = 0;
        }

        element.update();
      });
    });
  }
}
