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

	pintarBorde();

	pintarTablero();

	pintarAutito();

	pintarMeta();	
		
	pintarNivel1();

	document.addEventListener("keyup", cambiarDireccion); //movimientos
	// Seteo de la velocidad del autito
	setInterval(update, 400);
}

function update() {

	if (finDelJuego) {
		document.getElementById("h1").innerHTML="Fin del juego";
	} else {
		borrarAutito();
	
		posicionAutito();
	
		choque();

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
	ctx.fillStyle = "rgb(0,0,0)";
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
function choque() {
    var autito = ctx.getImageData(autitoX, autitoY, longAutito, longAutito);

    var pixels = longAutito*longAutito; //Porque la imagen es un cuadrado
    var elementos = pixels*4; //Porque cada pixel tiene 4 byte (RGBA)

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

//borrar el autito antes de moverlo
// (está idea la saqué de https://www.jairogarciarincon.com/clase/videojuego-sencillo-con-html5)
// para evitar volver a pintar todo el tablero, pasto, obstaculos y meta
// (y así poder pintar aleatoriamente los obstaculos que de la otra forma no se podía)
function borrarAutito(){
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(autitoX, autitoY, longAutito, longAutito);
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
    ctx.fillRect(120, 120, tablero.width - 240, tablero.height - 240);
	
	//obstaculos
	pintarObstaculos(5);
	
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

//pintar obstaculos aleatoriamente, evitando el autito, la meta y el pasto
function pintarObstaculos(cant){
	//obstaculos verticales
    for (i=0; i<cant; i++){//repite hasta alcanzar la cantidad de ostaculos pedidos

		do{//repite hasta encontrar area no ocupada
			var x = Math.random() * tablero.width;
        	var y = Math.random() * tablero.height;
			var obstaculo = ctx.getImageData(x, y, 60, 60);//crea una imagen de 60x60 pixeles
			var areaOcupada = false;

			for (var byte = 0; byte < 14400; byte += 4){//14400 es 60x60pixeles x 4byte
				//verde (0, 255, 0)
				if (obstaculo.data[byte] == 0 && obstaculo.data[byte+1] == 255 && obstaculo.data[byte+2] == 0){
					areaOcupada = true;
					break;
				}
				//rojo (255, 0, 0)
				if (obstaculo.data[byte] == 255 && obstaculo.data[byte+1] == 0 && obstaculo.data[byte+2] == 0){
					areaOcupada = true;
					break;
				}
				//blanco (255, 255, 255)
				if (obstaculo.data[byte] == 255 && obstaculo.data[byte+1] == 255 && obstaculo.data[byte+2] == 255){
					areaOcupada = true;
					break;
				}
			}

		} while (areaOcupada);

        //Pinto el obstaculo, dentro del area de 60x60
        ctx.fillStyle = "rgb(0,255,0";
        ctx.fillRect(x+25, y+5, 10, 50);

	}
//obstaculos horizontales
	for (i=0; i<cant; i++){//repite hasta alcanzar la cantidad de ostaculos pedidos

		do{//repite hasta encontrar area no ocupada
			var x = Math.random() * tablero.width;
        	var y = Math.random() * tablero.height;
			var obstaculo = ctx.getImageData(x, y, 60, 60);//crea una imagen de 60x60 pixeles
			var areaOcupada = false;

			for (var byte = 0; byte < 14400; byte += 4){//14400 es 60x60pixeles x 4byte
				//verde (0, 255, 0)
				if (obstaculo.data[byte] == 0 && obstaculo.data[byte+1] == 255 && obstaculo.data[byte+2] == 0){
					areaOcupada = true;
					break;
				}
				//rojo (255, 0, 0)
				if (obstaculo.data[byte] == 255 && obstaculo.data[byte+1] == 0 && obstaculo.data[byte+2] == 0){
					areaOcupada = true;
					break;
				}
				//blanco (255, 255, 255)
				if (obstaculo.data[byte] == 255 && obstaculo.data[byte+1] == 255 && obstaculo.data[byte+2] == 255){
					areaOcupada = true;
					break;
				}
			}

		} while (areaOcupada);

        //Pinto el obstaculo, dentro del area de 60x60
        ctx.fillStyle = "rgb(0,255,0";
        ctx.fillRect(x+5, y+25, 50, 10);

	}
}
