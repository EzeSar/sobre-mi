/* inicialización de las variables a utilizar */
var nombreUsuario;
var jugadaUsuario;
var jugadaCompu;
var resultadoJugada;
var ganadosUsuario = 0;
var ganadosCompu = 0;
var resultadoFinal;

/* Funcion que toma el nombre */
function agregarNombre(){
    /* if que obliga a ingresar el nombre */
    if(document.getElementById("nombre").value === ""){
        alert("INGRESA TU NOMBRE!");
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
    if(document.getElementById("nombre").value === ""){
        alert("INGRESA TU NOMBRE!");
    } else {
        jugadaUsuario = "piedra";
        jugada();
    }
}

function elijePapel(){
    if(document.getElementById("nombre").value === ""){
        alert("INGRESA TU NOMBRE!");
    } else {
        jugadaUsuario = "papel";
        jugada();
    }
}

function elijeTijera(){
    if(document.getElementById("nombre").value === ""){
        alert("INGRESA TU NOMBRE!");
    } else {
        jugadaUsuario = "tijera";
        jugada();
    }
}

/* función que compara las jugadas y determina el ganador */
function determinarGanador(a,b){
    switch (a+b) {
        case "piedrapapel":
            resultadoJugada = `gana la computadora`;
            ganadosCompu++;
            break;
        
        case "piedratijera":
            resultadoJugada = `gana ${nombreUsuario}`;
            ganadosUsuario++;
            break;
        
        case "papelpiedra":
            resultadoJugada = `gana ${nombreUsuario}`;
            ganadosUsuario++;
            break;

        case "papeltijera":
            resultadoJugada = `gana la computadora`;
            ganadosCompu++;
            break;

        case "tijerapiedra":
            resultadoJugada = `gana la computadora`;
            ganadosCompu++;
            break;

        case "tijerapapel":
            resultadoJugada = `gana ${nombreUsuario}`;
            ganadosUsuario++;
            break;

        default:
            resultadoJugada = "empate, vuelve a jugar";
        }
}

/* función que ejecuta la jugada */
function jugada(){
    obtenerJugadaCompu();
    determinarGanador(jugadaUsuario,jugadaCompu);
    actualizarMarcadores();
}

/* función que va actualizando los marcadores luego de cada jugada */
function actualizarMarcadores(){
    document.getElementById("resultado-jugada").innerHTML = `Resultado de la ronda: ${nombreUsuario} eligió ${jugadaUsuario}, la computadora eligió ${jugadaCompu}, ${resultadoJugada}`;
    document.getElementById("ganados-usuario").innerHTML = `${nombreUsuario} : ${ganadosUsuario}`;
    document.getElementById("ganados-compu").innerHTML = `Computadora : ${ganadosCompu}`;

}

