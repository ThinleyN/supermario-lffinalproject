class EntityCollider {
  constructor(entities) {
    this.entities = entities;
  }

  check(mario) {
    this.entities.forEach(entity => {
      entity.forEach(element => {
        if (mario.position.y > HIGHEST_Y_POSITION) {
          mario.dead = true;
        }
        if (element.name === 'mario') {
          return;
        }
        //goomba bloopers & rocket collision check
        if (
          (element.name === 'goomba' && element.dead === false) ||
          (element.name === 'bloopers' && element.dead === false) ||
          (element.name === 'rocket' && element.dead === false)
        ) {
          if (
            Math.abs(mario.position.x - element.position.x) < element.size.x &&
            Math.abs(mario.position.y - element.position.y) < element.size.y
          ) {
            //goomba bloopers & rocket kill collision
            if (
              mario.position.y + mario.size.y > element.position.y &&
              mario.position.y + mario.size.y <
                element.position.y + element.size.y
            ) {
              element.dead = true;
              totalScore += ENEMY_KILL_SCORE;
              sounds.stomp.play();
              setTimeout(function() {
                delete entity[element.index];
              }, 3000);
            } else {
              mario.dead = true;
            }
          }
        }
        //koopa collision check
        if (element.name === 'koopa' && element.dead === false) {
          if (
            Math.abs(mario.position.x - element.position.x) <
              element.size.x - MARIO_KOOPA_PIX_DIFFERENCE &&
            Math.abs(mario.position.y - element.position.y) <
              element.size.y - MARIO_KOOPA_PIX_DIFFERENCE
          ) {
            //koopa kill check
            if (
              mario.position.y + mario.size.y + MARIO_KOOPA_PIX_DIFFERENCE >
                element.position.y &&
              mario.position.y + mario.size.y + MARIO_KOOPA_PIX_DIFFERENCE <
                element.position.y + element.size.y
            ) {
              sounds.stomp.play();
              totalScore += ENEMY_KILL_SCORE;
              element.dead = true;
              setTimeout(function() {
                delete entity[element.index];
              }, 3000);
            } else {
              mario.dead = true;
            }
          }
        }
      });
    });
  }
}
