var fixedRect, movingRect;
var car , wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(200 , 150 , 50 ,50);
  car.shapeColor = "blue";
  car.debug = true;
  car.velocityX = 5;
  wall = createSprite(900 , 150 , 50 ,200 );
  wall.shapeColor = "brown";
  wall.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (bounceoff(car , wall)){
    textSize(30);
    fill("red");
    text("touched"  , 200 , 200);
    console.log("touched");
  }else{
    textSize(30);
    fill("white");
    text("not touched", 500 , 500);
  }
  drawSprites();

}

function bounceoff(x1 , x2){
  if (x1.x - x2.x < x2.width/2 + x1.width/2
     && x2.x - x1.x < x2.width/2 + x1.width/2){
       x1.velocityX = (-1)*x1.velocityX;
     }
     else if ( x1.y - x2.y < x2.height/2 + x1.height/2
     && x2.y - x1.y < x2.height/2 + x1.height/2) {
       x1.velocityY = (-1)*x1.velocityY;

   }

}
function istouching(p1 , p2){
  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
    return true;
}
else {
  return false;
}
}