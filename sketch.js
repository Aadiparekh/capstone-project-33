const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;


var bg;
var ground,gImg;
var sc,scImg;
var cart,cartImg;
var snowMan,smimg;
var ice=[];
var maxSnow=100;

function preload(){

scImg =loadAnimation("sc1.PNG","sc2.PNG","sc3.PNG","sc4.PNG","sc5.PNG","sc6.PNG","sc7.PNG","sc8.PNG","sc9.PNG","sc10.PNG","sc11.PNG","sc12.PNG")
bg = loadImage("bg.jpg")
gImg = loadImage("ground.png")
cartImg = loadImage("cartImg.png")
smimg = loadImage("snowMan.png")

}

function setup() {
  createCanvas(1000,700);
  engine=Engine.create();
  world= engine.world;

  
 ground = createSprite(500,675);
 ground.addImage(gImg);
 ground.scale=0.5;
 ground.velocityX=-8.5;


 sc = createSprite(300, 570);
 sc.addAnimation("sc",scImg);
 sc.scale=1.1;
 sc.velocityX=3;


 cart = createSprite(560,100);
 cart.addImage(cartImg);
 cart.scale=0.1;
 cart.velocityX=1;


 snowMan = createSprite(750,570);
 snowMan.addImage(smimg);
 snowMan.scale = 0.2;


 if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }
}


function draw() {
  background(bg);  
  Engine.update(engine);

  sc.collide(ground);

  if(ground.x < 480){
    ground.x= 550;  
 }

 if(sc.x<800){
  sc.x=300
 }

 if(keyWentDown("space")&& sc.y >= 100) {
  runner.velocityY = -12;
 }

 runner.velocityY = runner.velocityY + 0.8

 
  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    

  ground.display();


  drawSprites();
}