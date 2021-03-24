const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var division = [];
var divisionsHeight = 300
var particle = [];
var plinko = [];

function preload()
  {

  }


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,690,800,20)

  for(var i = 0; i<=width; i = i+80){
    division.push(new Division(i,height-divisionsHeight/2,10,divisionsHeight))
  }

  for(var j=75; j<=width; j = j+50){
    plinko.push(new Plinko(j,75))
  }

  for(var j=50; j<=width-10; j = j+50){
    plinko.push(new Plinko(j,175))
  }

  for(var j=75; j<=width; j = j+50){
    plinko.push(new Plinko(j,275))
  }

  for(var j=50; j<=width-10; j = j+50){
    plinko.push(new Plinko(j,375))
  }

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER)
  background(0);  
  
  drawSprites();

  for(var n = 0 ; n<division.length; n++){
    division[n].display();
  }

  if (frameCount %60 === 0){
    particle.push(new Particle(random(width/2-30, width/2+30),10,10));
  }

  for(var h = 0; h<particle.length;h++){
    particle[h].display();
  }

  for(var j = 0; j<plinko.length; j++){
    plinko[j].display();
  }

  ground.display();

}