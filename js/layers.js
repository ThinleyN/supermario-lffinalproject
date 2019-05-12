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
  buffer.width = 5000;
  buffer.height = 500;

  background.forEach(background => {
    drawBackground(background, buffer.getContext('2d'), sprites);
  });

  return function drawBackgroundLayer(context, camera) {
    context.drawImage(buffer, -camera.position.x, -camera.position.y);
  };
}

function createSpriteLayer(entities) {
  const spriteBuffer = document.createElement('canvas');
  spriteBuffer.width = 64;
  spriteBuffer.height = 64;
  const spriteBufferContext = spriteBuffer.getContext('2d');

  return function drawSpriteLayer(context, camera) {
    entities.forEach(entity => {
      entity.forEach(element => {
        element.draw(spriteBufferContext);

        context.drawImage(
          spriteBuffer,
          element.position.x - camera.position.x,
          element.position.y - camera.position.y
        );
      });
    });
  };
}

function createCollisionLayer(environment, camera) {
  const tileResolver = environment.tileCollider.tiles;
  const tileSize = tileResolver.tileSize;

  const getByIndexOriginal = tileResolver.getByIndex;

  tileResolver.getByIndex = function getByIndexFake(x, y) {
    context.strokeStyle = 'blue';
    context.beginPath();
    context.rect(
      x * tileSize - camera.position.x,
      y * tileSize - camera.position.y,
      tileSize,
      tileSize
    );
    context.stroke();

    environment.entities.forEach(entity => {
      context.strokeStyle = 'red';
      context.beginPath();
      context.rect(
        entity.position.x - camera.position.x,
        entity.position.y - camera.position.y,
        entity.size.x,
        entity.size.y
      );
      context.stroke();
    });

    return getByIndexOriginal.call(tileResolver, x, y);
  };
}
