var bullet, bullet2, bullet3, bullet4;
var wall, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9;
var speed, wheight, thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(1450, 50, 30, 30);
  bullet2 = createSprite(1450, 150, 30, 30);
  bullet3 = createSprite(1450, 250, 30, 30);
  bullet4 = createSprite(1450, 350, 30, 30);

  wall = createSprite(1500, 50, 30, 70);
  wall2 = createSprite(1500, 150, 30, 70);
  wall3 = createSprite(1500, 250, 30, 70);
  wall4 = createSprite(1500, 350, 30, 70);
  wall5 = createSprite(800, 100, 1600, 10);
  wall6 = createSprite(800, 200, 1600, 10);
  wall7 = createSprite(800, 300, 1600, 10);
  wall8 = createSprite(0, 200, 10, 400);
  wall9 = createSprite(1600, 200, 10, 400);

  speed = random(233,321);
  weight = random(30,52);
  thickness = random(22, 83);

}

function draw() {
  background(0);  
   
  bullet.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
  bullet4.velocityX = speed;

  bullet.shapeColor = "white";
  bullet2.shapeColor = "white";
  bullet3.shapeColor = "white";
  bullet4.shapeColor = "white";

  wall.shapeColor = "blue";
  wall2.shapeColor = "blue";
  wall3.shapeColor = "blue";
  wall4.shapeColor = "blue";
  wall5.shapeColor = "white";
  wall6.shapeColor = "white";
  wall7.shapeColor = "white";
  wall8.shapeColor = 'white';
  wall9.shapeColor = "white";

  bullet.bounceOff(wall8);
  bullet2.bounceOff(wall8);
  bullet3.bounceOff(wall8);
  bullet4.bounceOff(wall8);
  bullet.bounceOff(wall9);
  bullet2.bounceOff(wall9);
  bullet3.bounceOff(wall9);
  bullet4.bounceOff(wall9);

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    bullet2.velocityX = 0;
    bullet3.velocityX = 0;
    bullet4.velocityX = 0;

    var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }

  bullet2RightEdge = bullet2.x + bullet2.width;
  wall2LeftEdge = wall2.x;

  if(bullet2RightEdge >= wall2LeftEdge){
    return true;
  }
  else{
    return false;
  }

  bullet3RightEdge = bullet3.x + bullet3.width;
  wall3LeftEdge = wall3.x;

  if(bullet3RightEdge >= wall3LeftEdge){
    return true;
  }
  else{
    return false;
  }

  bullet4RightEdge = bullet4.x + bullet4.width;
  wall4LeftEdge = wall4.x;

  if(bullet4RightEdge >= wall4LeftEdge){
    return true;
  }
  else{
    return false;
  }
}