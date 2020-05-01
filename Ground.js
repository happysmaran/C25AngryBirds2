class Ground{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("sprites/ground.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
    }
  };