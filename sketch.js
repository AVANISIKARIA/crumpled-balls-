
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,350,1200,10);
	log1 = new Log(900,300,10,80);
    log2 = new Log(1100,300,10,80);
	log3 = new Log(1000,337,200,10);

    paperObject=new Paper(100,200,30)

	


	Engine.run(engine);
  
}


function draw() {
  
  background("black");
  Engine.update(engine);

  ground.display();
  log1.display();
  log2.display();
  log3.display();

  paperObject.display();
 

  drawSprites();

  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-25});
	}
}



