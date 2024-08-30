function cuadradoCentro2(){
  fill(255);
 let d = dist(600,200,mouseX,mouseY);
 //usamos de nuevo let para una variable
 push();
  rectMode(CENTER);
  rect(200,200,d/3,d/3); 
 pop(); 
 
  rect(195,195,10,10);     
}
