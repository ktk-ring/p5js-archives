let d;
let color;

function setup() {
  createCanvas(1000, 1000);
  fill(255);
  strokeWeight(10);
  randomSeed(1);
}

function draw() {
  background(240);
  randomSeed(mouseX*mouseY);
  
  d = 30;
  
  // circle(20, 20, d);
  
  // for (let i=0; i<10; i++) {
  //   circle(40*i+20, 20, d); // x: 20, 60, 100, 140, ...
  // }
  
  for (let i=0; i<25; i++) {
    for (let j=0; j<25; j++) {
      stroke(255-(i+1)/(j+1), i*10, j*10);
      circle(40*i+20+random(-5,5), 40*j+20+random(-5, 5), d); // y: 20, 60, 100, ...
    }
  }
  
}