class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.visibility = 255;
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display(){
    
    //console.log(this.body.speed);
    
    if(this.body.speed < 3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      //do nothing
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      pop();
    }

    
  }

      score(){
            if(this.visibility<0 && this.visibility>-105){
                score++;
            }
      }
}
