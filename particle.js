class particle {
  
    constructor (posX, posY)
    {
      this.x = posX;
      this.y = posY;
      
      this.xDir = random (-3, 3);
      this.yDir = random (-3, 3);
    
      this.r = random(50, 255);
      this.g = random(50, 255);
      this.b = random(30, 255);
    }
  
    display(radius){
      
      fill (this.r, this.g, this.b);
      noStroke();
      circle(this.x, this.y, radius);
      
    }
    update(speed){
      this.x += this.xDir*speed;
      this.y += this.yDir*speed;
    }
     keepInCanvas(){
      if (this.x < 0 || this.x > width) {
        this.xDir = -this.xDir; // 반전
      }
      if (this.y < 0 || this.y > height) {
        this.yDir = -this.yDir; // 반전
      }
    }
  }