var boder1, boder2, boder3, boder4;
var ground1, ground2, ground3;


function preload(){
  
  ground1Image = loadImage("background-sheet0.png");
  ground2Image = loadImage("background_trees-sheet0.png");
  ground3Image = loadImage("background_woods-sheet0.png");
  ground4Image = loadImage("background_ground-sheet0.png");
  
}

function setup() {
  createCanvas(650, 400);

  ground1 = createSprite (325,185,20,20);
  ground1.addImage("area1",ground1Image);
  ground1.scale=0.5;
  ground1.velocityX=-4;
  ground1.x=ground1.width/2;

  ground2 = createSprite (325,185,20,20);
  ground2.addImage("area2",ground2Image);  

  ground3 = createSprite (325,185,20,20);
  ground3.addImage("area3",ground3Image);
  
  ground4 = createSprite (325,245,20,20);
  ground4.addImage("area4",ground4Image);
  


  boder1 = createSprite (650,200,10,400);
  boder2 = createSprite (0,200,10,400);
  boder3 = createSprite (300,0,1000,10);
  boder4 = createSprite (300,400,1000,10);
  

  

}

function draw() {
  background("White");
  
  if(ground1.x<0) {
    ground1.x=ground1.width/2;
  }
  

  

  drawSprites();
}