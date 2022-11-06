// https://10print.org/

let x, y;
x = 0;
y = 20;

let l = 0;
let w = 50;
let p = 0.5;

let color = 0;

function setup() {
  createCanvas(1080, 1080);
  background(80);
  stroke(255, 0, 255);
  strokeWeight(20);
}

function draw() {
  if (random() > p && y < height -40) {
    if (l == 0) {
      stroke(50);
      line(x+w/2-10, y+15, x+w-10, y+w/2+15);
      stroke((x + y)/5, color, 255);
      line(x+w/2-10, y, x+w-10, y+w/2);
      x = x + w;
      stroke(50);
      line(x+w/2-10, y+15, x-10, y+w/2+15);
      stroke((x + y)/5, color, 255);
      line(x+w/2-10, y, x-10, y+w/2);
      l = 1;
    }
  } else {
    if (l == 1) {
      l = 0;
    }
  }
  
  if (color <= 255) {
    color = 255 - (color + x + y)/10
  } else if (color >= 0) {
    color = (color - x - y)/10
  }

  x = x + w;
  
  if (x > width-80) {
    y = y + w;
    x = 10;  
  }
}

function mouseClicked(){
  x = 0;
  y = 20;

  l = 0;
  w = 50;
  p = 0.5;

  color = 0;
  background(80);
}