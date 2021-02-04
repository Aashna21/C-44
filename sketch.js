const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snake1, snake2, snake3, snake4, snake5; 
var appleGroup, goldenGroup, apple, gApple; 
var bgIm, background; 
var heart1, heart2, heart3, h1Im, h2Im, h3Im; 

function preload(){
  bgIm = loadImage("MyOwnG.jpg");
  h1Im = loadImage("heart.png"); 
  h2Im = loadImage("heart.png"); 
  h3Im = loadImage("heart.png"); 
}

function setup() {

  createCanvas(900,400);
  background(0)
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  background = createSprite(450, 200, 90, 400);
    background.addImage(bgIm); 

  heart1 = createSprite(795, 80, 20, 20); 
    heart1.addImage(h1Im);
    heart1.scale = 0.15;  
    heart1.visible = true; 
  heart2 = createSprite(795, 130, 20, 20); 
    heart2.addImage(h2Im); 
    heart2.scale = 0.15; 
    heart2.visible = true; 
  heart3 = createSprite(795, 180, 20, 20); 
    heart3.addImage(h3Im); 
    heart3.scale = 0.15;  
    heart3.visible = true; 

  fill(171, 145, 50)
  snake1 = new Block(200, 200, 26, 26)
  snake2 = new Block(210, 200, 26, 26)
  snake3 = new Block(220, 200, 26, 26)
  snake4 = new Block(230, 200, 26, 26)
  snake5 = new Block(240, 200, 26, 26)

  score = 0 
}

function draw() {
 
  drawSprites();

  snake1.display(); 
  snake2.display(); 
  snake3.display(); 
  snake4.display(); 
  snake5.display();


  // textSize(20);
  // fill("lightyellow");
  // text("Score:",100,30);
}

function appleSpawn() {
  if (frameCount%150 === 0) {
    apple = createSprite(400, 200, 25, 25)
    apple.x = Math.round(random(250, 605))
    apple.y = Math.round(random(250, 650))
  }
  if (frameCount%350 === 0) {
    gApple = createSprite()
  }
}