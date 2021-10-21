let rectWidth = 115;
let rectHeight = 257;
function setup() {
  createCanvas(800,600);
  background(255);
  noLoop();
  // put setup code here
}

function draw() {
  //noFill();
  drawShape(rectWidth,rectHeight)
  rect(25,50,rectWidth,rectHeight+1000);
  rect(525,67,rectWidth-1000,rectHeight);
  rect(360,260,rectWidth,rectHeight*2);
  rect(480,346,rectWidth/2,rectHeight);
  
 
}

  function drawShape(rectangleWidth,rectangleHeight) {
    let xPos = random(0,width);
    let yPos = random(0,height);

    rect(xPos,yPos,rectangleWidth,rectangleHeight);
    ellipse(xPos,yPos,rectangleWidth/2);
    fill(random(0,255),random(0,255),random(0,255));


  }
  // put drawing code here
