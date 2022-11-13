let obj;

function setup() {
  createCanvas(960, 540);
  obj = new Walker();
}


function draw() {
  
  background(10, 10, 10, 5);
  fill(255);
  
  obj.update();
  obj.display();
  
}


class Walker {
  constructor() {
  	this.y = height/3;
  	this.w = 1;
  }
  
  update() {
  	this.x = random(width);
  	this.y = height/4 + mouseY/9;
    this.w = random(10);
  }
  
  display() {
    fill(0);
    stroke(255, random(100), random(100));
    strokeWeight(this.w);
	line(this.x, 0, this.x, height);
  }
}

function mouseClicked() {
  obj.x = random(width);
  obj.y = height/4 + mouseY/9;
  obj.w = random(10);
  background(10, 10, 10);
}