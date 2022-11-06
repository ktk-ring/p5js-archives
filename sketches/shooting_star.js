let b = {};
let count = 8;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < count; i++) {
    b[i] = new Walker();
  }
  
}

function draw() {
  background(50, 0, 150, 5);
  for (let i = 0; i < count; i++) {
    b[i].move();
    b[i].show();
  }

}

class Walker {
  constructor() {
    this.pos = createVector(random(width/4*3), random(height/4*3));
    this.vel = createVector(random(5), 0);
    this.acc = createVector(0, 0.1);
    this.c = random(100,255);
    noStroke();
  }
  
  move() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }
  
  show() {
    fill(255, this.c, 100);
    ellipse(this.pos.x, this.pos.y, this.vel.y*2);
  }
}

function mouseClicked() {
  for (let i = 0; i < count; i++) {
    b[i].pos.set(random(width/4*3), random(height/4*3));
    b[i].vel.set(random(5), 0);
    b[i].acc.set(0, 0.1);
    b[i].c = random(100,255);
    }
  background(50, 0, 150);
}