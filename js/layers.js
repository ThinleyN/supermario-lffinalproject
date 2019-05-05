function drawBackground(background, context, sprites) {
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; ++x) {
      for (let y = y1; y < y2; ++y) {
        sprites.drawTile(background.tile, context, x, y);
      }
    }
  });
}

function createBackgroundLayer(background, sprites) {
  const buffer = document.createElement('canvas');
  buffer.width = 480;
  buffer.height = 480;

  background.forEach(background => {
    drawBackground(background, buffer.getContext('2d'), sprites);
  });

  return function drawBackgroundLayer(context) {
    context.drawImage(buffer, 0, 0);
  };
}

function createSpriteLayer(entities) {
  return function drawSpriteLayer(context) {
    entities.forEach(entity => {
      entity.draw(context);
    });
  };
}

function createCollisionLayer(environment) {
  const tileResolver = environment.tileCollider.tiles;
  const tileSize = tileResolver.tileSize;
  console.log(tileResolver);

  const getByIndexOriginal = tileResolver.getByIndex;

  tileResolver.getByIndex = function getByIndexFake(x, y) {
    context.strokeStyle = 'blue';
    context.beginPath();
    context.rect(x * tileSize, y * tileSize, tileSize, tileSize);
    context.stroke();

    environment.entities.forEach(entity => {
      context.strokeStyle = 'red';
      context.beginPath();
      context.rect(
        entity.position.x,
        entity.position.y,
        entity.size.x,
        entity.size.y
      );
      context.stroke();
    });

    return getByIndexOriginal.call(tileResolver, x, y);
  };
}
