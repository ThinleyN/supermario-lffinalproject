function createKoopa() {
  return loadMario().then(sprites => {
    const koopa = new Entity('koopa');
    koopa.position.set(50, 200);
    koopa.size.set(16, 16);

    koopa.draw = function drawkoopa(context) {
      context.clearRect(0, 0, 64, 64);
      sprites.draw('koopa', context, 0, 0);
    };

    koopa.obstruct = function obstruct(side) {
      koopa.jumpReady = true;
    };

    koopa.update = function updatekoopa() {
      koopa.velocity.x += 0.02;
      if (koopa.velocity.x > 0.6) {
        koopa.velocity.x = 0.6;
      }
    };
    return koopa;
  });
}
