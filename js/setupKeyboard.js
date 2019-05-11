function setupKeyboard(mario, sounds) {
  const input = new Keyboard();
  input.addMapping(32, keyState => {
    if (keyState) {
      mario.jump();
      sounds.jump.currentTime = 0.0;
      sounds.jump.play();
    } else {
      mario.jumpStop();
      sounds.jump.pause();
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
