function gameStatusCheck(mario, animate, context) {
  context.font = '40px Courier New';
  context.fillStyle = 'white';
  context.fillText('Mario', 50, 40);
  context.fillText(`${totalScore}`, 50, 90);
  context.fillText('Coin', 300, 40);
  context.fillText(`${coin}`, 300, 90);
  context.fillText('World', 500, 40);
  context.fillText('1-1', 500, 90);
  context.fillText('Time', 800, 40);
  context.fillText(`${timer}`, 800, 90);

  console.log(mario.position);

  if (mario.dead === true) {
    sounds.die.play();
    cancelAnimationFrame(animate);
    sounds.mainMusic.pause();
    setTimeout(function() {
      life--;
      if (life < 0) {
        return gameOverScreen();
      }
      context.clearRect(0, 0, 1000, 800);
      timer = 300;
      let game = new Game();
      game.init();
    }, 3000);
  }

  if (gameover === 1) {
    console.log('runn');
    sounds.mainMusic.pause();

    cancelAnimationFrame(animate);
    setTimeout(() => {
      sounds.stageClear.play();
      gameOverScreen();
    }, 3000);
    console.log(gameover);
  }

  if (timer === 0) {
    mario.dead = true;
  }
}

function gameOverScreen() {
  context.clearRect(0, 0, 1000, 500);
  let gameover = document.getElementById('gameover');
  context.drawImage(gameover, 0, 0, 1000, 500);
  setTimeout(() => {
    let dash = document.getElementById('dashboard');
    dash.style.display = 'block';
    context.clearRect(0, 0, 1000, 500);
  }, 5000);
}

function start() {
  life = 2;
  coin = 0;
  gameover = 0;
  timer = 300;
  totalScore = 0;

  let dash = document.getElementById('dashboard');
  console.log(dash);
  dash.style.display = 'none';

  let game = new Game();
  game.init();
}
