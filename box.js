class Box {
    constructor(x,y,width,height) {
      var options = {
        isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color = color(random(0,255),random(0,255),random(0,255));
      this.visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed < 3) {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        pop();
      }
    } 
   
};