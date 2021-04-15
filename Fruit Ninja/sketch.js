// Assigning all variables
var fruits;
var fruit1 ,fruit2 , fruit3 ,fruit4;
var aliens;
var alien1 , alien2;
var sword , sword_image , swoosh;
var aliengrp , fruitgrp;
var PLAY = 1
var END = 0
var gamestate = 1;
var score = 0;
var gameover , gameoversound;

//function to preload all the sounds and images
function preload(){
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  alien1=loadImage("alien1.png");
  alien2=loadImage("alien2.png");
  sword_image=loadImage("sword.png");
  gameover =loadImage("gameover.png");
  swoosh = loadSound("Swoosh.mp3");
  gameoversound = loadSound("gameover.mp3");
  
}


function setup(){
  sword = createSprite(200,200,20,20);
  sword.scale = 0.5;
  sword.addImage(sword_image);
  
  aliengrp = createGroup();
  fruitgrp = createGroup();
  
}

function draw(){
  background("lightblue");
  
  
  if(gamestate === PLAY){
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  fruitsfun();
  aliensfun();
  }
  
  text("Score =" + score , 335, 20);
  
  if(sword.isTouching(fruitgrp)){
    score = score +1;
    swoosh.play();
    fruitgrp.destroyEach();
    }
  
  if(sword.isTouching(aliengrp)){
    gamestate = END;
    gameoversound.play();
    
  }
  
  if(gamestate === END){
    fruitgrp.destroyEach();
    aliengrp.destroyEach();
    aliengrp.velocityX = 0;
   fruitgrp.velocityX = 0;
    sword.x = 200;
    sword.y = 200;
    sword.addImage(gameover);
    sword.scale = 1.5;
  }  
  

  drawSprites();
}

function fruitsfun(){
  if(World.frameCount % 100 === 0){
    position = Math.round(random(1,2));
fruits = createSprite(400,200,20,20);
fruits.y = Math.round(random(15,385));
fruits.scale = 0.20;
  fruits.lifetime = 100;
    
    if(position ==1){
      fruits.x = 0;
      fruits.velocityX = (4+(score/4));
    } else
      {
        fruits.x = 400;
      fruits.velocityX =-(4+(score/4));
      }
    r = Math.round(random(1,4));
    if(r == 1){
      fruits.addImage(fruit1);
    } else if (r==2){
      fruits.addImage(fruit2);
    }else if(r == 3){
      fruits.addImage(fruit3);
    } else {
      fruits.addImage(fruit4)
   }
     fruitgrp.add(fruits);
      
  }
 
    
}

function aliensfun(){
  if(World.frameCount % 110 === 0){
    aliens = createSprite(400,200,20,20);
    aliens.scale = 1.1;
    aliens.y =Math.round(random(15,385));
    aliens.velocityX =-(4+(score/10));
    console.log(aliens.velocityX)
    aliens.lifetime =100;
    ar = Math.round(random(1,2));
    if(ar == 1){
      aliens.addImage(alien1);
    }
    else{
      aliens.addImage(alien2);
    }
     aliengrp.add(aliens);
  }
 
}