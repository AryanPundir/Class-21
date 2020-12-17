var fixedRect,movingRect,obj1,obj2,obj3;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600,200,50,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  obj1=createSprite(100,200,50,50);
  obj1.shapeColor="white";

  obj2=createSprite(200,200,50,50);
  obj2.shapeColor="white";

  obj3=createSprite(300,200,50,50);
  obj3.shapeColor="white";

// }


    
// function draw() {
//   background(0);

//   console.log(movingRect.x-fixedRect.x);
//   movingRect.x=World.mouseX; 
//   movingRect.y=World.mouseY;  

//   if(isTouching(obj3,movingRect))
// {
//   obj3.shapeColor="blue";
//   movingRect.shapeColor="blue";
// }
// else{
//   obj3.shapeColor="green";
//   movingRect.shapeColor="green";
// }

//   drawSprites();
// }
// function isTouching(object1,object2)
// {
//   if(object1.x-object2.x<=object2.width/2+object1.width/2
//     &&object2.x-object1.x<=object2.width/2+object1.width/2
//     &&object1.y-object2.y<=object2.height/2+object1.height/2
//     &&object2.y-object1.y<=object2.height/2+object1.height/2)
//   {
//     return true;
//   }
//   else{
//     return false;
//   }
// }


// var fixedRect, movingRect;

// function setup() {
//   createCanvas(1200,800);
//   fixedRect = createSprite(400, 100, 50, 80);
//   fixedRect.shapeColor = "green";
//   fixedRect.debug = true;
//   movingRect = createSprite(400, 800,80,30);
//   movingRect.shapeColor = "green";
//   movingRect.debug = true;

  obj3.velocityX = -5;
  obj1.velocityX = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(obj1, obj3);
  
  drawSprites();
}

 function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    &&object2.x - object1.x <object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y <object2.height/2 + object1.height/2
  &&object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}


 }