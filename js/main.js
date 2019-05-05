const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([createMario(), loadLevel()]).then(([mario, environment]) => {
  const input = new Keyboard();
  input.addMapping(32, keyState => {
    if (keyState) {
      mario.jump();
    } else {
      mario.jumpStop();
    }
  });
  input.listenTo(window);

  ['mousedown', 'mousemove'].forEach(eventName => {
    canvas.addEventListener(eventName, event => {
      if (event.buttons === 1) {
        mario.velocity.set(0, 0);
        mario.position.set(event.offsetX, event.offsetY);
      }
    });
  });

  createCollisionLayer(environment);
  calculateTiles(level1, environment);

  environment.entities.add(mario);
  const spriteLayer = createSpriteLayer(environment.entities);

  environment.comp.layers.push(spriteLayer);
  console.log(environment.comp);

  function update() {
    environment.comp.draw(context);

    environment.update();

    requestAnimationFrame(update);
  }
  update();
});
