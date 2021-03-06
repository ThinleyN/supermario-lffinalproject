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
      createBloopers(),
      createRocket()
    ]).then(([mario, environment, goomba, koopa, bloopers, rocket]) => {
      const camera = new Camera();

      sounds.mainMusic.currentTime = 0.0;

      debug(mario);
      window.yeahh = camera;

      calculateTiles(level1, environment);

      environment.entities.add(goomba);
      environment.entities.add(koopa);
      environment.entities.add(bloopers);
      environment.entities.add(rocket);
      environment.entities.add([mario]);

      const spriteLayer = createSpriteLayer(environment.entities);

      environment.comp.layers.push(spriteLayer);

      const inputkeyboard = setupKeyboard(mario, sounds);

      function update() {
        context.clearRect(0, 0, 1000, 1000);
        const animate = requestAnimationFrame(update);
        environment.comp.draw(context, camera);
        environment.arbitrary.drawBlocks(context, camera);
        environment.update(camera);

        sounds.mainMusic.play();
        // console.log(playPromise);
        // if (playPromise !== null) {
        //   playPromise.catch(() => {
        //     return;
        //   });
        // }

        gameStatusCheck(mario, animate, context);
      }
      update();
    });
  }
}
