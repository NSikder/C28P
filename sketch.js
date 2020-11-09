
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var thrown = false;

function preload()
{
	
}

function setup() {
	createCanvas(2400, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(1200,1190,2400,20);
	tree = new Tree();
	boy = new Boy();
	stone = new Stone();
	sling = new SlingShot(stone.body,{x:600,y:1000});
	mango = new Mango(1500,500);
	mango2 = new Mango(1900,100);
	mango3 = new Mango(2000,500);
	mango4 = new Mango(1800,500);
	mango5 = new Mango(1900,300);
	mango6 = new Mango(1600,200);
	mango7 = new Mango(2100,300);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(200,200,200);


	ground.display();
	tree.display();
	boy.display();
	sling.display();
	stone.display();

	mango.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	detect(stone,mango);
	detect(stone,mango2);
	detect(stone,mango3);
	detect(stone,mango4);
	detect(stone,mango5);
	detect(stone,mango6);
	detect(stone,mango7);

	drawSprites();

}

function mouseDragged(){
	if (thrown == false){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
}

function mouseReleased(){
	sling.fly();
	thrown = true;
}

function detect(rock,mangoa){
	RPosition = rock.body.position;
	MPosition = mangoa.body.position;

	var distance=dist(RPosition.x,RPosition.y,MPosition.x,MPosition.y);
	if(distance<=mangoa.radius+rock.radius){
		Matter.Body.setStatic(mangoa.body,false);
		console.log("rock")
	}
}