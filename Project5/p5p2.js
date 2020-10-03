let circle_x;
let circle_y; 
let circle_xspeed = -2;
let circle_yspeed = 2; 
let circle_radius = 30;

let rect_width = 400;
let rect_height = 50; 

let rect_x = -400; 
let rect_y = 600; 
let rect_xspeed = 2;

function setup() { 
  createCanvas(800, 700);
  circle_x = width - 2*circle_radius;  
  circle_y = 2*circle_radius;
} 
function draw() { 
  background(255);
  ellipse(circle_x, circle_y, 2*circle_radius, 2*circle_radius); 
  circle_x += circle_xspeed; 
  circle_y += circle_yspeed; 
  rect(rect_x,rect_y, rect_width, rect_height);
  if(rect_x > width) {  
    rect_x = -rect_width;
  }
  rect_x += rect_xspeed;
  if(collideRect( circle_x, circle_y, rect_x, rect_y, rect_width, rect_height)) circle_yspeed = -circle_yspeed;
}
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {
  var colliding = false;
  if(circleX + circle_radius > rectX && circleX + circle_radius  < rectX + rectW) {
  if(circleY + circle_radius  > rectY && circleY + circle_radius  < rectY + rectH) {
  return true;
  }
  }
  return false;
}