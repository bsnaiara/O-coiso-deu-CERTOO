var car1, car2, car1IMG, car2IMG;
var obstacle1, obstacle2, obstacle3;
var background;

function preload(){
car1IMG = loadAnimation("Car1.gif");
car2IMG = loadAnimation("Car2.gif");
background = loadImage("Road.png");

}

function setup() {
  createCanvas(700, 300);

  car1 = createSprite(50,250);
  car1.addAnimation("car1", car1IMG);
  car1.scale = 0.3;

  car2 = createSprite(50,50);
  car2.addAnimation("car2", car2IMG);
  car2.scale = 0.3;

}

function draw() {
  image(background, 0, 0, 700, 300);

  if(keyDown("RIGHT_ARROW")){
    car1.x += 10;
  }
  if(keyDown("UP_ARROW")){
    car1.y -= 3;
  }


  drawSprites();
}

