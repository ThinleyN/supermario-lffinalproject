class EntityCollider {
  constructor(entities) {
    this.entities = entities;
  }

  check(mario) {
    this.entities.forEach(entity => {
      entity.forEach(element => {
        if (mario.position.y > 460) {
          mario.dead = true;
        }
        if (element.name === 'mario') {
          return;
        }
        //goomba & bloopers collision check
        if (
          (element.name === 'goomba' && element.dead === false) ||
          (element.name === 'bloopers' && element.dead === false) ||
          (element.name === 'rocket' && element.dead === false)
        ) {
          if (
            Math.abs(mario.position.x - element.position.x) < element.size.x &&
            Math.abs(mario.position.y - element.position.y) < element.size.y
          ) {
            //goomba kill collision
            if (
              mario.position.y + mario.size.y > element.position.y &&
              mario.position.y + mario.size.y <
                element.position.y + element.size.y
            ) {
              element.dead = true;
              totalScore += 300;
              sounds.stomp.play();
              if (element.name === 'rocket') {
                element.velocity.y = 0;
              }
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
              element.size.x - 6 &&
            Math.abs(mario.position.y - element.position.y) < element.size.y - 6
          ) {
            if (
              mario.position.y + mario.size.y + 6 > element.position.y &&
              mario.position.y + mario.size.y + 6 <
                element.position.y + element.size.y
            ) {
              sounds.stomp.play();
              totalScore += 300;
              element.dead = true;
              setTimeout(function() {
                delete entity[element.index];
                console.log(entity);
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
