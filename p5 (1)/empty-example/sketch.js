let rectWidth = 45;
let rectHeight = 90;
function setup() {
  createCanvas(800,600);
  background(255);
  // put setup code here
}

function draw() {
  text("Hello World!",0,50);
  ellipse(50,50,40,40);
  line(0,50,400,70);
  triangle(347,54,392,9,392,66);
  quad(158,55,199,14,392,66,351,197);
  rect(60,80,rectWidth,rectHeight);
  arc(300,300,50,50,90,270);
  // put drawing code here
}