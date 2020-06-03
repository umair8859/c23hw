const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Vertices=Matter.Vertices;
var engine, world;
var stick1,stick2,stick3,stick4,stick5,stick6,stick7,stick8,stick9;
var stone1,stone2;
var crown1,crown2,crown3,crown4,crown5,crown6,
crown7,crown8,crown9,crown10,crown11
crown12,crown13,crown14,crown15
crown16,crown17,crown18
crown19,crown20
crown21;
function setup(){
 var canvas = createCanvas(700,400);
 engine = Engine.create();
 world = engine.world;
 stick1=new Stick(60,200,10,600);
 stick2=new Stick(90,200,80,500);
 stick3=new Stick(130,200,50,400);
 stick4=new Stick(175,200,100,300);
 stick5=new Stick(220,200,50,400);
 stick6=new Stick(260,200,80,500);
 stick7=new Stick(290,200,10,600);
 stick8=new Stick(60,43,50,10);
 stick9=new Stick(290,43,50,10);
 stone1=new Stone(60,50);
 stone2=new Stone(290,50);
 crown1=new Stone(150,120);
 crown2=new Stone(160,120);
 crown3=new Stone(170,120);
 crown4=new Stone(180,120);
 crown5=new Stone(190,120);
 crown6=new Stone(200,120);
 crown7=new Stone(155,110);
 crown8=new Stone(165,110);
 crown9=new Stone(175,110);
 crown10=new Stone(185,110);
 crown11=new Stone(195,110);
 crown12=new Stone(160,100);
 crown13=new Stone(170,100);
 crown14=new Stone(180,100);
 crown15=new Stone(190,100);
 crown16=new Stone(165,90);
 crown17=new Stone(175,90);
 crown18=new Stone(185,90);
 crown19=new Stone(170,80);
 crown20=new Stone(180,80);
 crown21=new Stone(175,70);
}
function draw(){
 background(0);
 Engine.update(engine);
 stick1.display();
 stick2.display();
 stick3.display();
 stick4.display();
 stick5.display();
 stick6.display();
 stick7.display();
 stick8.display();
 stick9.display();
 stone1.display();
 stone2.display();
 crown1.display();
 crown2.display();
 crown3.display();
 crown4.display();
 crown5.display();
 crown6.display();
 crown7.display();
 crown8.display();
 crown9.display();
 crown10.display();
 crown11.display();
 crown12.display();
 crown13.display();
 crown14.display();
 crown15.display();
 crown16.display();
 crown17.display();
 crown18.display();
 crown19.display();
 crown20.display();
 crown21.display();
}