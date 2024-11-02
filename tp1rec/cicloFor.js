//las variables como int o float se intercambian por let

let cant = 2;

function cicloFor(){
      for(let x=0; x<cant; x++) {
    for(let y=0; y<cant; y++) {
      strokeWeight(25);
      let mx = map(mouseX,0,width,0,255);
 let my = map(mouseY, 0 ,height,0,255);
fill(mx, 0, my);
     rect(x*200,y*200,200,200);
       
    }
  }
}  
