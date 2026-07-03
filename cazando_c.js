let canvas = document.getElementById("areajuego");
let ctx = canvas.getContext("2d");

let puntaje=0;
let tiempo=10;
let intervaloTiempo;

let gatoX=0;
let gatoY=0;

let comidaX=0;
let comidaY=0;

const ALTO_GATO=60;
const ANCHO_GATO=60;

const ALTO_COMIDA=25;
const ANCHO_COMIDA=25;

function graficarGato(){

    graficarRectangulo(
        gatoX,
        gatoY,
        ANCHO_GATO,
        ALTO_GATO,
        "gray"
    );
}

function graficarComida(){

    graficarRectangulo(
        comidaX,
        comidaY,
        ANCHO_COMIDA,
        ALTO_COMIDA,
        "green"
    );
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function detectarColision(){
    if(gatoX + ANCHO_GATO > comidaX &&
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoY + ALTO_GATO > comidaY &&
        gatoY < comidaY + ALTO_COMIDA
    ){  puntaje = puntaje + 1;
        mostrarEnSpan("puntos", puntaje);
        aparecerComida();
        mostrarEnSpan("tiempo", tiempo);
        intervaloTiempo = setInterval(restarTiempo,3000);
    }
}

function restarTiempo(){
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);
    if(tiempo == 0){clearInterval(intervaloTiempo);
        alert("TIEMPO TERMINADO");
    }
}

function aparecerComida(){
    comidaX = generarAleatorio(0,canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0,canvas.height - ALTO_COMIDA);
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function moverIzquierda(){
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha(){
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba(){
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo(){
    gatoY = gatoY + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function iniciarJuego(){

    gatoX=(canvas.width-ANCHO_GATO)/2;
    gatoY=(canvas.height-ALTO_GATO)/2;

    comidaX=canvas.width-ANCHO_COMIDA;
    comidaY=canvas.height-ALTO_COMIDA;

    graficarGato();
    graficarComida();
    aparecerComida()
}

function graficarRectangulo(
    x,
    y,
    ancho,
    alto,
    color
){

    ctx.fillStyle=color;

    ctx.fillRect(
        x,
        y,
        ancho,
        alto
    );
}