function setup() {
    createCanvas(400, 300);
  }
  function draw() {
    background(254,254,254);
    ellipse(mouseX, mouseY, 45, 45);
    if (mouseX<200)
    {fill(0, 0, 254)}
    else 
    {fill (254,0,0)}
  }