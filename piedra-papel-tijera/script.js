
/* inicialización de las variables a utilizar globalmente */
var nombreUsuario = "";
var jugadaUsuario = "";
var jugadaCompu;
var resultadoJugada;
var ganadosUsuario = 0;
var ganadosCompu = 0;
var rondas = 0;
var juegoFinalizado = false;

function aJugar(){
    /* se muestra el formulario para el nombre */
    document.getElementById("div-nombre").style.display = "flex";
    /* se oculta el primer texto y el botón a jugar! */
    document.getElementById("div-a-jugar").style.display = "none";
    /* y se activa la música de fondo */
    musicaDeFondo();
}

/* Funcion que toma el nombre */
function agregarNombre(){
    /* if que obliga a ingresar el nombre */
    if(document.getElementById("nombre").value === ""){
        alert("INGRESA TU NOMBRE!!!");
        /* le agrego un limite de 20 caracteres al nombre para 
        evitar texto muy largo que pueda generar errores de visualización */
    } else if(String(document.getElementById("nombre").value).length > 20){
        alert("NOMBRE MUY LARGO, MAXIMO 20 CARACTERES!!!");
    } else {
        nombreUsuario = document.getElementById("nombre").value;
        /* luego de captar el nombre se oculta el formulario */
        document.getElementById("div-nombre").style.display = "none";
        /* y se muestra los botones de jugada, marcadores y reinicio */
        document.getElementById("div-jugada").style.display = "flex";
        document.getElementById("div-botones").style.display = "flex";
        document.getElementById("marcador-usuario").innerHTML = `${nombreUsuario} : 0`;
        document.getElementById("marcador-compu").innerHTML = `Compu : 0`;
    }
}

/* función que genera aleatoriamente la jugada de la compu */
function obtenerJugadaCompu(){
    let jugadas = ["piedra","papel","tijera"];
    jugadaCompu = jugadas[Math.floor(Math.random() * 2.9)];
}

/* la funcion para obtener las jugadas del usuario 
(en un principio lo hacía con 3 funciones separadas) */
function obtenerJugadaUsuario(a){
    switch(a){
        case "piedra":
            jugadaUsuario = "piedra";
            break;

        case "papel":
            jugadaUsuario = "papel";
            break;

        case "tijera":
            jugadaUsuario = "tijera";
            break;
    }
}

/* función que compara las jugadas y determina el ganador */
function determinarGanador(a,b){
    switch(a+b){
        case "piedrapapel":
            resultadoJugada = `la compu GANA`;
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
            resultadoJugada = `la compu GANA`;
            ganadosCompu++;
            rondas++;
            break;

        case "tijerapiedra":
            resultadoJugada = `la compu GANA`;
            ganadosCompu++;
            rondas++;
            break;

        case "tijerapapel":
            resultadoJugada = `${nombreUsuario} GANA`;
            ganadosUsuario++;
            rondas++;
            break;

        default:
            resultadoJugada = "es EMPATE , se vuelve a jugar";
        }
}

/* función que ejecuta la jugada */
function jugada(){
    /* if que detecta juego finalizado */
    if(juegoFinalizado){
        alert("JUEGO FINALIZADO, REINICIAR!!!");
        /* if que detecta nombre vacío */
    } else if(nombreUsuario === ""){
        alert("INGRESA TU NOMBRE!!!");
    /* if que detecta jugada de usuario vacía */
    } else if(jugadaUsuario === ""){
        alert("ELEGÍ PIEDRA, PAPEL O TIJERA!!!");
    } else {
    obtenerJugadaCompu();
    determinarGanador(jugadaUsuario,jugadaCompu);
    actualizarMarcadores();
    /* borro la jugada del usuario para que no se repita por defecto */
    jugadaUsuario = "";
    /* al finalizar la jugada se ejecuta el chequeo de finalización del juego */
    finDelJuego();
    }
}

/* función que va actualizando los marcadores luego de cada jugada */
function actualizarMarcadores(){
    document.getElementById("resultado-ronda").innerHTML = `${nombreUsuario} eligió ${jugadaUsuario.toUpperCase()} , la compu eligió ${jugadaCompu.toUpperCase()} , ${resultadoJugada} esta ronda !`;
    document.getElementById("marcador-usuario").innerHTML = `${nombreUsuario} : ${ganadosUsuario}`;
    document.getElementById("marcador-compu").innerHTML = `Compu : ${ganadosCompu}`;
}

/* función que establece el fin del juego cuando un jugador llega a 3 rondas ganadas */
function finDelJuego(){
    if(ganadosUsuario === 3){
        juegoFinalizado = true;
        document.getElementById("resultado-final").innerHTML = `Finalizó el juego en ${rondas} rondas... GANÓ ${nombreUsuario} !!!`;
    } else if(ganadosCompu === 3){
        juegoFinalizado = true;
        document.getElementById("resultado-final").innerHTML = `Finalizó el juego en ${rondas} rondas... GANÓ la compu !!!`;
    }
}

/* función para reiniciar los marcadores y el juego */
function reiniciarMarcadores(){
    juegoFinalizado = false;
    rondas = 0;
    ganadosCompu = 0;
    ganadosUsuario = 0;
    document.getElementById("resultado-ronda").innerHTML = "";
    document.getElementById("resultado-final").innerHTML = "";
    document.getElementById("marcador-usuario").innerHTML = "";
    document.getElementById("marcador-compu").innerHTML = "";
}

/* agrego una pista de audio de fondo */
function musicaDeFondo(){
    const musica = new Audio("assets/Tetris-large.mp3");
    musica.volume = 0.1;
    musica.loop = true;
    musica.play();
}

function cambiarNombre(){
    document.getElementById("div-nombre").style.display = "flex";
    document.getElementById("div-jugada").style.display = "none";
}