let circle = {
    x:200,
    y:200,
    dia:200,
    hight:200,
    clr1:255,
    clr2:150,
    clr3:100,
};

function setup() {
  createCanvas(800, 600);
  background(254,254,254); 
};

function draw() {
  background(200);
  fill(circle.clr1, circle.clr2, circle.clr3);
  ellipse(circle.x, circle.y, circle.dia,circle.hight);
};