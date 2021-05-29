var carBonnet,carCenter,carTrunk;
var speed,weight;
var wall,deformation;

function setup() {
  createCanvas(1600,400);

  carCenter = createSprite(100,200,50,50);
  carCenter.shapeColor = "white";

  carBonnet = createSprite(100,210,30,30);
  carBonnet.x = carCenter.x + 40;
  carBonnet.shapeColor = "white";

  carTrunk = createSprite(100,210,30,30);
  carTrunk.x = carCenter.x - 40;
  carTrunk.shapeColor = "white";

  wall = createSprite(1500,200,60,400);
  wall.shapeColor = color ("grey");

  weight = random(400,1500);

  speed = random(30,95);
  carBonnet.velocityX = speed;
  carCenter.velocityX = speed;
  carTrunk.velocityX = speed;
}

function draw() {
  background(0,0,0);

  fill("white");
  textSize(22);
  text("GLOBAL CAR SAFETY ORGANISATION",680,50);

  fill("white");
  textSize(20);
  text("bulb",1415,170);

  fill("white");
  textSize(20);
  text("Here's the calculated deformation :",980,380);

  if(wall.x - carBonnet.x < (carBonnet.width/2 + wall.width/2)){
    carBonnet.velocityX = 0;
    carCenter.velocityX = 0;
    carTrunk.velocityX = 0;
    deform();
  }
 
  drawSprites();
}

function deform(){
  deformation = (0.5 * weight * speed * speed) / 22500;

  carCenter.x = 1435;
  carBonnet.visible = false;
  carTrunk.visible = false;
  
  if(deformation<100){
    carCenter.shapeColor = color (0, 255, 0);

    if(frameCount%22 === 0){
      carCenter.visible = true;
    } 
    if(frameCount%44 === 0){
      carCenter.visible = false;
    }

    fill("green");
    textSize(20);
    text(Math.round(deformation),1300,380);
    text("{Safe}",1340,380);
  }

  if(deformation > 100 && deformation < 180){
    carCenter.shapeColor = color (230, 230, 0);
  
    if(frameCount%15=== 0){
      carCenter.visible = true;
    }
    if(frameCount%30 === 0){
      carCenter.visible = false;
    }

    fill("yellow");
    textSize(20);
    text(Math.round(deformation),1300,380);
    text("{Average}",1340,380);
  }

  if(deformation > 180){
    carCenter.shapeColor = color (255, 0, 0);
    
    if(frameCount%7 === 0){
      carCenter.visible = true;
    }
    if(frameCount%14 === 0){
      carCenter.visible = false;
    }

    fill("red");
    textSize(20);
    text(Math.round(deformation),1300,380);
    text("{Dangerous}",1340,380);
  }
}