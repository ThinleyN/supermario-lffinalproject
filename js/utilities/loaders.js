function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
      resolve(image);
    });
  });
}

function loadLevel() {
  return Promise.all([loadBackground()]).then(([backgroundSprites]) => {
    const environment = new Environment();

    const backgroundLayer = createBackgroundLayer(
      level1.background,
      backgroundSprites
    );
    environment.comp.layers.push(backgroundLayer);

    const spriteLayer = createSpriteLayer(environment.entities);

    environment.comp.layers.push(spriteLayer);

    return environment;
  });
}

function getSounds() {
  const mainMusic = document.getElementById('main');
  const jumpSound = document.getElementById('jump');
  const stompSound = document.getElementById('stomp');
  const marioDie = document.getElementById('die');
  const coin = document.getElementById('coin');
  const bump = document.getElementById('bump');
  const pole = document.getElementById('flagpole');
  const stageClear = document.getElementById('stage_clear');

  const sounds = {
    mainMusic: mainMusic,
    jump: jumpSound,
    stomp: stompSound,
    die: marioDie,
    coin: coin,
    bump: bump,
    pole: pole,
    stageClear: stageClear
  };

  return sounds;
}

function calculateTiles(level1, environment) {
  level1.background.forEach(background => {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
      for (let x = x1; x < x2; ++x) {
        for (let y = y1; y < y2; ++y) {
          environment.tiles.set(x, y, background.tile);
        }
      }
    });
  });
}
