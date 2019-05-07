function createMario() {
  return loadMario().then(sprites => {
    let mario = new Entity();
    mario.position.set(60, 200);
    mario.velocity.set(0, 0);
    mario.size.set(14, 16);

    // var gravity = 1;
    var duration = 0.5;
    var upvelo = 1.7;
    var engageTime = 0;
    // var dir = 0;
    var speed = 2;
    var idle = 1;

    mario.draw = function drawMario(context) {
      sprites.draw('idle', context, 0, 0);
    };

    mario.walk = function walkMario(dir) {
      mario.velocity.x = speed * dir;
      idle = 0;
    };

    mario.jump = function jumpMario() {
      engageTime = duration;
    };

    mario.jumpStop = function jumpStop() {
      engageTime = 0;
    };

    mario.update = function updateMario() {
      if (engageTime > 0) {
        mario.velocity.y -= upvelo;
        engageTime -= 1 / 25;
      }
    };

    return mario;
  });
}
