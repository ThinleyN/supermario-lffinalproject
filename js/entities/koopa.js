function createKoopa() {
  return loadMario().then(sprites => {
    const koopa = [];

    for (i = 0; i < 5; i++) {
      koopa[i] = new Entity('koopa');
      koopa[i].size.set(16, 24);
      koopa[i].index = i;

      koopa[i].draw = function drawkoopa(context) {
        //right moving animation
        if (this.dead === false && this.velocity.x > 0) {
          if (this.animate % ENTITIES_ANIMATION_SPEED === 0) {
            this.spriteIndex++;
          }
          this.animate++;
          if (this.spriteIndex > 1) {
            this.spriteIndex = 0;
          }
        }

        //left moving animation
        if (this.dead === false && this.velocity.x < 0) {
          if (this.animate % ENTITIES_ANIMATION_SPEED === 0) {
            this.spriteIndex++;
          }
          this.animate++;
          if (this.spriteIndex > 3) {
            this.spriteIndex = 2;
          }
        }

        if (this.dead === true) {
          this.spriteIndex = 4;
        }
        context.clearRect(0, 0, 64, 64);
        sprites.draw(`koopa${this.spriteIndex}`, context, 0, 0);
      };

      koopa[i].obstruct = function obstruct(side) {
        if (side === 'left' || side === 'right') {
          this.speed = -this.speed;
        }
      };

      koopa[i].update = function updatekoopa() {
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
    koopa[0].position.set(340, 200);
    koopa[1].position.set(210, 30);
    koopa[2].position.set(650, 5);
    koopa[3].position.set(700, 55);
    koopa[4].position.set(1374, 55);

    return koopa;
  });
}
