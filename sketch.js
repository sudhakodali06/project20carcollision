var car, wall;
var speed, weight;

function setup() {
createCanvas(1600,400);

speed = random(50,95);
weight = random(400,1500);

car = createSprite(80, 200, 50, 50);
car.shapeColor = "blue";
car.scale = 0.5;
car.velocityX = speed;
car.debug = true;

 wall = createSprite(1350, 200, 60, height/2);
 wall.shapeColor = "brown";

}

function draw() {
    background(255,255,255);  
  console.log(car.x);
    if(wall.x - car.x < (car.width +wall.width)/2){    
      car.velocityX = 0;
      var deformation = (0.5*weight*speed*speed)/22500;
      
      if(deformation < 100){
        car.x = 1310;
        car.shapeColor="green";
      }

      if(deformation >=100 && deformation<=180){
        car.x = 1310;
        car.shapeColor = "yellow";
      }

      if(deformation > 180){
        car.x = 1310;
         car.shapeColor = "red";
      }
    }
    drawSprites();
}