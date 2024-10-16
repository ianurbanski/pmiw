let imagen1, imagen2, imagen3, imagen4, imagen5;
let i = 0
let texto1, texto2, texto3 ,texto4, texto5;

function preload() {
imagen1 = loadImage('data/imagen1.jpeg');
imagen2 = loadImage('data/2.jpeg');
imagen3 = loadImage('data/3.jpg');
imagen4 = loadImage('data/4.jpg');
imagen5 = loadImage('data/5.png');
texto0 = "Nuestro trabajo está basado \nen la saga de videojuegos Mortal Kombat"
texto1 = "se presenta el torneo mortal kombat \na nuestros combatientes"
texto2 = "En el universo de este videojuego existen diferentes\nreinos: Earthrealm, Netherrealm, Outworld y Edenia"
texto3 = "Earthrealm: el mundo de los humanos\nsimilar al que habitamos en la vida real"
texto4 = "Netherrealm: el inframundo, lugar de los muertos\ny demonios "
texto5 = "Outworld: una tierra oscura, reinada por Shao Kahn.\nAquí viven razas como los Tarkatanos y los Shokan."
}

function setup() {
createCanvas(640,480);
background(0);


image(imagen1,0,0,640,480);

}


function draw() {
   background(220);  
  mostrarContenido(i);  
  


}
