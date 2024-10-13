function keyPressed() {
  i++;  // Incrementamos el contador
  if (i > 5) {
    i = 0;  // Volvemos al inicio si llega a 4
  }
}

function mostrarContenido(index) {
  if (index === 0) {
    image(imagen1, 0, 0, 640, 480);
    fill(0)
    rect(0,0,640,100);
    fill(255);  // Color del texto (negro)
    textSize(25);  // Tamaño de fuente
    text(texto0, 10, 40);  // Dibujar el texto en la pantalla
  }
     if (index === 1) {
    image(imagen1, 0, 0, 640, 480);
    fill(0)
    rect(0,0,640,100);
    fill(255);  // Color del texto (negro)
    textSize(25);  // Tamaño de fuente
    text(texto1, 10, 40);  // Dibujar el texto en la pantalla
  } 
  
    else if (index === 2) {
    image(imagen2, 0, 0, 640, 480);
     fill(0)
    rect(0,0,640,100);
    fill(255);  // Color del texto (negro)
    textSize(25);  // Tamaño de fuente
    text(texto2, 10, 40);  // Dibujar el texto en la pantalla
  } 
  
  
  else if (index === 3) {
    image(imagen3, 0, 0, 640, 480);
    fill(0)
    rect(0,380,640,100);
    fill(255);  // Color del texto (negro)
    textSize(25);  // Tamaño de fuente
    text(texto3, 10, 420);  // Dibujar el texto en la pantalla
  }
  
  
  else if (index === 4) {
    image(imagen4, 0, 0, 640, 480);
    fill(0)
    rect(0,380,640,100);
    fill(255);  // Color del texto (negro)
    textSize(25);  // Tamaño de fuente
    text(texto4, 10, 420);  // Dibujar el texto en la pantalla
  }
  else if (index === 5) {
    image(imagen5, 0, 0, 640, 480);
    fill(0)
    rect(0,380,640,100);
    fill(255);  // Color del texto (negro)
    textSize(25);  // Tamaño de fuente
    text(texto5, 10, 415);  // Dibujar el texto en la pantalla
  }
}
