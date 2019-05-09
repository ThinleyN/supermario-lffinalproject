function createGoomba() {
  return loadMario().then(sprites => {
    const goomba = [];

    for (i = 0; i < 4; i++) {
      goomba[i] = new Entity('goomba', i);

      goomba[i].size.set(16, 16);
      goomba[i].draw = function drawgoomba(context) {
        if (this.dead === false) {
          context.clearRect(0, 0, 64, 64);
          sprites.draw('goomba', context, 0, 0);
        }
        if (this.dead === true) {
          context.clearRect(0, 0, 64, 64);
          sprites.draw('goombadead', context, 0, 0);
        }
      };

      goomba[i].obstruct = function obstruct(side) {
        if (side === 'left' || side === 'right') {
          this.speed = -this.speed;
        }
      };

      goomba[i].update = function updategoomba() {
        if (this.dead === false) {
          this.velocity.x += this.speed;
          if (this.velocity.x > ENEMY_TOPSPEED) {
            this.velocity.x = ENEMY_TOPSPEED;
          } else if (this.velocity.x < -ENEMY_TOPSPEED) {
            this.velocity.x = -ENEMY_TOPSPEED;
          }
        } else {
          this.velocity.x = 0;
        }
      };
    }
    goomba[0].position.set(400, 200);
    goomba[1].position.set(300, 2);
    goomba[2].position.set(530, 2);
    goomba[3].position.set(430, 2);
    return goomba;
  });
}
