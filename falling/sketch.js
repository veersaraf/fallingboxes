
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var newboxie, fVal;
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        newboxie = new Boxie(random(0, 400),random(0, 400), random(10, 40),random(10, 40));
        boxes.push(newboxie);
    }
}
 
function draw() {
    background(51);
    // Draw all the elements including the slider that 
    for(var i=0; i<boxes.length; i++)
    {
        boxes[i].display();
    }
    
    // This is the value of your gravity. You can optionally show it to the viewer.
    fVal = gSlider.value();

 
    // Use a for loop to show all the boxes

}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {

    }


 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
    }
}