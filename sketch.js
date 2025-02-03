var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480);
}

function draw(){
    background('#4287f5');
    fill("blue");
    rect(x,y,10,10);
    x = x + 1;
    x = x % 500;
    y = y + 2;
    y = y % 400;
    ellipse(width/2, height/2, 100, 100);
}