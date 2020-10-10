
let fr = 100;
let clr;


let circle = {
    x:0,
    y:70,
    dia:70
};

function setup() {
  createCanvas(800, 600);
  background(254,254,254);
  frameRate(fr); 
  clr = color(255, 110, 0);
}

function draw() {
  background(200);
  circle.x = circle.x += 1;
  circle.y = circle.y += 1;
  
  if (circle.x > 865) { 
    circle.x = 0;
  }
  if (circle.y > 665) { 
    circle.y = 0;
  }


  fill(clr);
  ellipse(circle.x, circle.y, circle.dia, 70);
}