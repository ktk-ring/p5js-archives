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