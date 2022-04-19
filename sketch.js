var bg,bgImg;
var player, shooterImg, shooter_flying;


function preload(){
  
  //shooterImg = loadImage("assets/Idle.png")
  shooter_flying = loadImage("assets/Flying.png")

  energy= loadAnimation("assets/Energy_1.png", "assets/Energy_2.png", "assets/Energy_3.png", "assets/Energy_4.png");

  bgImg = loadImage("Background_Image.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  energy.frameDelay = 5;

  //adding the background image
  bg = createSprite(800,350,windowWidth,windowHeight)
  bg.scale = 0.9
  bg.addImage(bgImg)

  

//creating the player sprite
   player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shooter_flying)
   player.scale = 0.3
   player.debug = false
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 

  energyball = createSprite(300, 300, 100, 200);
  energyball.addAnimation("fuel", energy);

  //moving the player up and down and making the game mobile compatible using touches
//if(keyDown("UP_ARROW")||touches.length>0){
  //player.y = player.y-30
  //player.addImage(shooter_flying)
//}
if(keyDown("LEFT_ARROW")||touches.length>0){
 player.x = player.x-30
 player.addImage(shooter_flying)
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
  player.addImage(shooter_flying)
 }


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("DOWN_ARROW")){
 
 // player.addImage(shooterImg)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("DOWN_ARROW")){
 // player.addImage(shooterImg)
}


drawSprites();

}
