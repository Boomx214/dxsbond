class StartScreen{
constructor(){
this.button;
this.fadeAmount;
this.fade = 255;
this.bpm
this.beat
this.timer = 25;
this.zoom = 30;
this.zoomAmount = 0;
}
display(){
if(frameCount % 60 == 0 && this.timer > 0 ){
this.timer--;

}
push();
fill(255);
text(this.timer, 20, 20)
pop();


    this.bpm = millis()/ 800;
    text(int(this.bpm),width/2, height/2);
    if(int(this.bpm) % 1 == 0 && int(this.bpm) !== 0){
      this.beat = frameCount % 24 / 2
   
      
    } else {
      this.beat = 0;
      
    }

push();
rectMode(CENTER);
textAlign(CENTER, CENTER);
fill(255);
textSize(100 - this.beat)
text("idk what to name this thing", width/2 + 10, 200)

pop();
push();
fill(255)
text("deez nuts lol", 150, 300)
pop();
push();
rectMode(CENTER);
//fill(0);
angleMode(CENTER);
textSize(35);
textAlign(CENTER,CENTER);
fill(255,255,255, this.fade)
text("down arrow to begin", width/2, height/2 + 150);
/*
this.button = createButton("Down arrow to Start");
this.button.style("background-color", "black");
this.button.style("color", "white");
this.button.style("font-size", "2rem");
this.button.size(200,90);
this.button.position(width/2-80, height/2 + 200);
this.button.style("border", "0.5rem solid #FFFFFF");
*/
//this.button.style( "transition-duration:", "0.4s;")
//this.button.style("hover:", "background-color", "white");
//this.button.hover("background-color:", "#4CAF50", "color:", "white;")
   // rect(width/2, height/2 + 200, 200,90);
pop();
if(this.fade <= 0 ){
    this.fadeAmount = 2;
    
    
    } 
    if(this.fade >= 255){
    this.fadeAmount = -2
    
    }
    
    if(int(this.zoom) <= 20 ){
        this.zoomAmount = 0.30;
        
        
        } 
    if(int(this.zoom) >= 30){
        this.zoomAmount = -0.30
        
        }
    
    this.fade += this.fadeAmount;
if(keyCode == DOWN_ARROW){
mode = 1;


}


}

begin(){
fill(255,255,255,this.fade)
push();
textSize(30);
textAlign(CENTER,CENTER);
text("up arrow to begin", width/2, height/2);
pop();


if(this.fade <= 0 ){
this.fadeAmount = 2;


} 
if(this.fade >= 255){
this.fadeAmount = -2

}

if(int(this.zoom) <= 20 ){
    this.zoomAmount = 0.30;
    
    
    } 
if(int(this.zoom) >= 30){
    this.zoomAmount = -0.30
    
    }

this.fade += this.fadeAmount;
this.zoom += this.zoomAmount;

if(keyCode == UP_ARROW){
mode = 0;


}

}

music(){
if(keyCode == UP_ARROW){

if(enter.isPlaying()){
enter.pause();

} else {
    enter.play();
}

}




}


}
