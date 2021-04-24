var bg;
var backgroundImage;
var mario;
var marioAnimation;

function preload(){
 backgroundImage = loadImage("Images/Images for background and decoration/backg.jpg");
 marioAnimation = loadAnimation("Images/Mario/km_4.png","Images/Mario/km_3.png","Images/Mario/km_2.png","Images/Mario/km_1.png")
}

function setup(){
  createCanvas(600,200);
 bg = createSprite(0,30,3000,200);
 bg.addImage("image",backgroundImage);
 bg.scale = 0.68
 bg.velocityX = -5;

  mario = createSprite(20,145,20,20);
  mario.addAnimation("deevehveh",marioAnimation);
  mario.scale = 0.6;
}

function draw(){
background("white");
console.log(bg.x);
if(bg.x<0){
  bg.x = bg.width/2;
}


drawSprites();
}