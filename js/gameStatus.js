function gameStatusCheck(mario, animate, context) {
  context.font = '40px Courier New';
  context.fillStyle = 'white';
  context.fillText('Score', 50, 40);
  context.fillText(`${totalScore}`, 50, 90);
  context.fillText('Coin', 300, 40);
  context.fillText(`${coin}`, 300, 90);
  context.fillText('World', 500, 40);
  context.fillText('1-1', 500, 90);
  context.fillText('Time', 700, 40);
  context.fillText(`${timer}`, 700, 90);
  context.fillText('Mario', 850, 40);
  context.fillText(`${life}`, 850, 90);

  if (coin === 100) {
    life++;
    coin = 0;
  }

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
    sounds.mainMusic.pause();

    cancelAnimationFrame(animate);
    setTimeout(() => {
      sounds.stageClear.play();
      gameOverScreen();
    }, 3000);
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
  dash.style.display = 'none';

  setInterval(() => {
    timer--;
  }, 1000);

  let game = new Game();
  game.init();
}
