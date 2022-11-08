let ball = [];
let ball_amount = 25;    // 공의 수량

function setup() {
  createCanvas(displayWidth, displayHeight-300);
  textSize(18);
  textAlign(CENTER, CENTER);
  strokeWeight(5);

  for (let i = 0; i < ball_amount; i++) {
    ball[i] = new Particle();
  }
}

function draw() {
  background(225, 35);

  let wind = createVector((mouseX-width/2) / 5000, (mouseY-height/2) / 5000);
  let center = createVector(width/2, height/2);
  let arrow = createVector(mouseX-width/2, mouseY-height/2);
  arrow.div(2);
  
  fill('blue');
  drawArrow(center, arrow.limit(100), 'blue');
  text("바람의 방향", width/2, height/2+18);
  
  for (let i = 0; i < ball_amount; i++) {
    ball[i].addForce(wind);
    ball[i].update();
    ball[i].show();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.acc = createVector(0, 0);

    this.c = color(0);
    this.w = 10;
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    
    this.vel.limit(25);
  }

  checkEdge() {
    if (this.pos.x < - this.w / 2) {
      this.pos.x = width + this.w / 2;
    }
    if (this.pos.x > width + this.w / 2) {
      this.pos.x = -this.w / 2;
    }
    if (this.pos.y < - this.w / 2) {
      this.pos.y = height + this.w / 2;
    }
    if (this.pos.y > height + this.w / 2) {
      this.pos.y = -this.w / 2;
    }
  }

  show() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}