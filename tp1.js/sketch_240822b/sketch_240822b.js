/*video youtube 
https://youtu.be/LQbUR0AJ_8M
ian urbañski
120259/3*/




function preload(){
 imagen= loadImage('Data/5cuadrados.png');
 //todas las imagenes y las tipografias se pre-cargan con preload
}



function setup() {
  //no usaremos mas void, si no que se intercambiaran por function
createCanvas(800,800);
//no se usa mas size, se intercambia por createCanvas
}


function draw() {

  background(255);
  image (imagen,0,0,400,400);
  
  translate(400,0);
  cicloFor();
  fill(255);
 
  
  push();
  rectMode(CENTER);
  CuadradosDelCentro();
  pop();
  
  cuadradoCentro();
  cuadradoCentro2();
}



//no se usara println()
