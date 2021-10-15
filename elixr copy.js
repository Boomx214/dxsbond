class Elixr{
constructor(){
this.x = random(1000, width - 70)
this.y = random(60, height - 40)
this.size = random(7,20);

this.energy = 300;
this.elixrCount = 4;
this.isDisplaying = false;

}


display(){
    if(eTime <=0){
this.isDisplaying = true;


    }
push();
textSize(60);
fill(255);
    text(this.elixrCount, 1000,50);
    pop();
    push();
    fill(30,230,200)
    //circle(this.x,this.y,this.size)
pop();


if(keyIsDown(13)){
    if(this.energy <= 0){
      this.energy = 0;
      
    }
if(this.energy > 0 && this.energy <=400 ){



this.energy -= 2;}



} 

if(keyIsDown(67) && this.energy <= 300){
this.energy += 2;

}


if(this.energy <= 0){
//this.energy +=2;

}

}
checkEnergy(){

if(this.energy == 300){
eTime =2;

} else if(this.energy <=0){
eTime = 0;

}


}

checkGrab(){

    for (var i = 0; i < player.length; i++) {
      
      
        this.playerX = player[i].getVal2();
        this.playerY = player[i].getVal();
        
      }
    var grabElixr = collideRectCircle(this.playerX, this.playerY, 20,20,this.x,this.y,this.size)
    if(grabElixr && this.energy >= 300){
        this.size = 0;
        
        this.energy = this.energy;
        
        }
if(grabElixr){
this.size = 0;
//this.x = width + 50;
this.energy = 300;

} else {
    this.energy = this.energy;
}
if(grabElixr && this.size ==0){
    
    
    this.energy = this.energy;
    
    } 

             
    

}


reloadEnergy(){
    //var grabElixr = collideRectCircle(this.playerX, this.playerY, 20,20,this.x,this.y,this.size)

}

getEnergy(){
return this.energy;


}

}


function circle(x,y,r){
ellipse(x,y,r);



}


