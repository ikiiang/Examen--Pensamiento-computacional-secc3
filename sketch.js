let estado = 0;

let sonido;

let cantidad = 12;
let separacion = 20;

let clicks = 0;

// espacio controla el tamaño
let circulosPequenos = 1;

let fondoR = 255;
let fondoG = 255;
let fondoB = 255;

function preload(){
  sonido = loadSound("levelup.mp3");
}

function setup(){
  createCanvas(600,600);
  ellipseMode(CENTER);
}

function draw(){

  if(estado == 0){
    pantallaInicio();
  }
  else if(estado == 1){
    juego();
  }
  else if(estado == 2){
    pantallaFinal();
  }
}

//inicio

function pantallaInicio(){

  background(0);

  fill(255);
  textAlign(CENTER,CENTER);

  textSize(60);
  text("OP ART GAME", width/2, height/2 - 60);

  textSize(20);
  text("ENTER para comenzar", width/2, height/2);
}
// juego

function juego(){

  background(fondoR,fondoG,fondoB);

  let intensidad = map(clicks, 0, 20, 1, 3);
  let deformacionNivel = map(clicks, 0, 20, 10, 80);

  for(let x = 80; x < width; x += 120){
    for(let y = 80; y < height; y += 120){

      push();

      translate(x,y);

      let distancia = dist(x,y,mouseX,mouseY);
      let angulo = map(distancia,0,width,1,-1);

      rotate(angulo);

      for(let i = cantidad; i > 0; i--){

        let baseTamano = i * separacion * intensidad;

        // tecla espacio afecta el tamaño afecta el tamaño
        let tamano = baseTamano * circulosPequenos;

        let deformX = map(mouseX,0,width,-deformacionNivel,deformacionNivel);
        let deformY = map(mouseY,0,height,deformacionNivel,-deformacionNivel);

        let ancho = tamano + deformX;
        let alto = tamano + deformY;

        if(i % 2 == 0){
          fill(0);
        } else {
          fill(255);
        }

        stroke(0);

        if(distancia < 250){
          ellipse(0,0,ancho*0.5,alto*0.5);
        } else {
          ellipse(0,0,tamano,tamano);
        }
      }

      pop();
    }
  }

  fill(0);
  noStroke();

  textAlign(LEFT,TOP);

  textSize(20);
  text("Nivel: " + clicks,20,20);

  textSize(14);
  text("SPACE = achicar",20,50);

  textSize(14);
  text("ENTER = terminar",20,70);
}

// click

function mousePressed(){

  if(estado == 1){

    clicks++;

    fondoR = random(255);
    fondoG = random(255);
    fondoB = random(255);

    sonido.play();
  }
}

// teclado
function keyPressed(){

  if(estado == 0 && keyCode === ENTER){
    estado = 1;
  }

  else if(estado == 1 && keyCode === ENTER){
    estado = 2;
  }

  else if(estado == 2 && keyCode === ENTER){

    estado = 0;
    clicks = 0;

    circulosPequenos = 1;

    fondoR = 255;
    fondoG = 255;
    fondoB = 255;
  }

  // SPACE encoge círculos
  if(estado == 1 && key === " "){
    circulosPequenos *= 0.9;
  }
}

// pantalla final

function pantallaFinal(){

  background(0);

  fill(255);     
  textAlign(CENTER,CENTER);

  textSize(50);
  text("OP ART COMPLETADO", width/2, height/2 - 80);

  textSize(28);
  text("Clicks: " + clicks, width/2, height/2);

  textSize(16);
  text("ENTER para reiniciar", width/2, height/2 + 80);
}                          