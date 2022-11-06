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


// new way to define Object
class Walker {
  //setup values
  constructor() {
  	this.y = height/3;
  	this.w = 1;
  }
  
  update() {
    //update position
  	this.x = random(width);
  	this.y = height/4 + mouseY/9;
    this.w = random(10);
  }
  
  display() {
    //display walker
    fill(0);
    stroke(255, random(100), random(100));
    strokeWeight(this.w);
	line(this.x, 0, this.x, height);
  }
}

function mouseClicked() {
  //update position
  obj.x = random(width);
  obj.y = height/4 + mouseY/9;
  obj.w = random(10);
  background(10, 10, 10);
}