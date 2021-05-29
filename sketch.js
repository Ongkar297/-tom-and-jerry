var tom, tomImg, tomWalking,tomSits;

var bg;

var jerry,jerryImg,jerryDancing,jerryChecking;

function preload() {
    //load the images here
    tomImg = loadImage("images/cat1.png");
    tomWalking = loadAnimation("images/cat2.png","images/cat3.png");
    tomSits = loadImage("images/cat4.png");

    bg = loadImage("images/garden.png");

    jerryImg = loadImage("images/mouse1.png");
    jerryDancing = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryChecking = loadImage("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite( 870,600);
    tom.addImage( tomImg);
    tom.scale = 0.2

    jerry = createSprite(200,600);
    jerry.addImage(jerryImg);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
  if(tom.x - jerry.x < (tom.width/2 -jerry.width/2 )){
      tom.velocityX = 0;
      tom.addImage("tomlastimage",tomSits);
      tom.changeImage("tomlastimage");
      tom.X= 200;
      jerry.addImage("jerrylastimage",jerryChecking);
      jerry.changeImage("jerrylastimage");
    
  }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
      tom.velocityX = -3;
      tom.addAnimation("walking",tomWalking);
      tom.changeAnimation( "walking",tomWalking);

      jerry.addAnimation("dance",jerryDancing);
      jerry.frameDelay = 25
      jerry.changeAnimation("dance",jerryDancing);
  }


}
