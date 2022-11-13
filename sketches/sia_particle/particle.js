class Particle extends p5.Vector {
  constructor(x, y) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(5, 5));
    this.acc = createVector(0, 0);
    this.lifespan = 255;
  }

  force(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);

    this.lifespan -= 5;
  }

  show() {
    push();
    tint(255, this.lifespan);
    imageMode(CENTER);
    image(img01, this.x , this.y, this.lifespan/2, this.lifespan/2);
    pop();
  }
}

class White extends Particle {
  show() {
    push();
    tint(255, this.lifespan);
    imageMode(CENTER);
    image(img02, this.x , this.y, this.lifespan/2, this.lifespan/2);
    pop();
  }
}