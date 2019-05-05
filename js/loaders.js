function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
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
