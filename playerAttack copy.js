class Attack2{
constructor(){
this.alpha = 255;
this.stretch = 0;
this.size = 3;
this.cooldown = 0;
this.alpha2 = 255;
this.r = map(sin(frameCount + millis()/1000), -1, 1, 0, 255);
this.g = map(i + millis()/1000, 0, 20, 0,255 );
this.b = map(cos(frameCount + millis()/1000), -1, 1, 255, 0);
this.ultimate = 0;
this.ultTime = 5;
for (var i = 0; i < elixrNum; i++) {
      
this.energy = elixr[i].getEnergy();
    }

for (var i = 0; i < player.length; i++) {
      
this.posY = player[i].getVal();
this.posX = player[i].getVal2();
  }


  this.y2 = 0;
  this.spread = width;

}



fade(){

  if(this.alpha >=255){
  this.alpha -= 20;
  
  
  
  } else if(this.alpha <= 0){
  this.alpha = 0;
  
  
  }
  
  }
  
  displayEnergy(){

    for (var i = 0; i < elixrNum; i++) {
      
      this.energy = elixr[i].getEnergy();
          }
for (var i = 0; i < player.length; i++) {
      
  this.eY = player[i].getVal();
  this.eX = player[i].getVal2();
    }
    push();
rectMode(CENTER);
fill(255);
rect(this.eX+4.5,this.eY+28,34,11)
pop();
    push();
    fill(30,250,230);

  rectMode(CENTER);


rect(this.eX+4.5,this.eY+28,this.energy/10,7)

pop();









  }



attack(){


for (var i = 0; i < player.length; i++) {
      
  this.posY = player[i].getVal();
  this.posX = width/2;
    }





  if(keyIsDown(13)){
    if(this.energy <= 0){
      this.energy = 0;

      translate(random(0,0), random(0,0));
    }
if(this.energy > 0 && this.energy <=400  && this.cooldown <= 0){

  translate(random(0,5), random(0,5));

this.energy -= 2;


    this.y2 = sin(frameCount /2) * 20;

 stretch = width;
 push();
 this.alpha = 255;
 rectMode(CENTER);
 fill(255,255,255, this.alpha);
 rect(this.posX,this.posY,stretch,this.y2);

 print('deez nuts'); 
 pop();
 push();
 for(i = 0; i < 10; i++){
   fill(255,255,100,10);
   rectMode(CENTER);
   rect(this.posX,this.posY, stretch, this.y2*3);
 }

pop();
push();
imageMode(CENTER);
image(img,this.posX + 150,this.posY,1000,192);
pop();
}

  } else if(keyIsDown(13) == false || this.cooldown > 0) {
    translate(random(0,0), random(0,0));
this.y2 = 0; 

  



}

if(keyIsDown(83) && this.energy >= 200 && this.ultimate >= 100){


  this.size += 2.5;
  
push();
rectMode(CENTER)
fill(250,200,100, 90);
rect(this.posX, this.posY, width, this.size)
pop();
  for (var i = 0; i < elixrNum; i++){

this.el = elixr[i].energy;
  }
 if(this.el > 0){

this.cooldown = 0;

 } if(this.el <= 0){
   this.cooldown += 2;
   for (var i = 0; i < elixrNum; i++){

    elixr[i].display();
    }
 }
 if(this.cooldown == 50){
   this.cooldown = 50;
 }



if(this.size >= 200){
  this.size = 200;
  if(this.energy > 0 && this.energy <=400  && this.cooldown <= 0){

    translate(random(0,5), random(0,5));
    
    }
  
    if(this.energy <= 0){
      this.energy = 0;
  
      translate(random(0,0), random(0,0));
    }
  this.energy -= 2;


  this.y2 = sin(frameCount /2) * 20;
  this.r = map(sin(frameCount), -1, 1, 0, 255);
  this.g = map(i, 0, 20, 0,255 );
  this.b = map(cos(frameCount), -1, 1, 255, 0);

    stretch = width;

    push();
    this.alpha = 255;
    rectMode(CENTER);
    fill(20,200,240, this.alpha);
    rect(this.posX,this.posY,stretch,this.y2 + 300 );
    
    print('deez nuts'); 
    pop();
   
    for(i = 0; i < 10; i++){
      push();
     fill(255,255,255,3);
     rectMode(CENTER);
     rect(this.posX,this.posY, stretch, this.y2*1.5);
    
    
    pop();


  }

}



} else if(keyCode == (83) && this.energy <200 ){
  for (var i = 0; i < player.length; i++) {
      
    this.posY = player[i].getVal();
    this.posX = player[i].getVal2();
      }

     


      this.alpha2 = 255;
push();
fill(255,0,0,this.alpha2);
text("not enough energy!",this.posX, this.posY - 40)
if(this.alpha2 >= 255){
  this.alpha2 -= 10;
  
  } else if(this.alpha2 <= 0){
    this.alpha2 = 0;
  }
pop();



} else if(keyCode == (83) && this.ultimate <100 ){
  for (var i = 0; i < player.length; i++) {
      
    this.posY = player[i].getVal();
    this.posX = player[i].getVal2();
      }

     


 
push();
fill(255,0,0,this.alpha2);

if(this.alpha2 >= 255){
  this.alpha2 -= 10;
  
  } else if(this.alpha2 <= 0){
    this.alpha2 = 0;
  } 
}
else {

  this.size =0;
  
} 


push();
fill(255);
textSize(20);
text(this.size, 1000,200)
pop();

}


ult(){
  push();
  fill(255);
  textSize(40);
  text(this.ultimate + "%",width - 70, height/2 - 150 )
  rect(width - 70, height/2 - 140, 40,this.ultimate/0.33333333333);
  pop();
  push();
  fill(255);
  textSize(30);
  text(this.ultTime, width - 70, height - 150)
  pop();
if(frameCount % 60 == 0 && this.ultTime > 0){
this.ultTime--;


}
if(this.ultTime == 3){
this.ultimate += 0.05;

} if(this.ultTime == 0){

  this.ultTime = 5;
}

if(this.ultimate >= 100){
  this.ultimate = 0;
}

}



charge(){
  for (var i = 0; i < elixrNum; i++){

    this.el = elixr[i].energy;
      }

    

  this.y2 = sin(frameCount /2) * 30;
  for (var i = 0; i < player.length; i++) {
      
    this.posY = player[i].getVal();
    this.posX = player[i].getVal2();
      }
      if((keyIsDown(67)) && keyIsDown(13) == false){
        for (var i = 0; i < elixrNum; i++) {
      
          this.energy = elixr[i].getEnergy();
          this.energy += 2;
this.el += 2;
              }
translate(random(0,5),random(0,5))


for (let i = 0; i<10; i++){

  push();
  rectMode(CENTER)
  fill(100,250,255,10)
  rect(this.posX + 5,height/2,this.y2*2,height)
pop();

}
push();
rectMode(CENTER)
fill(100,250,255)
rect(this.posX + 5,height/2,this.y2,height)

pop();



}
}

getVal1(){
return this.posX;
}
getVal2(){

return this.posY;

}
getVal3(){

return this.y2

}





}

