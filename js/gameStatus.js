function gameStatusCheck(mario, animate) {
  if (mario.dead === true) {
    sounds.die.play();
    cancelAnimationFrame(animate);
    sounds.mainMusic.pause();
    setTimeout(function() {
      life--;
      if (life < 0) {
        return gameOverScreen();
      }
      let game = new Game();
      game.init();
    }, 3000);
  }

  if (gameover === 1) {
    console.log('runn');
    sounds.mainMusic.pause();
    cancelAnimationFrame(animate);
    console.log(gameover);
  }
}

function gameOverScreen() {
  context.clearRect(0, 0, 1000, 500);
  let gameover = document.getElementById('gameover');
  context.drawImage(gameover, 0, 0, 800, 500);
  setTimeout(() => {
    let dash = document.getElementById('dashboard');
    dash.style.display = 'block';
    context.clearRect(0, 0, 1000, 500);
  }, 3000);
  life = 2;
}

function start() {
  let dash = document.getElementById('dashboard');
  console.log(dash);
  dash.style.display = 'none';
  let game = new Game();
  game.init();
}
