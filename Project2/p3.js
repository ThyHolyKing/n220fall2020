
let fr = 100;
let clr;
let va = 1;

function setup() {
  createCanvas(800, 600);
  background(254,254,254);
  frameRate(fr); 
  clr = color(255, 0, 0);
}

function draw() {
  background(200);
  va = va + 1;
  if (va > 200) { 
    va = 1;
  }

  fill(clr);
  ellipse(400, 250, va, va);
}