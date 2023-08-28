var autitoSize = 20;
var filTotal = 20; //numero total de filas
var colTotal = 40; //numero total de columnas
var tablero;
var ctx;

//posicion inicial del autito
var autitoX = 0;
var autitoY = 40;

var movX = 0; //movimiento del autito en coordenadas X
var movY = 0; //movimiento del autito en coordenadas Y

var autito;

var finDelJuego = false;

window.onload = function () {
	// Seteo del alto y ancho del tablero
	tablero = document.getElementById("tablero");
	tablero.height = filTotal * autitoSize;
	tablero.width = colTotal * autitoSize;
	ctx = tablero.getContext("2d");

	document.addEventListener("keyup", cambiarDireccion); //movimientos
	// Seteo de la velocidad del autito
	setInterval(update, 300);
}

function update() {
	if (finDelJuego) {
		return;
	}

	pintarTablero();
	
    pintarBorde1();
    pintarBorde2();
    pintarMeta();

	posicionAutito();

	afuera(); 
	chocado();
    
    pintarAutito();

}

function pintarTablero(){
    // Background del juego
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, tablero.width, tablero.height);
}

// Movimiento del autito - usamos addEventListener
function cambiarDireccion(e) {
	if (e.code == "ArrowUp" && movY != 1) {
		// si se presiona la flecha arriba con este if...
		// autito no se va a mover en la direccion contraria
		movX = 0;
		movY = -1;
	}
	else if (e.code == "ArrowDown" && movY != -1) {
		//si se presiona flecha abajo
		movX = 0;
		movY = 1;
	}
	else if (e.code == "ArrowLeft" && movX != 1) {
		//si se presiona flecha izquierda
		movX = -1;
		movY = 0;
	}
	else if (e.code == "ArrowRight" && movX != -1) {
		//si se presiona flecha derecha
		movX = 1;
		movY = 0;
	}
}

//actualizar posicion del autito
function posicionAutito(){
    autitoX += movX * autitoSize; //actualizando la posicion del autito en las coordenadas X
    autitoY += movY * autitoSize; //actualizando la posicion del autito en las coordenadas Y
    autito = ctx.getImageData(autitoX, autitoY, autitoSize, autitoSize);
}

function afuera() {
	if (autitoX < 0
		|| autitoX > colTotal * autitoSize
		|| autitoY < 0
		|| autitoY > filTotal * autitoSize) {
		
		// condicion afuera del tablero
		finDelJuego = true;
		alert("PERDISTE!!!");
	}
}

//Deteccion de colision con los bordes, obstaculos o con la meta
function chocado() {

    var pixels = 400; //Porque la imagen es de 20x20 pixels
    var elementos = 400*4; //Porque cada pixel tiene 4 bytes (RGBA)

    //Recorro en busca del rojo (borde/obstaculo) o del blanco (meta)
    for (var i = 0; i < elementos; i += 4){

        //rojo (255, 0, 0)
        if (autito.data[i] == 255 && autito.data[i+1] == 0 && autito.data[i+2] == 0){
            //var mensaje = "¡Lo siento! Has chocado con un asteroide.Pincha AQUÍ para volver a intentarlo.";
            //finalizar(mensaje);
            finDelJuego = true;
            alert("chocaste!")
            break;
        }

        //blanco (255, 255, 255)
        if (autito.data[i] == 255 && autito.data[i+1] == 255 && autito.data[i+2] == 255){
            //var mensaje = "¡Enhorabuena! Has llegado a la base.Pincha AQUÍ para volver a jugar.";
            //finalizar(mensaje);
            alert("llegaste!")
            break;
        }

    }

}

//pintar el autito
function pintarAutito(){
    ctx.fillStyle = "blue";
	ctx.fillRect(autitoX, autitoY, autitoSize, autitoSize);
}

//Pintar los bordes internos y obstaculos
function pintarBorde1(){
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(0, 100, 100, 20);
    ctx.closePath();
    ctx.fill();
}

function pintarBorde2(){
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(100, 100, tablero.width - 200, tablero.height - 200);
    ctx.closePath();
    ctx.fill();
}

function pintarMeta(){
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.rect(0, 120, 100, 20);
    ctx.closePath();
    ctx.fill();
}
