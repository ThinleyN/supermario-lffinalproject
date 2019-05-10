class EntityCollider {
  constructor(entities) {
    this.entities = entities;
  }

  check(mario) {
    this.entities.forEach(entity => {
      entity.forEach(element => {
        if (element.name === 'mario') {
          return;
        }
        //goomba collision check
        if (element.name === 'goomba' && element.dead === false) {
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
              console.log('momma forgive me', element.name);
              element.dead = true;
              setTimeout(function() {
                delete entity[element.index];
              }, 2000);
            } else {
              console.log('myniggaddead', element.name);
              console.log(mario.position.y + mario.size.y, element.position.y);
              console.log(
                mario.position.y + mario.size.y,
                element.position.y + element.size.y
              );
              window.cancelAnimationFrame();
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
              console.log('momma forgive me', element.name);
              element.dead = true;
              setTimeout(function() {
                delete entity[element.index];
                console.log(entity);
              }, 2000);
            } else {
              console.log('myniggaddead', element.name);
              // mario.position.y = mario.position.y + 50;
              mario.dead = true;
            }
          }
        }
      });
    });
  }
}
