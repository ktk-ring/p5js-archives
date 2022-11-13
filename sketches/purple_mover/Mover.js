class Mover extends p5.Vector {
  constructor(x, y, r) {
    super(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.r = r;
  }

  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.r * 2);
    this.acc.add(f);
  }

  checkEdge() {
    if (this.x <= this.r) {
      this.x = this.r;
      this.vel.x *= -0.9;
      this.acc.x *= -0.9;
    }
    if (this.x >= width - this.r) {
      this.x = width - this.r;
      this.vel.x *= -0.9;
      this.acc.x *= -0.9;
    }
    if (this.y <= this.r) {
      this.y = this.r;
      this.vel.y *= -0.9;
      this.acc.y *= -0.9;
    }
    if (this.y >= height - this.r) {
      this.y = height - this.r;
      this.vel.y *= -0.9;
      this.acc.y *= -0.9;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill(this.r * 10, 0, 255);
    circle(this.x, this.y, this.r * 2);
  }
}

class Cube extends Mover {
  show() {
    fill(255, 0, this.r * 10);
    square(this.x, this.y, this.r * 2);
  }
}