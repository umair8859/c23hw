class Stone{
  constructor(x,y){    
    var options={
     isStatic:true
  }
    this.body=Bodies.circle(x,y,20,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }
  display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill(255);
    ellipse(pos.x,pos.y,10,10);
    pop();
  }
}