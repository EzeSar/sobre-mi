var longAutito = 20;
var filTotal = 20; //numero total de filas
var colTotal = 40; //numero total de columnas
var tablero;
var ctx;

//posicion inicial del autito
var autitoX = 20;
var autitoY = 60;

var movX = 0; //movimiento del autito en coordenadas X
var movY = 0; //movimiento del autito en coordenadas Y

var finDelJuego = false;

window.onload = function () {
	// Seteo del alto y ancho del tablero
	tablero = document.getElementById("tablero");
	tablero.height = filTotal * longAutito;
	tablero.width = colTotal * longAutito;
	ctx = tablero.getContext("2d");

	document.addEventListener("keyup", cambiarDireccion); //movimientos
	// Seteo de la velocidad del autito
	setInterval(update, 300);
}

function update() {

	if (finDelJuego) {
		document.getElementById("h1").innerHTML="Fin del juego";
	} else {
	
		pintarBorde();

		pintarTablero();

		pintarMeta();	
		
		pintarNivel1();
	
		posicionAutito();
	
		chocado();

		pintarAutito();
	}

}

function pintarBorde(){
	//fondo verde y arriba despues va el tablero negro para la pista
	ctx.fillStyle = "rgb(0,255,0)";
    ctx.fillRect(0, 0, tablero.width, tablero.height);
}

function pintarTablero(){
    // tablero negro para la pista
	ctx.fillStyle = "black";
	ctx.fillRect(20, 20, tablero.width - 40, tablero.height - 40);
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
    autitoX += movX * longAutito; //actualizando la posicion del autito en las coordenadas X
    autitoY += movY * longAutito; //actualizando la posicion del autito en las coordenadas Y
}

//Deteccion de colision con los bordes, obstaculos o con la meta
function chocado() {
    var autito = ctx.getImageData(autitoX, autitoY, longAutito, longAutito);

    var pixels = 400; //Porque la imagen es de 20x20 pixels
    var elementos = 400*4; //Porque cada pixel tiene 4 bytes (RGBA)

    //Recorro en busca del verde (borde/obstaculo) o del blanco (meta)
    for (var i = 0; i < elementos; i += 4){

        //verde (0, 255, 0)
        if (autito.data[i] == 0 && autito.data[i+1] == 255 && autito.data[i+2] == 0){
			document.getElementById("h2").innerHTML="PERDISTE!!!";
            finDelJuego = true;
            break;
        }

        //blanco (255, 255, 255)
        if (autito.data[i] == 255 && autito.data[i+1] == 255 && autito.data[i+2] == 255){
            document.getElementById("h2").innerHTML="GANASTE!!!";
			finDelJuego = true;
            break;
        }

    }

}

//pintar el autito
function pintarAutito(){
    ctx.fillStyle = "rgb(255,0,0)";
	ctx.fillRect(autitoX, autitoY, longAutito, longAutito);
}

//Pintar el pasto interno y obstaculos NIVEL 1
function pintarNivel1(){
	//pasto
    ctx.fillStyle = "rgb(0,255,0)";
    ctx.fillRect(120, 120, tablero.width - 220, tablero.height - 220);
	//obstaculos
	
}

//pintar la meta de llegada
function pintarMeta(){
	//linea verde
    ctx.fillStyle = "rgb(0,255,0)";
    ctx.fillRect(20, 120, 100, 20);
	//cuadricula
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(20, 140, 100, 10);
	ctx.fillRect(20, 150, 10, 10);
	ctx.fillRect(40, 150, 10, 10);
	ctx.fillRect(60, 150, 10, 10);
	ctx.fillRect(80, 150, 10, 10);
	ctx.fillRect(100, 150, 10, 10);
	ctx.fillRect(30, 160, 10, 10);
	ctx.fillRect(50, 160, 10, 10);
	ctx.fillRect(70, 160, 10, 10);
	ctx.fillRect(90, 160, 10, 10);
	ctx.fillRect(110, 160, 10, 10);
	ctx.fillRect(20, 170, 10, 10);
	ctx.fillRect(40, 170, 10, 10);
	ctx.fillRect(60, 170, 10, 10);
	ctx.fillRect(80, 170, 10, 10);
	ctx.fillRect(100, 170, 10, 10);
	ctx.fillRect(30, 180, 10, 10);
	ctx.fillRect(50, 180, 10, 10);
	ctx.fillRect(70, 180, 10, 10);
	ctx.fillRect(90, 180, 10, 10);
	ctx.fillRect(110, 180, 10, 10);
	ctx.fillRect(20, 190, 100, 10);
}

//boton de reinicio
function reiniciar(){
	location.reload();
}
