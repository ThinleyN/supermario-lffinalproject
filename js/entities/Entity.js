class Entity {
  constructor(name, index) {
    this.position = new Vector(0, 0);
    this.velocity = new Vector(0, 0);
    this.size = new Vector(0, 0);
    this.jumpReady = true;
    this.speed = 0.02;
    this.name = name;
    this.index = index;
    this.dead = false;
    this.spriteIndex = 0;
    this.animate = 0;
  }
}
