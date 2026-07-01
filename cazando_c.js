let canvas = document.getElementById("areajuego");
let ctx = canvas.getContext("2d");

function graficarGato(){

    let x = (canvas.width - 60)/2;
    let y = (canvas.height - 60)/2;

    ctx.fillStyle = "gray";
    ctx.fillRect(x,y,60,60);
}