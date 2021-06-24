var trex, trex_running, edges;
var groundImage;
var ground
var invisibleground
function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage("ground2.png")
  }

function setup(){
    createCanvas(600,200);
    ground=createSprite(300,180,600,20)
    ground.addImage("ground",groundImage);
    ground.velocityX=-4
    invisibleground=createSprite(300,185,600,5)
    invisibleground.visible=false
    // creating trex
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    edges = createEdgeSprites();
    
    //adding scale and position to trex
    trex.scale = 0.5;
    trex.x = 50
  }


function draw(){
    //set background color 
    background("white");
    
    //logging the y position of the trex
    console.log(trex.y)
    if(ground.x<0){
      ground.x=ground.width/2
    }
    //jump when space key is pressed
    if(keyDown("space")&&trex.collide(invisibleground)){
    
      trex.velocityY = -10;
    }
    
    trex.velocityY = trex.velocityY + 0.5;
    
    //stop trex from falling down
    trex.collide(invisibleground)  
    drawSprites();
}







