class Ball
{
    constructor(x,y,radius){
        var options= {
            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:1.2

        }
        this.body   = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.x= x;
        this.y =y;
        
          
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill(random(0,255))
        circle(0,0, this.radius);
        pop();
    }
}