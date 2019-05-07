function setupKeyboard(entity) {
  const input = new Keyboard();
  input.addMapping(32, keyState => {
    if (keyState) {
      entity.jump();
    } else {
      entity.jumpStop();
    }
  });
  input.addMapping(39, keyState => {
    entity.walk(keyState);
  });
  input.addMapping(37, keyState => {
    entity.walk(-keyState);
  });
  input.listenTo(window);

  return input;
}
