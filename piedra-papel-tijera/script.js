
/* inicialización de las variables a utilizar */
var nombreUsuario;
var jugadaUsuario;
var jugadaCompu;
var resultadoJugada;
var ganadosUsuario = 0;
var ganadosCompu = 0;
var rondas = 0;
var juegoFinalizado = false;

/* Funcion que toma el nombre */
function agregarNombre(){
    /* if que obliga a ingresar el nombre */
    if(document.getElementById("nombre").value === ""){
        alert("INGRESA TU NOMBRE!!!");
    } else {
        nombreUsuario = document.getElementById("nombre").value;
    }
}

/* función que genera aleatoriamente la jugada de la compu */
function obtenerJugadaCompu(){
    let jugadas = ["piedra","papel","tijera"];
    jugadaCompu = jugadas[Math.floor(Math.random() * 2.9)];
}

/* las 3 funciones para las jugadas del usuario */
function elijePiedra(){
        jugadaUsuario = "piedra";
        jugada();
}

function elijePapel(){
        jugadaUsuario = "papel";
        jugada();
}

function elijeTijera(){
        jugadaUsuario = "tijera";
        jugada();
}

/* función que compara las jugadas y determina el ganador */
function determinarGanador(a,b){
    switch (a+b) {
        case "piedrapapel":
            resultadoJugada = `la computadora GANA`;
            ganadosCompu++;
            rondas++;
            break;
        
        case "piedratijera":
            resultadoJugada = `${nombreUsuario} GANA`;
            ganadosUsuario++;
            rondas++;
            break;
        
        case "papelpiedra":
            resultadoJugada = `${nombreUsuario} GANA`;
            ganadosUsuario++;
            rondas++;
            break;

        case "papeltijera":
            resultadoJugada = `la computadora GANA`;
            ganadosCompu++;
            rondas++;
            break;

        case "tijerapiedra":
            resultadoJugada = `la computadora GANA`;
            ganadosCompu++;
            rondas++;
            break;

        case "tijerapapel":
            resultadoJugada = `${nombreUsuario} GANA`;
            ganadosUsuario++;
            rondas++;
            break;

        default:
            resultadoJugada = "es EMPATE, se vuelve a jugar";
        }
}

/* función que ejecuta la jugada */
function jugada(){
    /* if que detecta nombre vacío */
    if(document.getElementById("nombre").value === ""){
        alert("INGRESA TU NOMBRE!!!");
    /* if que detecta juego finalizado */
    } else if(juegoFinalizado){
        alert("JUEGO FINALIZADO, REINICIAR!!!");
    } else {
    obtenerJugadaCompu();
    determinarGanador(jugadaUsuario,jugadaCompu);
    actualizarMarcadores();
    finDelJuego();
    }
}

/* función que va actualizando los marcadores luego de cada jugada */
function actualizarMarcadores(){
    document.getElementById("resultado-jugada").innerHTML = `${nombreUsuario} eligió ${jugadaUsuario.toUpperCase()}, la computadora eligió ${jugadaCompu.toUpperCase()}, ${resultadoJugada} esta ronda!`;
    document.getElementById("ganados-usuario").innerHTML = `${nombreUsuario} : ${ganadosUsuario}`;
    document.getElementById("ganados-compu").innerHTML = `Computadora : ${ganadosCompu}`;
}

/* función que establece el fin del juego cuando un jugador llega a 3 rondas ganadas */
function finDelJuego(){
    if(ganadosUsuario === 3){
        juegoFinalizado = true;
        document.getElementById("resultado-jugada").innerHTML = `FINALIZÓ el juego en ${rondas} rondas... GANÓ ${nombreUsuario}!!!`;
    } else if(ganadosCompu === 3){
        juegoFinalizado = true;
        document.getElementById("resultado-jugada").innerHTML = `FINALIZÓ el juego en ${rondas} rondas... GANÓ la computadora!!!`;
    }
}

/* función para reiniciar los marcadores y el juego */
function reiniciarMarcadores(){
    juegoFinalizado = false;
    rondas = 0;
    ganadosCompu = 0;
    ganadosUsuario = 0;
    document.getElementById("resultado-jugada").innerHTML = "";
    document.getElementById("ganados-usuario").innerHTML = "";
    document.getElementById("ganados-compu").innerHTML = "";
}

/* agrego una pista de audio de fondo */
function musicaPlay(){
    const musicaDeFondo = new Audio("assets/Tetris-large.mp3");
    musicaDeFondo.volume = 0.1;
    musicaDeFondo.loop = true;
    musicaDeFondo.play();
}

document.body.onload = musicaPlay();
