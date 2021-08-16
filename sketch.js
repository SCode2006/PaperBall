
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1,leftSide,rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.3,
		
		friction: 0,
		density:1.2
	};

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(400,350,20,ball_options);
	World.add(world,ball);
	
	ground1 = new Ground(width/2,670,width,20);
	World.add(world,ground1);
	leftSide = new Ground(1100,600,20,120);
	World.add(world,leftSide);
	rightSide = new Ground(1400,600,20,120);
	World.add(world,rightSide);
    
	keyPressed();

	Engine.run(engine);

	
  
	rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
  
  
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

  ground1.show();
  leftSide.show();
  rightSide.show();

  //keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:10.0,y:-10.0});
	}
}

