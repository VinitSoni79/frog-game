var oceanImg, ocean;
var coinImg, coin, coinGroup;
var climberImg, climber, climbersGroup;
var frog, frogImg;
var gameState = "play"
var score = 0;
var x = 0;

function preload(){
  oceanImg = loadImage("water.jpg");
  coinImg = loadImage("coin.png");
  climberImg = loadImage("seaweed.png");
  frogImg = loadImage("frog.png");
  
}

function setup(){
  createCanvas(580,450);
  
  ocean = createSprite(300,300);
  ocean.addImage("ocean",oceanImg);
  
  frog = createSprite(200,200,50,50);
  frog.scale = 0.1;
  frog.addImage("frog", frogImg);  
  
  //create coin group and climber group
  coinGroup = new Group();
 climbersGroup = new Group();
}

function draw(){
  background(0);
  
ocean.y+=1;


  if(ocean.position.y>300){
    ocean.position.y= 150;
    }

  
    drawSprites();   
  
  if (gameState === "play") {
    
    
    
    textSize(30);
    let c = color(255, 190, 10);
    fill(c);
  text("Score",160,30);
  text(score, 250, 30);
  

  if(keyDown("left")) {
    frog.position.x-=10;
  }
  if(keyDown("right")) {
    frog.position.x+=5;
  }
    if(keyDown("space")) {
      frog.position.y-=5;
    }
    if(!keyDown("space")){
      frog.position.y+=2;
    }
    if(frog.position.y==470) {
      gameState = "end";
    }
    spawnCoin();
    if(coinGroup.isTouching(frog)){
      
      score=score+1;
      coinGroup.destroyEach();
    
  } 
  
  }
  
  if (gameState === "end"){
    textSize(30);
    fill(10);
    text("Game Over",200,250);
    text("Your score is", 200, 300);
    text(score,400,300)
    coinGroup.destroyEach();
    climberGroup.destroyEach();
    
    
  }
  
 

}

// create the coin and climber in the same function
function spawnCoin() {
  
  if (frameCount % 280 === 0) {
    
    //make the x position of the coin and climber the same
   x= Math.round(random(100,400));
    coin = createSprite(x,10,20,20);
    coin.addImage("coin",coinImg);
    coin.setVelocity(0,2);
    coin.scale = 0.1;
    coin.lifetime=250;
    coinGroup.add(coin);

    
    climber = createSprite(x,70,20,20);
    climber.addImage("climber",climberImg);
    climber.setVelocity(0,2);
    
    climber.scale = 0.5;
    climber.lifetime=200;

    //climberGroup.add(climber);
  }
}

