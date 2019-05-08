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

        if (
          Math.abs(mario.position.x - element.position.x) < element.size.x &&
          Math.abs(mario.position.y - element.position.y) < element.size.y
        ) {
          if (
            mario.position.y + mario.size.y > element.position.y &&
            mario.position.y + mario.size.y <
              element.position.y + element.size.y
          ) {
            console.log('momma forgive me', element.name);
            window.cancelAnimationFrame();
          } else {
            console.log('myniggaddead', element.name);
            window.cancelAnimationFrame();
          }
          // debugger;
        }
      });
    });
  }
}
