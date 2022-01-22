var ship , ship_moving; sea_moving

function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png",)
sea_flowing = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 
 sea = createSprite(200,180,400,20);
 sea.addImage("flowing",sea_flowing);
 sea.scale=0.3;
 ship = createSprite(50,160,100,200)
 ship.addAnimation("moving",ship_moving);
 ship.scale=0.4
 ship.x=200
}

function draw() {
  background("cyan");
  drawSprites();
}
