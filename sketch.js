const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var brick, brick11, brick2, brick3, brick4, brick5;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  brick = new Bricks(200, 350, 60, 60, PI);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);

  brick.display(); 
  drawSprites();
}