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
    sprites.defineTile('flaghead', 16, 8);
    sprites.defineTile('flagbody', 16, 9);
    return sprites;
  });
}

function loadMario() {
  return loadImage('img/characters.gif').then(image => {
    const sprites = new SpriteSheet(image, 16, 24);
    sprites.define('idle', 277, 44, 12, 16);
    sprites.define('run0', 289, 44, 15, 16);
    sprites.define('run1', 304, 44, 15, 16);
    sprites.define('run2', 323, 44, 15, 16);
    sprites.define('backrun0', 208, 44, 15, 16);
    sprites.define('backrun1', 192, 44, 15, 16);
    sprites.define('backrun2', 176, 44, 15, 16);
    sprites.define('dead', 484, 44, 15, 16);
    sprites.define('goomba0', 296, 187, 16, 16);
    sprites.define('goomba1', 315, 187, 16, 16);
    sprites.define('goomba2', 278, 187, 16, 16);
    sprites.define('koopa0', 296, 207, 16, 22);
    sprites.define('koopa1', 312, 207, 16, 22);
    sprites.define('koopa2', 203, 207, 16, 22);
    sprites.define('koopa3', 185, 207, 16, 22);
    sprites.define('koopa4', 144, 207, 16, 22);
    sprites.define('bloopers0', 295, 314, 16, 16);
    sprites.define('bloopers1', 314, 314, 16, 16);
    sprites.define('bloopers2', 200, 314, 16, 16);
    sprites.define('bloopers3', 180, 314, 16, 16);
    sprites.define('bloopers4', 218, 314, 16, 16);
    return sprites;
  });
}
