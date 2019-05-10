function setupKeyboard(mario) {
  const input = new Keyboard();
  input.addMapping(32, keyState => {
    if (keyState) {
      mario.jump();
    } else {
      mario.jumpStop();
    }
  });
  input.addMapping(39, keyState => {
    mario.walk(keyState);
  });
  input.addMapping(37, keyState => {
    mario.walk(-keyState);
  });
  input.listenTo(window);

  return input;
}
