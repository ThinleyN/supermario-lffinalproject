function createRocket() {
  return loadMario().then(sprites => {
    const rocket = [];

    for (i = 0; i < 3; i++) {
      rocket[i] = new Entity('rocket', i);

      rocket[i].size.set(16, 16);
      rocket[i].velocity.y = 0.9;

      rocket[i].draw = function drawrocket(context) {
        context.clearRect(0, 0, 64, 64);
        sprites.draw('rocket', context, 0, 0);
      };

      rocket[i].obstruct = function obstruct(side) {
        if (side === 'left' || side === 'right') {
          this.speed = -this.speed;
        }
      };

      rocket[i].update = function updaterocket() {
        if (this.dead === false) {
          this.velocity.x -= this.speed;
          this.velocity.x = -ENEMY_TOPSPEED - 1;
          this.distaceTravelled += ENEMY_TOPSPEED + 1;
        } else {
          this.velocity.x = 0;
        }

        if (this.distaceTravelled > 950) {
          this.position.set(this.initialPosition.x, this.initialPosition.y);
          this.distaceTravelled = 0;
        }
      };
    }

    for (i = 0; i < rocket.length; i++) {
      rocket[i].position.set(sequence[i].x, sequence[i].y);
      rocket[i].initialPosition.set(sequence[i].x, sequence[i].y);
    }

    return rocket;
  });
}
