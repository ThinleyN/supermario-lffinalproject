function createMario() {
  return loadMario().then(sprites => {
    let mario = new Entity('mario');
    mario.position.set(150, 200);
    mario.velocity.set(0, 0);
    mario.size.set(14, 16);
    mario.jumpReady = false;

    var duration = 0.5;
    var upvelo = 1.7;
    var engageTime = 0;
    var speed = 2;

    mario.draw = function drawMario(context) {
      context.clearRect(0, 0, 64, 64);
      sprites.draw('idle', context, 0, 0);
    };

    mario.walk = function walkMario(dir) {
      mario.velocity.x = speed * dir;
    };

    mario.jump = function jumpMario() {
      if (mario.jumpReady === true) {
        engageTime = duration;
      }
    };

    mario.jumpStop = function jumpStop() {
      engageTime = 0;
    };

    mario.obstruct = function obstruct(side) {
      mario.jumpReady = true;
    };

    mario.update = function updateMario() {
      if (engageTime > 0) {
        mario.velocity.y -= upvelo;
        engageTime -= 1 / 25;
        mario.jumpReady = false;
      }

      //   mario.position.y += mario.velocity.y;
    };
    return mario;
  });
}