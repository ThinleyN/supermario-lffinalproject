function createMario() {
  return loadMario().then(sprites => {
    let duration = 0.5;
    let upvelo = 1.7;
    let engageTime = 0;
    let speed = 2;

    const mario = new Entity('mario');
    mario.position.set(100, 10);
    mario.velocity.set(0, 0);
    mario.size.set(14, 16);
    mario.jumpReady = false;

    mario.draw = function drawMario(context) {
      context.clearRect(0, 0, 64, 64);
      if (this.dead === false) {
        if (this.velocity.x === 0) {
          sprites.draw('idle', context, 0, 0);
        }

        this.animate++;
        if (this.velocity.x > 0) {
          if (this.animate % 10 === 0) {
            this.spriteIndex++;
            if (this.spriteIndex > 2) {
              this.spriteIndex = 0;
            }
          }
          sprites.draw(`run${this.spriteIndex}`, context, 0, 0);
        }
        if (this.velocity.x < 0) {
          if (this.animate % 10 === 0) {
            this.spriteIndex++;
            if (this.spriteIndex > 2) {
              this.spriteIndex = 0;
            }
          }
          sprites.draw(`backrun${this.spriteIndex}`, context, 0, 0);
        }
      }
    };

    mario.walk = function walkMario(dir, run) {
      this.velocity.x = speed * dir;
    };

    mario.jump = function jumpMario() {
      if (this.jumpReady === true) {
        engageTime = duration;
      }
    };

    mario.jumpStop = function jumpStop() {
      engageTime = 0;
    };

    mario.obstruct = function obstruct(side, match) {
      this.jumpReady = true;
    };

    mario.update = function updateMario() {
      if (engageTime > 0) {
        this.velocity.y -= upvelo;
        engageTime -= 1 / 25;
        this.jumpReady = false;
      }
    };

    return mario;
  });
}
