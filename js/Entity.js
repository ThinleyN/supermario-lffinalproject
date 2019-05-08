class Entity {
  constructor(name) {
    this.position = new Vector(0, 0);
    this.velocity = new Vector(0, 0);
    this.size = new Vector(0, 0);
    this.jumpReady = true;
    this.speed = 0.02;
    this.name = name;
  }
}
