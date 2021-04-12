class Paper{
    constructor(x,y,r){
		var options={

            restitution :0.3,
            friction:0,
            density:1.2
        }
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,20, options)
        this.image = loadImage("paper.png")
        World.add(world,this.body)
	}
	display(){
        var paperpos=this.body.position;
        var angle=this.body.angle;		
        
        rotate(angle)
        imageMode(CENTER)
        image(this.image,paperpos.x,paperpos.y,80,80)

    }
}
