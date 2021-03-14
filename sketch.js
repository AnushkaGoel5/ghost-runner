var ground,groundImg;
var door,doorImg,doorGroup;
var climber,climberImg,climberGroup;
var ghost,ghostImg;
var invisibleblock,invisibleblockGroup;
var gameState="play";



function preload (){
  
  groundImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");

}


function setup(){
  createCanvas(600,600);
  
 ground=createSprite(300,300);
ground.addImage(groundImg);
   
  
  ghost=createSprite(200,200,50,50);
ghost.addImage(ghostImg);
    ghost.scale=0.3;
  
  
  
  doorGroup=new Group();
   climberGroup=new Group();
   invisibleblockGroup=new Group();
  
}
  
function draw(){
  
  background("black");

 
  if(gameState==="play"){
     ground.velocityY=3;
  
      if(ground.y>400){
  ground.y=300;
      }
         if(keyDown("space")){
    ghost.velocityY=-5;
    
   }
  
  ghost.velocityY=ghost.velocityY+0.8;

  
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
    
  } 
        
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
   
  }
  
   if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  
 if(invisibleblockGroup.isTouching(ghost)||ghost.y>600){
   ghost.destroy();
   
   gameState="end";
   
 }
 
  spawndoor();
  
  }
  if(gameState==="end"){
    textSize(30);
    text("Game Over",230,250);
  }
  drawSprites();
}
function spawndoor(){
  if(frameCount%240===0){
  door=createSprite(200,-50);
    door.addImage(doorImg);
    door.x=Math.round(random(120,400));
    door.velocityY=3;
    door.lifetime=700;
 ghost.depth=door.depth;
    ghost.depth+=1;
    
  doorGroup.add(door);
    
    
    climber=createSprite(200,10);
   climber.addImage(climberImg);
 climber.x=door.x;
climber.velocityY=3;
   climber.lifetime=700;
 
 climberGroup.add(climber);
    
    
    invisibleblock=createSprite(200,15);
    invisibleblock.width=climber.width;
     invisibleblock.height=2;
    invisibleblock.x=door.x;
    invisibleblock.velocityY=3;
     invisibleblock.lifetime=700;
invisibleblockGroup.add(invisibleblock);
    invisibleblock.debug=true;                             
    
    
}
}








  