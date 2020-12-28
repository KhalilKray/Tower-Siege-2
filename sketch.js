const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

    pimg = loadImage("polygon.png");
	
}

function setup() {
    createCanvas(1200, 700);

    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,690,1200,30);
    stand1 = new Ground(400,600,400,20);
    stand2 = new Ground(1000,300,300,20);
    
    boxa1 = new Box(330,565,40,50);
    boxa2 = new Box(350,565,40,50);
    boxa3 = new Box(370,565,40,50);
    boxa4 = new Box(390,565,40,50);
    boxa5 = new Box(410,565,40,50);
    boxa6 = new Box(430,565,40,50);
    boxa7 = new Box(450,565,40,50);
    boxa8 = new Box(340,545,40,50);
    boxa9 = new Box(360,545,40,50);
    boxa10 = new Box(380,545,40,50);
    boxa11 = new Box(400,545,40,50);
    boxa12 = new Box(420,545,40,50);
    boxa13 = new Box(440,545,40,50);
    boxa14 = new Box(350,525,40,50);
    boxa15 = new Box(370,525,40,50);
    boxa16 = new Box(390,525,40,50);
    boxa17 = new Box(410,525,40,50);
    boxa18 = new Box(430,525,40,50);
    boxa19 = new Box(360,505,40,50);
    boxa20 = new Box(380,505,40,50);
    boxa21 = new Box(400,505,40,50);
    boxa22 = new Box(420,505,40,50);
    boxa23 = new Box(370,485,40,50);
    boxa24 = new Box(390,485,40,50);
    boxa25 = new Box(410,465,40,50);
    boxa26 = new Box(380,465,40,50);
    boxa27 = new Box(400,445,40,50);
    boxa28 = new Box(390,425,40,50);

    boxb1 = new Box(940,265,40,50);
    boxb2 = new Box(960,265,40,50);
    boxb3 = new Box(980,265,40,50);
    boxb4 = new Box(1000,265,40,50);
    boxb5 = new Box(1020,265,40,50);
    boxb6 = new Box(950,245,40,50);
    boxb7 = new Box(970,245,40,50);
    boxb8 = new Box(990,245,40,50);
    boxb9 = new Box(1010,245,40,50);
    boxb10 = new Box(960,225,40,50);
    boxb11 = new Box(980,225,40,50);
    boxb12 = new Box(1000,225,40,50);
    boxb13 = new Box(970,205,40,50);
    boxb14 = new Box(990,205,40,50);
    boxb15 = new Box(980,185,40,50);

    polygon = Bodies.circle(50,200,30);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100, y:200});

    Engine.run(engine);

}

function draw() {
    rectMode(CENTER);
    background(0);

    textSize(20);
    textFont("Comfortaa")
    fill(0, 255, 255);
    text("Drag the yellow block and release it to launch it towards the blocks.", 100, 30);
    text("To return it, press the space bar.",100,50);

    ground.display();
    stand1.display();
    stand2.display();
    boxa1.display();
    boxa2.display();
    boxa3.display();
    boxa4.display();
    boxa5.display();
    boxa6.display();
    boxa7.display();
    boxa8.display();
    boxa9.display();
    boxa10.display();
    boxa11.display();
    boxa12.display();
    boxa13.display();
    boxa14.display();
    boxa15.display();
    boxa16.display();
    boxa17.display();
    boxa18.display();
    boxa19.display();
    boxa20.display();
    boxa21.display();
    boxa22.display();
    boxa23.display();
    boxa24.display();
    boxa25.display();
    boxa26.display();
    boxa27.display();
    boxa28.display();

    boxb1.display();
    boxb2.display();
    boxb3.display();
    boxb4.display();
    boxb5.display();
    boxb5.display();
    boxb6.display();
    boxb7.display();
    boxb8.display();
    boxb9.display();
    boxb10.display();
    boxb11.display();
    boxb12.display();
    boxb13.display();
    boxb14.display();
    boxb15.display();

    imageMode(CENTER);
    image(pimg,polygon.position.x,polygon.position.y,60,60);

}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
    if(keyCode === 32){
      slingShot.attach(this.polygon);
    }
}