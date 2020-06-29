var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ball,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    var options={
		isStatic:true
	}
	box1=new Box(700,645,80,10,options);
 box2=new Box(670,645,10,60,options);
 box3=new Box(730,645,10,60,options);
 
 var options={
	 isStatic:false,
	 restitution:0.3 ,
	 friction :0.5,
	 density:1.3
 }
	ball=Bodies.circle(200,200,50,options);
	World.add(world, ball);
	//Create a Ground
	fill("yellow");
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} )
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  box1.display();
  box2.display();
  box3.display();
  drawSprites(); 
  }
  

 


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:405,y:-405});
                      }
}
