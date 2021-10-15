
/*
class Bullet{
	constructor(xSpd, ySpd){
		this.x = turPosX;
		this.y = turPosY;
		this.xSpd = xSpd;
		this.ySpd = ySpd;
	}
	
	display(){
		push()
		stroke(230, 255, 0);
		fill(230, 255, 0, 100);
		ellipse(this.x, this.y, 10);
		pop();
	}
	
	update(){
		this.x += this.xSpd;
		this.y += this.ySpd;
		this.xSpd *= 0.994;
		this.ySpd *= 0.994;
	}
	
	outOfBounds(){
		return(this.x > width+10 || this.x < -10 || this.y > height+10 || this.y < -10);
	}
	
	hitScan(){
		for (var i = 0; i < waves.length; i++){
			var collideOrNot = collideCircleCircle(this.x, this.y, 10)
			if (collideOrNot){
				waves.splice(i,1);
				
				return true;
			}
		}
		return false;
	} 
}*/

class Bullet {
    constructor(tx, ty, ts, tdir, tspeed) {
      this.x = tx;
      this.y = ty;
      this.s = ts;
      this.dir = tdir;
      this.speed = tspeed;
    }
  
    render(r,g,b) {
      fill(r,g,b);
      rect(this.x, this.y, this.s, this.s);
      switch (this.dir) {
        case 'u': this.y -= this.speed;	break;
          case 'd': this.y += this.speed;	break;
          case 'l': this.x -= this.speed;	break;
          case 'r': this.x += this.speed;	break;
      }
    }
  }