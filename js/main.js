const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
const mainAudio = document.getElementById('main');

const tileset = document.getElementById('tileset');

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
      getSounds()
    ]).then(([mario, environment, goomba, koopa, sounds]) => {
      const camera = new Camera();

      sounds.mainMusic.currentTime = 0.0;

      window.camera = camera;
      ['mousedown'].forEach(eventName => {
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

      // createCollisionLayer(environment, camera);
      calculateTiles(level1, environment);

      environment.entities.add(goomba);
      environment.entities.add(koopa);
      environment.entities.add([mario]);

      const spriteLayer = createSpriteLayer(environment.entities);

      environment.comp.layers.push(spriteLayer);

      const inputkeyboard = setupKeyboard(mario);

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

        if (mario.dead === true) {
          cancelAnimationFrame(animate);

          mainAudio.pause();

          setTimeout(function() {
            life--;
            if (life < 0) {
              return gameOverScreen();
            }
            let game = new Game();
            game.init();
          }, 2000);
        }
      }
      update();
    });
  }
}
