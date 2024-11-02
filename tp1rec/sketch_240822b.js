let imagen; // Declaración global de la imagen

function preload() {
  imagen = loadImage('Data/5cuadrados.png'); 
}

function setup() {
  createCanvas(800, 800);
  let cant = 2; // Declarada dentro de setup para evitar conflictos
  cicloFor(cant); // Llamamos la función con el valor de cant
  frameRate(15);
}

function draw() {
  background(255); 

  // Dibujar los 4 cuadrados en el fondo
  push();
  rectMode(CENTER);
  dibujarCuadradosDelCentro(100); // Cuadrados del fondo
  pop();
  
  // Dibujar la imagen encima
  image(imagen, 0, 0, 400, 400);

  // Aplicar una traslación para la cuadrícula adicional
  translate(400, 0);  
  cicloFor(2); // Dibujamos la cuadrícula nuevamente

  // Dibujar los cuadrados aleatorios e interactivos encima de todo
  let cuadradoAleatorioTamano = dibujarCuadradoAleatorio(100, 100); 
  console.log("Tamaño del cuadrado aleatorio:", cuadradoAleatorioTamano); // Ejemplo de uso del valor devuelto
  
  dibujarCuadradoInteractivo(200, 200);
}

/** 
 * Dibuja una cuadrícula de rectángulos según la cantidad indicada.
 */
function cicloFor(cantidad) {
  for (let x = 0; x < cantidad; x++) {
    for (let y = 0; y < cantidad; y++) {
      let mx = map(mouseX, 0, width, 0, 255);
      let my = map(mouseY, 0, height, 0, 255);
      
      fill(mx, 0, my);
      strokeWeight(25);
      rect(x * 200, y * 200, 200, 200);
    }
  }
}

/** 
 * Dibuja un cuadrado interactivo cuyo tamaño depende de la distancia al mouse.
 */
function dibujarCuadradoInteractivo(x, y) {
  let d = dist(600, 200, mouseX, mouseY); // Cálculo de la distancia
  push();
  rectMode(CENTER);
  fill(255);
  rect(x, y, d / 3, d / 3); // Tamaño proporcional a la distancia
  pop();
  
  rect(195, 195, 10, 10); // Cuadrado pequeño adicional
}

/** 
 * Dibuja un cuadrado con color aleatorio y devuelve su tamaño.
 */
function dibujarCuadradoAleatorio(x, y) {
  let tamano = 200; // Tamaño del cuadrado
  fill(random(255), random(255), 0); // Color aleatorio
  rect(x, y, tamano, tamano); // Dibuja el cuadrado en la posición indicada
  return tamano; // Devuelve el tamaño del cuadrado
}

/** 
 * Dibuja cuatro cuadrados centrados.
 */
function dibujarCuadradosDelCentro(tamaño) {
  rect(100, 100, tamaño, tamaño);
  rect(300, 100, tamaño, tamaño);
  rect(100, 300, tamaño, tamaño);
  rect(300, 300, tamaño, tamaño);
}
