function createMario() {
  return loadMario().then(sprites => {
    let mario = new Entity();
    mario.position.set(60, 200);
    mario.velocity.set(0, 0);
    mario.size.set(14, 16);

    var gravity = 1;
    var duration = 0.5;
    var upvelo = 1.7;
    var engageTime = 0;
    var dir = 0;
    var speed = 2;

    mario.draw = function drawMario(context) {
      sprites.draw('idle', context, this.position.x, this.position.y);
    };

    mario.walk = function walkMario(dir) {
      console.log(dir);
      mario.velocity.x = speed * dir;
    };

    mario.jump = function jumpMario() {
      engageTime = duration;
    };

    mario.jumpStop = function jumpStop() {
      engageTime = 0;
    };

    mario.update = function updateMario() {
      // console.log(mario.size);
      if (engageTime > 0) {
        mario.velocity.y -= upvelo;
        engageTime -= 1 / 25;
      }
      // mario.position.x += mario.velocity.x;
      mario.position.x += mario.velocity.x;
      mario.position.y += mario.velocity.y;
      mario.velocity.y += gravity;
    };

    return mario;
  });
}
