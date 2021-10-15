class Terrain{
constructor(){

this.noiseScale=0.02;
this.noiseScale2=random(0.02, 0.06);
this.move = 0;



}
display(){
    for (let x=0; x < width; x++) {
        this.move += 0.001
      this.noiseVal = noise((width,x + this.move)*this.noiseScale, 20*this.noiseScale);
       this.noiseVal3 = noise((width,x + (this.move) * 2)*this.noiseScale2, 20*this.noiseScale2);
        this.noiseVal2 = noise((width,x + (this.move) * 4)*this.noiseScale2, 20*this.noiseScale2);
        this.noiseVal4 = noise((width,x + this.move * 6)*this.noiseScale2, 20*this.noiseScale);
      noStroke();
        push();
      stroke(255);
      line(x, height/2+this.noiseVal*30 * 2 +160, x, height - 90);
      pop();
        push();
      stroke(200);
      line(x, height/2+this.noiseVal3*30 * 2 + 180, x, height - 90);
      pop();
      stroke(100);
      line(x, height/2+this.noiseVal2*80 + 200, x, height);
      push();
      stroke(60);
      line(x, height/2+this.noiseVal4*80 + 250, x, height);
       pop();
     
      
    }



}

}