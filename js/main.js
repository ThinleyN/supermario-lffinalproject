const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
const tileset = document.getElementById('tileset');
const sounds = getSounds();

class Game {
  constructor() {
    this.arbitraryState = 0;
  }
  init() {
    Promise.all([
      createMario(),
      loadLevel(),
      createGoomba(),
      createKoopa(),
      createBloopers()
    ]).then(([mario, environment, goomba, koopa, bloopers]) => {
      const camera = new Camera();

      sounds.mainMusic.currentTime = 0.0;

      window.camera = camera;

      debug(mario);

      // createCollisionLayer(environment, camera);
      calculateTiles(level1, environment);

      environment.entities.add(goomba);
      environment.entities.add(koopa);
      environment.entities.add([mario]);
      environment.entities.add(bloopers);

      const spriteLayer = createSpriteLayer(environment.entities);

      environment.comp.layers.push(spriteLayer);

      const inputkeyboard = setupKeyboard(mario, sounds);

      function update() {
        const animate = requestAnimationFrame(update);
        environment.comp.draw(context, camera);
        environment.update(camera);

        const playPromise = sounds.mainMusic.play();
        if (playPromise !== null) {
          playPromise.catch(() => {
            return;
          });
        }

        environment.arbitrary.drawBlocks(context, camera);

        gameStatusCheck(mario, animate);
      }
      update();
    });
  }
}
