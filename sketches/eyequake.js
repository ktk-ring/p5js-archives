let ball;

function setup() {
  createCanvas(540, 540); 
  ball = new Walker();
  
}


function draw() {
  
  background(150, 255, 150);
  fill(255);
  ellipse(width/2, height/3, width/1.5, height/2);
  fill(255, 0, 0);
  ellipse(width/2, height/5*4, width/3, height/7);
  
  ball.update(mouseX/10);
  ball.display();
  
}


// new way to define Object
class Walker {
  //setup values
  constructor() {
  	this.y = height/3;
  	this.w = 125;
  }
  
  update(power) {
    //update position
  	this.x = random(width/2 - power, width/2 + power);
  	this.y = height/4 + mouseY/9;
  }
  
  display() {
    //display walker
    fill(0);
	ellipse(this.x, this.y, this.w, this.w*1.25);
  }
}