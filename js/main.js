const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const tileset = document.getElementById('tileset');

const arbitrarybuffer = document.createElement('canvas');

tileset.style.display = 'none';

Promise.all([createMario(), loadLevel(), createGoomba(), createKoopa()]).then(
  ([mario, environment, goomba, koopa]) => {
    const camera = new Camera();
    window.camera = camera;
    ['mousedown', 'mousemove'].forEach(eventName => {
      canvas.addEventListener(eventName, event => {
        if (event.buttons === 1) {
          mario[0].velocity.set(0, 0);
          mario[0].position.set(
            event.offsetX + camera.position.x,
            event.offsetY + camera.position.y
          );
        }
      });
    });

    const inputkeyboard = setupKeyboard(mario);

    // createCollisionLayer(environment, camera);
    calculateTiles(level1, environment);

    environment.entities.add(goomba);
    environment.entities.add(koopa);
    environment.entities.add(mario);

    const spriteLayer = createSpriteLayer(environment.entities);

    environment.comp.layers.push(spriteLayer);

    function update() {
      environment.comp.draw(context, camera);

      environment.update(camera);

      context.drawImage(
        arbitrarybuffer,
        -camera.position.x,
        -camera.position.y
      );

      requestAnimationFrame(update);
    }
    update();
  }
);
