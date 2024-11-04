let imagen;
let cant = 2;

function preload() {
  imagen = loadImage('Data/5cuadrados.png');
}

function setup() {
  createCanvas(800, 400);
  cicloFor(cant);
  frameRate(15);
}

function draw() {
  background(255);

  // Dibujar los 4 cuadrados en el fondo
  push();
  rectMode(CENTER);
  dibujarCuadradosDelCentro(100);
  pop();
  

  image(imagen, 0, 0, 400, 400);

  // movemos los cuadrados
  translate(400, 0);
  cicloFor(2);

  // dbuja cuadrados aleatorios 
  let cuadradoAleatorioTamano = dibujarCuadradoAleatorio(100, 100);
  // devuelve un valor a la consola
  console.log("Tamaño del cuadrado aleatorio:", cuadradoAleatorioTamano);
  
  dibujarCuadradoInteractivo(200, 200);
}


//dibuja el tamaño dependiendo del movimiento de mouse
function dibujarCuadradoInteractivo(x, y) {
  let d = dist(600, 200, mouseX, mouseY);// Cálculo de la distancia
  push();
  rectMode(CENTER);
  fill(255);
  rect(x, y, d / 3, d / 3);
  pop();

  rect(195, 195, 10, 10);
}
//dibuja un cuadrado con color aleatorio y devuelve el tamañano
function dibujarCuadradoAleatorio(x, y) {
  let tamano = 200;
  fill(random(255), random(255), 0);
  rect(x, y, tamano, tamano);
  return tamano;// Devuelve el tamaño del cuadrado
}
