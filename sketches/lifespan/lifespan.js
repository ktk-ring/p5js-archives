let ball;
let cnt;

function setup() {
  createCanvas(displayWidth/2, displayHeight/2);
  ball = new Walker();
  cnt = int(12);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220, 50);
  textSize(12);
  ball.update();
  ball.display();
}

function mouseClicked() {
  cnt++;
}