function loadBackground() {
  return loadImage('img/tileset.png').then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.defineTile('ground', 0, 0);
    sprites.defineTile('sky', 3, 23);
    sprites.define('cloud', 8, 320, 32, 24);
    sprites.defineTile('surprise', 24, 0);
    sprites.defineTile('coin', 24, 1);
    return sprites;
  });
}

function loadMario() {
  return loadImage('img/characters.gif').then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('idle', 277, 44, 12, 16);
    return sprites;
  });
}
