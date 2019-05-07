const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([createMario(), loadLevel()]).then(([mario, environment]) => {
  const camera = new Camera();
  window.camera = camera;
  ['mousedown', 'mousemove'].forEach(eventName => {
    canvas.addEventListener(eventName, event => {
      if (event.buttons === 1) {
        mario.velocity.set(0, 0);
        mario.position.set(
          event.offsetX + camera.position.x,
          event.offsetY + camera.position.y
        );
      }
    });
  });

  const inputkeyboard = setupKeyboard(mario);

  // createCollisionLayer(environment, camera);
  calculateTiles(level1, environment);

  environment.entities.add(mario);
  const spriteLayer = createSpriteLayer(environment.entities);

  environment.comp.layers.push(spriteLayer);
  console.log(environment.comp);

  function update() {
    environment.comp.draw(context, camera);

    environment.update(camera);

    requestAnimationFrame(update);
  }
  update();
});
