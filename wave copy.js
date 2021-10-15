//creating wave function, could also work as a class 

function Wave() {
  

    //initializing bunch of variables
    //meant for x position and creating the actual waves, needs for loop to work so only declared here
    this.height2 = random(80, height - 100);    
    this.x;
        this.laserX; 
        this.laserY;
        this.laserHeight;
      //spacing between dots (randomized)
        this.space = random(10, 30);
      // altitiude of the waves
        this.altitude = random(1, 6);
      //color
        this.c = random(255);
        this.d = 255;
        this.alpha = 0;
      //x position of waves
        this.num = random(15,50);
      //altitude once more
        this.amp = random(10, 200);
      //adds on to the sine of altitude 
        this.cf = random(2, 10);
        this.spread = random(15,20);
      //i have no clue i just saw someone else do these, assuming it adds onto the sine
        this.theta = random(90);
        this.delta = random(1, 5);
      this.helth = color(30,70,30)
      // size of ellipses 
        this.r = random(10, 30);
    this.eHealth = 4000;
    this.damage = 0;
    this.timer = 2;
    this.end  = 4;
    this.healthBar = 342;
    this.counter = 0;
    
    //display function
      
      this.display = function() {
    
    //fill random color from 0 to 255
        fill(this.c);
        //stroke is zero
        stroke(0);
        
        //loop I made to be able to use this.x to create a wave 
        for (var i = 0; i < this.num; i++) {
        //another basic ass for loop for number of waves
    
         //this.s x = sine which makes a wave
          this.x = sin(i * 50 + millis()/600) * 20;
          //rect(i * 20 - this.x, this.amp * sin(radians(i * this.cf + this.theta)) + height/2, this.r, this.r);
          noStroke();
          ellipse(i * this.spread - this.x, this.amp * sin(radians(i * this.cf + this.theta)) + this.height2, this.r);
          push();

          fill(this.d,0,0,this.alpha);
          ellipse(i * 40 - this.x, this.amp * sin(radians(i * this.cf + this.theta)) + height/2, this.r);
          pop();
        }
        
    
        
    
    //once again no fuckin clue but setting them equal probably means theyre for the waves (might change em to see what they do)
        this.theta += this.delta;
      }
      //returns value of the ellipses (not important since i'm not adding extra elements )
      this.getVal = function() {
        return [this.r / 2 * (this.num - 1), this.amp * sin(radians((this.num - 1) * this.cf + this.theta)) + this.height2];
      }
    
    
this.checkCollision = function(){

  for (var i = 0; i < player.length; i++) {
    this.playY = player[i].getVal();
  }
  for (var i = 0; i < elixrNum; i++){

   this.e = elixr[i].energy;
        }      
        
        for (var i = 0; i < attackNum2; i++) {

          this.cool = attackz[i].cooldown;
        }
  if(keyIsDown(13)){
    if(this.e > 0 && this.cool <= 0){
      this.eHealth -= 5;

    }  else if(this.e <= 0 || this.cool > 0){
this.eHealth -= 0;


    }

    

//this.healthBar -= 0.057
//print(this.playY)

  } else if(keyIsDown(13) && this.playY < 20 || this.playY > height - 10){
//this.eHealth = this.eHealth;


  } else {
this.eHealth = this.eHealth;

  }


  if(this.eHealth/8.69565217 <=0){
this.helth = 0;
this.healthBar = 0;
this.eHealth = 0;

push();
fill(200);
rectMode(CORNER);
strokeWeight(10);
//rect(0,0,width,height);
pop();
push();
textSize(90);
fill(0);



//text("PHASE ONE: CLEARED", 150, 250);
pop();
  }

  if(keyIsDown(83)){
this.counter += 2.5;


  } else if(keyIsDown(83) == false){
this.counter = 0;



  }
  
  if(this.counter >= 200){
this.eHealth -= 10;

  }


  




  for (var i = 0; i < attackNum; i++) {


    this.laserX = attackz[i].getVal1();
    this.laserY = attackz[i].getVal2();
    this.laserHeight = attackz[i].getVal3();
    this.waveY = [this.r / 2 * (this.num - 1), this.amp * sin(radians((this.num - 1) * this.cf + this.theta)) + height / 2];
      }
  var collideOrBruh = collideRectRect(this.laserX, this.laserY, stretch, this.y2, this.x, this.waveY, this.r,this.r);

  
  if(collideOrBruh){

//this.eHealth = this.eHealth - damage;
//this.healthBar -= this.damage - 2.64
  
  }



  }



    
this.displayEnemyHealth = function(){
push();
fill(0);
strokeWeight(4);
stroke(0);
rect(135,16,461,40)
pop();

  push();
fill(this.helth);

  rect(137.5,18.5,this.eHealth/8.69565217,35)
  pop();
push();
fill(255);
  textSize(40);

  text("health: " + this.eHealth + "/" + "4000", 10,50);
  
pop();




this.endPhase = function(){
if(this.eHealth <= 0){
if(frameCount % 60 == 0 && this.end < 0){

this.end--;

}
text(this.end, 1100, 400)

if(this.end == 0){


  phaseTwo = true;
}




}


}

    
    }

    
    
    
    
    
    
    
  }
    
    
    