
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var top1;
var bobDiameter;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  top1 = new Roof(480, 200, 450, 20);
  World.add(world, top1);
bob1 = new bob(350, 500, 60);
bob2 = new bob(400, 500, 60);
bob3 = new bob(450, 500, 60);
bob4 = new bob(500, 500, 60);
bob5 = new bob(550, 500, 60);
World.add(world, bob1);
World.add(world, bob2);
World.add(world, bob3);
World.add(world, bob4);
World.add(world, bob5);
rope1 = new Rope(bob1.body, {x: 340, y: 200})
rope2 = new Rope(bob2.body, {x: 400, y: 200})
rope3 = new Rope(bob3.body, {x: 460, y: 200})
rope4 = new Rope(bob4.body, {x: 520, y: 200})
rope5 = new Rope(bob5.body, {x: 580, y: 200})
World.add(world, rope1);
World.add(world, rope2);
World.add(world, rope3);
World.add(world, rope4);
World.add(world, rope5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  top1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  lift();
  drawSprites();
 
}

function lift() {
if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 0.00000001});
}
}



