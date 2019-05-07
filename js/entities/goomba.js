function createGoomba() {
  return loadMario().then(sprites => {
    const goomba = new Entity('goomba');
    goomba.position.set(150, 200);
    goomba.size.set(16, 16);

    var speed = 0.02;

    goomba.draw = function drawgoomba(context) {
      context.clearRect(0, 0, 64, 64);
      sprites.draw('goomba', context, 0, 0);
    };

    goomba.obstruct = function obstruct(side) {
      // speed = -spee
    };

    goomba.update = function updategoomba() {
      goomba.velocity.x += speed;
      if (goomba.velocity.x > 0.6) {
        goomba.velocity.x = 0.6;
      }
    };
    return goomba;
  });
}
