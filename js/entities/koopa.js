const ENEMY_TOPSPEED = 0.6;

function createKoopa() {
  return loadMario().then(sprites => {
    const koopa = [];

    for (i = 0; i < 2; i++) {
      koopa[i] = new Entity('koopa');
      koopa[i].size.set(16, 24);

      koopa[i].draw = function drawkoopa(context) {
        context.clearRect(0, 0, 64, 64);
        sprites.draw('koopa', context, 0, 0);
      };

      koopa[i].obstruct = function obstruct(side) {
        if (side === 'left' || side === 'right') {
          this.speed = -this.speed;
        }
      };

      koopa[i].update = function updatekoopa() {
        this.velocity.x += this.speed;
        if (this.velocity.x > ENEMY_TOPSPEED) {
          this.velocity.x = ENEMY_TOPSPEED;
        } else if (this.velocity.x < -ENEMY_TOPSPEED) {
          this.velocity.x = -ENEMY_TOPSPEED;
        }
      };
    }
    koopa[0].position.set(300, 200);
    koopa[1].position.set(210, 30);
    return koopa;
  });
}
