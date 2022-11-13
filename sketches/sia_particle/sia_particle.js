let emitters = [];
let img01, img02, bg;
let color = 0;

function preload() {
  img01 = loadImage("sia_particle_min.png");
  img02 = loadImage("digitalarts_particle_min.png");
  bg = loadImage("sia_background.png");
}

function setup() {
  createCanvas(displayWidth / 1.5, displayHeight / 1.5);
  noStroke();
}

function draw() {
  background(bg);

  for (let emitter of emitters) {
    emitter.emit(1);
    emitter.update();
    emitter.show();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
  if (color == 0) {
    color++;
  } else {
    color--;
  }
}

function keyPressed() {
  if (key === "Delete") {
    emitters.pop();
  }
  if (key === " ") {
    emitters.push(new Emitter(random(width), random(height)));
  }
}
