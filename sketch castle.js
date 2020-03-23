const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var ground;

var stick1,stick2,stick3,stick4,stick5,stick6,stick7,stick8,stick9;
function setup() {
  var canvas=createCanvas(400,400);
  engine = Engine.create();
    world = engine.world;
  stick1=new Sticks(20,360,20,100);
  stick2=new Sticks(380,360,20,100);
  stick3=new Sticks(60,300,100,20);
  stick4=new Sticks(340,300,100,20);
  stick5=new Sticks(100,240,20,100);
  stick6=new Sticks(300,240,20,100);
  stick7=new Sticks(140,180,130,20);
  stick8=new Sticks(260,180,130,20);
  stick9=new Sticks(200,130,30,80);
 // ground=new Ground(200,395,400,20);
 //ground=Bodies.rectangle(200,395,400,10);
 //World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
 // rectMode(CENTER);
 // rect(ground.position.x,ground.position.y,400,10);
// ground.display();
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  stick8.display();
  stick9.display();
  circle(200,67,50);
  square(110,147,45);
  square(288,147,45);
  rect(110,114,20,20);
  rect(288,114,20,20);
  circle(200,395,150);
  square(200,230,40);
  rect(55,215,15,150);
  rect(350,215,15,150);
  rect(55,130,30,20);
  rect(350,130,30,20);
  drawSprites();
}