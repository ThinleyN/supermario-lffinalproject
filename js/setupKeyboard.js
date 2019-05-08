function setupKeyboard(mario) {
  const input = new Keyboard();
  input.addMapping(32, keyState => {
    if (keyState) {
      mario[0].jump();
    } else {
      mario[0].jumpStop();
    }
  });
  input.addMapping(39, keyState => {
    mario[0].walk(keyState);
  });
  input.addMapping(37, keyState => {
    mario[0].walk(-keyState);
  });
  input.listenTo(window);

  return input;
}
