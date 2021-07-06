const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function setup() {
 var canvas = createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(800,600,11000,45)
  divide6=new Divide(100,500,10,150)
  divide3=new Divide(200,500,10,150)
  divide4=new Divide(300,500,10,150)
  divide5=new Divide(400,500,10,150)
  divide=new Divide(500,500,10,150)
  divide1=new Divide(600,500,10,150)
  divide2=new Divide(700,500,10,150)

  particle=new Particle(100,200,10)
  particle1=new Particle(200,200,10)
  particle2=new Particle(300,200,10)
  particle3=new Particle(400,200,10)
  particle4=new Particle(500,200,10)
  particle5=new Particle(600,200,10)
  particle6=new Particle(700,200,10)

  particle7=new Particle(150,250,10)
  particle8=new Particle(250,250,10)
  particle9=new Particle(350,250,10)
  particle10=new Particle(450,250,10)
  particle11=new Particle(550,250,10)
  particle12=new Particle(650,250,10)
  particle13=new Particle(750,250,10)

  particle14=new Particle(350,150,10)
  particle18=new Particle(450,150,10)
  particle19=new Particle(550,150,10)
  particle20=new Particle(650,150,10)
  particle21=new Particle(750,150,10)
  particle22=new Particle(850,150,10)
  particle23=new Particle(950,150,10)
  particle24=new Particle(150,150,10)
  particle25=new Particle(250,150,10)

  ball=new Ball(100,150,10)
  
  ball1=new Ball(200,150,10)
  ball2=new Ball(300,150,10)
  ball3=new Ball(400,150,10)
  
  ball4=new Ball(500,150,10)
  ball5=new Ball(600,150,10)
  ball6=new Ball(700,150,10)
  ball7=new Ball(800,150,10)

  ball8=new Ball(150,150,10)
  ball9=new Ball(250,150,10)
  ball10=new Ball(350,150,10)
  ball11=new Ball(450,150,10)
  
  ball12=new Ball(550,150,10)
  ball13=new Ball(650,150,10)
  ball14=new Ball(750,150,10)
 
}
function draw() {
  background("Black");  
  
  Engine.update(engine);
  ground.display()
  divide.display()
  divide1.display()
  divide2.display()
  divide4.display()
  divide5.display()
  divide6.display()
  divide3.display()

  particle.display()
  particle1.display()
  particle2.display()
  particle3.display()
  particle4.display()
  particle5.display()
  particle6.display()
  particle7.display()
  particle8.display()
  particle9.display()
  particle10.display()
  particle11.display()
  particle12.display()
  particle13.display()
  
  particle14.display()
  
  particle18.display()
  particle19.display()
  particle20.display()
  particle21.display()
  particle22.display()
  particle23.display()

  particle24.display()
  particle25.display()

  ball.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ball6.display()
  ball7.display()
  ball8.display()
  ball9.display()
  ball10.display()
  ball11.display()
  ball12.display()
  ball13.display()
  ball14.display()
  drawSprites();
}
