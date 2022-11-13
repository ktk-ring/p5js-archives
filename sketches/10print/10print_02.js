let tileCount = 20;
let actRandomSeed = 0;

let actStrokeCap;
let color;

function setup() {
  createCanvas(600, 600);

  actStrokeCap = ROUND;
}

function draw() {
  clear();
  strokeCap(actStrokeCap);

  randomSeed(actRandomSeed);
  noFill();

  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {

      let posX = width / tileCount * gridX;
      let posY = height / tileCount * gridY;

      let toggle = int(random(0, 2));

      if (toggle == 0) {
        color = random(-mouseX, mouseY);
        stroke(200, color, 255-color);
        strokeWeight(mouseX / 50 + 5);
        circle(posX + width / tileCount, posY + height / tileCount, 10);
      }
      if (toggle == 1) {
        color = random(-mouseY, mouseX);
        stroke(255-color, 0, color);
        strokeWeight(mouseY / 50 + 5);
        rect(posY + width / tileCount, posX + height / tileCount, 10, 10);
      }
    }
  }
}

function mouseClicked() {
  actRandomSeed = random(100000);
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}
