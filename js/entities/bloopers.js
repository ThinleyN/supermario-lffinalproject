function createBloopers() {
  return loadMario().then(sprites => {
    const bloopers = [];

    for (i = 0; i < 6; i++) {
      bloopers[i] = new Entity('bloopers', i);

      bloopers[i].size.set(16, 16);
      bloopers[i].draw = function drawgoomba(context) {
        //right moving animation
        if (this.dead === false && this.velocity.x > 0) {
          if (this.animate % 70 === 0) {
            this.spriteIndex++;
          }
          this.animate++;
          if (this.spriteIndex > 1) {
            this.spriteIndex = 0;
          }
        }

        //left moving animation
        if (this.dead === false && this.velocity.x < 0) {
          if (this.animate % 30 === 0) {
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
        sprites.draw(`bloopers${this.spriteIndex}`, context, 0, 0);
      };

      bloopers[i].obstruct = function obstruct(side) {
        if (side === 'left' || side === 'right') {
          this.speed = -this.speed;
        }
      };

      bloopers[i].update = function updategoomba() {
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
    bloopers[0].position.set(2670, 200);
    bloopers[1].position.set(2690, 2);
    bloopers[2].position.set(3000, 2);
    bloopers[3].position.set(2500, 0);
    bloopers[4].position.set(886, 0);
    bloopers[5].position.set(860, 0);

    return bloopers;
  });
}
