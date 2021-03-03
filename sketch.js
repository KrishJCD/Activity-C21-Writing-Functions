var fixedRect,movingRect,box;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="green";
  box=createSprite(300,300,50,50);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(box,movingRect))
  {
    movingRect.shapeColor="red";
    box.shapeColor="red";
  }
  else if(isTouching(fixedRect,movingRect))
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    box.shapeColor="green";
  }
  drawSprites();
}

function isTouching(obj2,obj1)
{
  if((obj1.x-obj2.x<obj2.width/2+obj1.width/2)
  &&(obj2.x-obj1.x<obj2.width/2+obj1.width/2)
  &&(obj1.y-obj2.y<obj2.height/2+obj1.height/2)
  &&(obj2.y-obj1.y<obj2.height/2+obj1.height/2))

    {
      return true;
    }
  else{
    return false;

  }
}