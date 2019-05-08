function loadBackground() {
  return loadImage('img/tileset.png').then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.defineTile('ground', 0, 0);
    sprites.defineTile('sky', 3, 23);
    sprites.define('cloud', 8, 320, 32, 24);
    sprites.defineTile('surprise', 24, 0);
    sprites.defineTile('coin', 24, 1);
    sprites.defineTile('brick', 1, 0);
    sprites.defineTile('pipeTopLeft', 0, 8);
    sprites.defineTile('pipeTopRight', 1, 8);
    sprites.defineTile('pipeBodyLeft', 0, 9);
    sprites.defineTile('pipeBodyRight', 1, 9);
    sprites.defineTile('cube', 0, 1);
    return sprites;
  });
}

function loadMario() {
  return loadImage('img/characters.gif').then(image => {
    const sprites = new SpriteSheet(image, 16, 20);
    sprites.define('idle', 277, 44, 12, 16);
    sprites.define('run1', 290, 44, 16, 16);
    sprites.define('run2', 303, 44, 12, 16);
    sprites.define('run3', 315, 44, 12, 16);
    sprites.define('goomba', 296, 187, 16, 16);
    sprites.define('koopa', 296, 207, 16, 24);

    return sprites;
  });
}
