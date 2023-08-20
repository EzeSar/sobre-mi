/* inicialización de las variables a utilizar */
var nombreUsuario;
var jugadaUsuario;
var jugadaComputadora;

/* Funcion que toma el nombre */
function agregarNombre(){
    if(document.getElementById("nombre").value === ""){
        alert("INGRESE UN NOMBRE!");
    } else {
        nombreUsuario = document.getElementById("nombre").value;
        alert(nombreUsuario);/* solo para comprobar funcionamiento */
    }
}

/* función que genera aleatoriamente la jugada de la compu */
function obtenerJugadaComputadora(){
    let jugadas = ["piedra","papel","tijeras"];
    jugadaComputadora = jugadas[Math.floor(Math.random() * 2.9)];
}

/* las 3 funciones para las jugadas del usuario */
function elijePiedra(){
    jugadaUsuario = "piedra";
    alert(jugadaUsuario);/* solo para comprobar funcionamiento */
}

function elijePapel(){
    jugadaUsuario = "papel";
    alert(jugadaUsuario);/* solo para comprobar funcionamiento */
}

function elijeTijera(){
    jugadaUsuario = "tijera";
    alert(jugadaUsuario);/* solo para comprobar funcionamiento */
}

