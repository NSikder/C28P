class Tree{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(1800,600,10,10,options);
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y);
      }

}