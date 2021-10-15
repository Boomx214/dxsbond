class Player {
    constructor() {
        this.posX = 1100;
        this.posY = 250;
       this.speed = 8;
       this.health = 250;
       this.boost = 10;
       this.boostCool = 30;
       this.size = 20;
       this.charge = 0;
       this.round = 0;
       this.alpha = 255;
       this.energy = 400;
       this.cIsDown == false;
this.eHealth = 3000;
this.isDamaged = false;
       distance = dist(this.posX,this.posY, p2,p1)
      }

display(){
  push();
  strokeWeight(1.5);   
  stroke(100, 20,250, 200);
  fill(100, 20,250, 20);
        rect(this.posX,this.posY , this.size, this.size);

pop();
}





move(){

    
this.cIsDown = false;

    if(keyIsDown(UP_ARROW)  && this.posY >= 0 && keyIsDown(67) == false){
        this.posY -=this.speed;
      
      }
      if(keyIsDown(DOWN_ARROW) && this.posY < height && keyIsDown(67) == false){
        this.posY +=this.speed;
      
        }
      
      if(keyIsDown(LEFT_ARROW) && this.posX > 1000 && keyIsDown(67) == false){
      this.posX -=this.speed;
          
          }
      
      if(keyIsDown(RIGHT_ARROW) && this.posX < width && keyIsDown(67) == false){
        this.posX +=this.speed
            
            }

            if(keyIsDown(67)){
                this.cIsDown = true;
                
                
                } else if(keyIsDown(67) == false) 
                {
                    this.cIsDown = false;
                
                
                }
      /*  
      if(keyIsPressed && key == 'd' ){
        this.speed = 10;
            if(this.boost > 0){

            this.boost -=2;


            }
            if(this.boost == 0){
            this.speed = 5; 
          
            if(this.boostCool > 0){
            this.boost -= 3;


            }
            if(this.boostCool == 0){
            this.boost = 10;

            }
            }
            
text(this.boost, this.posX + 10, this.posY)
text(this.boostCool, this.posX + 10, this.posY + 10)
            }*/
                 
}

getVal(){

return(this.posY +5);



}
getVal2(){

    return(this.posX +5);
    
    
    
    }
goCrazy(){

    translate(random(-0.5, 0.5), random(-0.5, 0.5))

}

checkCollide(){
    var collideOrNot = collideRectRect(this.posX, this.posY, 20,20, p, p1, width, y2);
   var collideOrDeez = collideRectRect(this.posX, this.posY, 20,20, e, wipeY,width*2, 300);
 
   if(collideOrDeez){
this.health -= 2;
print("nuts");


   }

if(this.health <= 0){
this.health = 0;


}
if(collideOrNot){
    //this.health -= 2;
    if(this.health <= 0){
        this.health = 0;
        
        
        }
    
}

} 

dodge(){
if (collideOrNot== false){

    for (var i = 0; i < wavesNum; i++) {
       waves[i].checkCollide();
       
        
      }

}


}






displayHealth(){
push();
fill(255);
    textSize(20);
    text(this.health,this.posX - 10, this.posY -10 );
pop();

}

die(){


}

gameOver(){
push();
textSize(90);
    text("Game over LOOOOOSSSSEEER", width*2, height*2);
pop();


}

attack(){
if(keyIsPressed && key == 'f'){
    let vibrate = sin(frameCount /2) * 20;
    //print("attack");
    push();
    fill(255,255,0,this.alpha)
    rect(width*2,this.posY,width*2,vibrate);
    pop();
    
    /*
    if(this.alpha > 0){
        this.alpha -=9;
          
    
    }
        
        if(this.alpha <= 0 ){
    this.alpha = this.alpha;

    
        }
    
*/


}




}


}



