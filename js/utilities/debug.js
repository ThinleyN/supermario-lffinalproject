function debug(mario) {
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
}
