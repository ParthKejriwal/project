
// CREATE GLOBAL VARIABLES
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
//var boxes;
 
var boxes = [];
var gSlider;
 
 //var click;


function setup() {
    createCanvas(600, 600);

    // Create an instance of Engine, World
    engine=Engine.create();
    world = engine.world;
    Engine.run(engine);
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 575);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    
    // Create a ground rectangle that would hold all the boxes and add it to the world.*/
    var options={isStatic:true}
    ground=Bodies.rectangle(300,560,600,20,options);
    World.add(world,ground);

}
 
function mousePressed() {
    if (mouseY<570) {
        // Every time a mouse press occures create a new box.
        boxes.push(new Boxes(mouseX, mouseY, random(10, 40), random(10, 40)));
    }

}
 
function draw() {
    background(51);
   
    // This is the value of your gravity. You can optionally show it to the viewer.
     var fVal = gSlider.value();
   text("Gravity: "+fVal,200,590);

 
    // Use a for loop to show all the boxes
   fill(200);
   for (var i = 0; i < boxes.length; i++){
     boxes[i].display();
     }
     console.log(ground);
     rectMode(CENTER);
     rect(ground.position.x, ground.position.y, width, 10);  
}
