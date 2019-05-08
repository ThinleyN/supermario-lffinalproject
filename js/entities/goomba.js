function createGoomba() {
  return loadMario().then(sprites => {
    const goomba = [];

    for (i = 0; i < 2; i++) {
      goomba[i] = new Entity('goomba');

      goomba[i].size.set(16, 16);
      goomba[i].draw = function drawgoomba(context) {
        context.clearRect(0, 0, 64, 64);
        sprites.draw('goomba', context, 0, 0);
      };

      goomba[i].obstruct = function obstruct(side) {
        if (side === 'left' || side === 'right') {
          this.speed = -this.speed;
        }
      };

      goomba[i].update = function updategoomba() {
        this.velocity.x += this.speed;
        if (this.velocity.x > ENEMY_TOPSPEED) {
          this.velocity.x = ENEMY_TOPSPEED;
        } else if (this.velocity.x < -ENEMY_TOPSPEED) {
          this.velocity.x = -ENEMY_TOPSPEED;
        }
      };
    }
    goomba[0].position.set(150, 200);
    goomba[1].position.set(100, 2);
    return goomba;
  });
}
