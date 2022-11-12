let m = [];
let force = [];
let count = 500;

function setup() {
  createCanvas(displayWidth, displayHeight - 300);
  noStroke();

  for (let i = 1; i <= count; i++) {
    let r = random(5, 25);
    m[i] = new Mover(random(r, width - r), random(r, height - r), r);
    // m[i] = new Mover(width / 2, height / 2, r);
  }
}

function draw() {
  background(220, 95);

  let mouse = createVector(mouseX, mouseY);

  for (let i = 1; i <= count; i++) {
    m[i].update();
    m[i].show();
    m[i].checkEdge();

    if (mouseIsPressed) {
      force[i] = createVector(0, 0);
      force[i] = mouse.copy();
      force[i].sub(m[i].pos);
      force[i].mult(0.005);
      m[i].applyForce(force[i]);
    }
  }
}

function keyPressed() {
  for (let i = 1; i <= count; i++) {
    m[i].vel.set(0, 0);
  }
}

class Mover {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.r = r;
  }

  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.r*2);
    this.acc.add(f);
  }

  checkEdge() {
    if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -0.9;
      this.acc.x *= -0.9;
    }
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -0.9;
      this.acc.x *= -0.9;
    }
    if (this.pos.y <= this.r) {
      this.pos.y = this.r;
      this.vel.y *= -0.9;
      this.acc.y *= -0.9;
    }
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -0.9;
      this.acc.y *= -0.9;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill(this.r*10,0,255);
    circle(this.pos.x, this.pos.y, this.r*2);
  }
}
