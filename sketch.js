const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stand,box1,box2,box3,box4;
var box5,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22;
var box24,box25,slingshot,stand2;
var polygon,polygonimg,stand1;

var backgroundImage;

var score = 0 ;

function preload(){
  polygonimg=loadImage("polygon.png");
  getBackgroundImage();
}

function setup() {
	
  
  createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;
	
  //Create the Bodies Here.
stand1=new Stand(390,550,250,20);
stand2=new Stand(730,300,250,20);

//level 1
box1=new Box(330,525,30,40);
box2=new Box(350,525,30,40);
box3=new Box(370,525,30,40);
box4=new Box(390,525,30,40);
box5=new Box(410,525,30,40);
box6=new Box(430,525,30,40);
box7=new Box(460,525,30,40);

box8=new Box(350,500,30,40);
box9=new Box(370,500,30,40);
box10=new Box(390,500,30,40);
box11=new Box(410,500,30,40);
box12=new Box(430,500,30,40);

box13=new Box(370,475,30,40);
box14=new Box(390,475,30,40);
box15=new Box(410,475,30,40);

box16=new Box(390,460,30,40);

//level2
box17=new Box(670,270,30,40);
box18=new Box(690,270,30,40);
box19=new Box(710,270,30,40);
box20=new Box(730,270,30,40);
box21=new Box(750,270,30,40);
box22=new Box(770,270,30,40);
box23=new Box(790,270,30,40);

box24=new Box(690,245,30,40);
box25=new Box(710,245,30,40);
box26=new Box(730,245,30,40);
box27=new Box(750,245,30,40);
box28=new Box(770,245,30,40);

box29=new Box(710,220,30,40);
box30=new Box(730,220,30,40);
box31=new Box(750,220,30,40);

box32=new Box(730,195,30,40);

ground=new Ground(100,337,2000,20);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot= new Slingshot(polygon,{x:100,y:450});

Engine.run(engine);

  
}

function draw() {
  
  rectMode(CENTER);
  background("grey");
if(backgroundImage){
  background(backgroundImage);
}

  fill("white");
  textSize(20);
  text("Drag the hexagonal stone,and launch it towards the blocks",50,50);
  
  
  fill("white");
  textSize(20);
  text("Press space to play a second chance",600,550);
  
  fill("purple");
  textSize(30);
  text("SCORE: " + score , 750,75);

  drawSprites();
 
  stand1.display();
  stand2.display();
  
  fill("turquoise")
  box1.display();
  box1.score();
  
  box2.display();
  box2.score();
  
  box3.display();
  box3.score();
  
  box4.display();
  box4.score();
  
  box5.display();
  box5.score();
  
  box6.display();
  box6.score();
  
  box7.display();
  box7.score();

  box17.display();
  box17.score();

  box18.display();
  box18.score();

  box19.display();
  box19.score();

  box20.display();
  box20.score();
 
  box21.display();
  box21.score();
 
  box22.display();
  box22.score();
 
  box23.display();
  box23.score();
 
  fill("pink");
  box8.display();
  box8.score();
 
  box9.display();
  box9.score();

  box10.display();
  box10.score();

  box11.display();
  box11.score();

  box12.display();
  box12.score();

  box24.display();
  box24.score();

  box25.display();
  box25.score();

  box26.display();
  box26.score();

  box27.display();
  box27.score();

  box28.display();
  box28.score();

  fill("yellow")
  box13.display();
  box13.score();

  box14.display();
  box14.score();

  box15.display();
  box15.score();

  box29.display();
  box29.score();

  box30.display();
  box30.score();

  box31.display();
  box31.score();

  fill("red")
  box16.display();
  box16.score();

  box32.display();
  box32.score();


  slingshot.display();
  ground.display();

fill("gold");
  imageMode(CENTER)
  image(polygonimg ,polygon.position.x,polygon.position.y,40,40);

  
}
function mouseDragged(){
	Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
  
}


function keyPressed(){

  if(keyCode === 32){
   // console.log(polygon);
   slingshot.attach(polygon);
  }    
}


async function getBackgroundImage(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
  var responseJSON = await response.json();
  var mydatetime = responseJSON.datetime;
  var hour = mydatetime.slice(11,13);
  console.log(hour);

  if(hour >= 6 && hour <=19){
      bg = "images/bg.png";
  }
  else {
      bg = "images/bg2.jpg";
  }

  backgroundImg = loadImage(bg);

}