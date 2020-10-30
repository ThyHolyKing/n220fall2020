var ball = { x: 100, y: 100,                            // Ball Object stuff stqarts here
    velocityX: 2, velocityY: 2,
    update: function() {
    noFill();                                           // This Block Sets up the ball as an object and defines its diffrent varrables like size shape and X,Y Velocities 
    stroke(255, 238, 130);
    circle(this.x, this.y, 10);                         
    this.x += this.velocityX;
    this.y += this.velocityY;                           // Ball Ends
    }
    };
    var paddle = {                                               // Paddle object starts
    x: 100, y: 350, w: 150, h: 20,
    update: function() {
    noFill();
    stroke(143, 251, 255);
    rect(this.x, this.y, this.w, this.h);
    if(keyIsDown(LEFT_ARROW)) {                                //This is a block of code that sets up the object for the paddle in the game, storing all the varrables that pertain to the paddle and moving it!
        
    this.x -= 2;        // A key fucntion used to controll the paddle moving Left
    }                                   
    
    if(keyIsDown(RIGHT_ARROW)) { // A key fucntion used to controll the paddle moving right
    this.x += 2;
    }
    }
    };                                                          // Paddle Ends
    
    
    var blocks = [];                        // Using varriables and array to make the blocks makes it easier to interact with them and call on them later 
    
    for(var i = 0; i < 6; i++) {                                
    blocks[i] = { x: i * 60, y: 10 };
    }
    
    function setup() {
    createCanvas(400, 400);                 // just simple setting the screen and background just under nothing too crazy here
    }
    
    function draw() {
    background(70);
    
    ball.update();
    paddle.update();
    
    if(ball.x > 400) {                                                      //this just bounces the ball off the right edge of the screen its saying if the ball would exceed 400 px right then reverse its velocity on the x axis without changing Y velocity
    ball.x = 400;
    ball.velocityX *= -1;
    }
    
    if(ball.x < 0) {                                                           //this just bounces the ball off the left edge of the screen its saying if the ball would exceed 0 px left then reverse its velocity on the x axis without changing Y velocity
    ball.x = 0;
    ball.velocityX *= -1;
    }
    
    if(ball.y < 0) {                        //Like the Left and right before the this is code saying that if the balls Y would go off the screen top wise to reverse its Y velocity in the other direction sepratly from the X 
    ball.y = 0;
    ball.velocityY *= -1;
    }
    
    if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {                //This being one of the core codes for the game, this reads the interaction with the ball and paddle and detects if there is a collesion to bounce the ball off the paddle!
    ball.velocityY *= -1;
    }
    
    for(var i = 0; i < blocks.length; i++) {
    var b = blocks[i];
    rect(b.x, b.y, 60, 20);
    
    if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {           // This being the other core element, Ditecting if a ball has been hit by the ball, by checking the hit point between the ball and blocks and then bouncing the ball back off the Y value
    ball.velocityY *= -1;
    
    //remove block from array
    blocks.splice(i, 1);
    }
    }
    
    }
    
    function hitTestPoint(px, py, bx, by, bw, bh) {                 //Using the same test to ditect block hit, but this one removes the block in question instead of bouncing the ball,
    
    if(px > bx && px < bx + bw) {
    if(py > by && py < by + bh) {
    return true;
    }
    }
    
    return false;
    }