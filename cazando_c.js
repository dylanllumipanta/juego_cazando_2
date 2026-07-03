let canvas = document.getElementById("areajuego");
let ctx = canvas.getContext("2d");

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

function moverIzquierda(){
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
}

function iniciarJuego(){

    gatoX=(canvas.width-ANCHO_GATO)/2;
    gatoY=(canvas.height-ALTO_GATO)/2;

    comidaX=canvas.width-ANCHO_COMIDA;
    comidaY=canvas.height-ALTO_COMIDA;

    graficarGato();
    graficarComida();
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