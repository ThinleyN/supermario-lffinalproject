function createMario() {
  return loadMario().then(sprites => {
    const mario = [];
    for (i = 0; i < 1; i++) {
      mario[i] = new Entity('mario');
      mario[i].position.set(10, 10);
      mario[i].velocity.set(0, 0);
      mario[i].size.set(14, 16);
      mario[i].jumpReady = false;

      var duration = 0.5;
      var upvelo = 1.7;
      var engageTime = 0;
      var speed = 2;

      mario[i].draw = function drawMario(context) {
        context.clearRect(0, 0, 64, 64);
        sprites.draw('idle', context, 0, 0);
      };

      mario[i].walk = function walkMario(dir) {
        this.velocity.x = speed * dir;
      };

      mario[i].jump = function jumpMario() {
        if (this.jumpReady === true) {
          engageTime = duration;
        }
      };

      mario[i].jumpStop = function jumpStop() {
        engageTime = 0;
      };

      mario[i].obstruct = function obstruct(side, match) {
        this.jumpReady = true;
      };

      mario[i].update = function updateMario() {
        if (engageTime > 0) {
          this.velocity.y -= upvelo;
          engageTime -= 1 / 25;
          this.jumpReady = false;
        }
      };

      //   mario[i].position.y += mario[i].velocity.y;
    }
    return mario;
  });
}
