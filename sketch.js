var car,wall;
var weight,speed;


function setup() {
  createCanvas(1600,400);
  /*createSprite(400, 200, 50, 50);*/

  car=createSprite(50,200,50,50) ;

  car.velocityX=speed;
  
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

  speed=random(55,90);
  weight=random(400,1500);

 

}

function draw() {
  background(255,255,255); 

  

  if(wall.x=car.x < (car.width+wall.width))
  {
  car.velocityX=0;
  var deformation=0.5 *weight * speed*speed/22509;
  if(deformation>180);
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180  && deformation > 100)
  {
    car.shapeColor=(230,230,0);
  }
  if(deformation<100
    {
      car.shapeColor=color(0,255,0);
    }
}
  
  
  
  
 
  drawSprites();
}
