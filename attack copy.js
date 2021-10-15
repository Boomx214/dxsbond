class Attack {
constructor(){
this.x = width;
this.y = random(0, 400);
this.y2 = sin(frameCount /2) * 30;
this.alpha = 255;

}



  
interval(){
let timed = 2;
if((frameCount % 100) == 0 && timed > 2){
timed --;



}
if(timed == 0){
Attack.display();


}



}
display(){
    
    push();
    noStroke();
    rectMode(CENTER);
    fill(255,0,0,this.alpha)
    
    if(this.alpha > 0){
  this.alpha -=9;
    }
  
  if(this.alpha <= 0 ){
  

  this.x = -300;
  this.y = -300;
  }
  
  rect(this.x,this.y,width*2,y2);
  pop();
  
  
  }

    }  
     
