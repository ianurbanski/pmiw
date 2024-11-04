//cambia el tamaño y el color del cuadrado

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
