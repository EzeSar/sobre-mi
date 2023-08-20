# Piedra, papel o tijera

---

**Objetivo:**
Crear un juego web simple utilizando HTML5, CSS3 y JavaScript que permita a los usuarios realizar una partida contra el PC.
*Este proyecto es parte de los trabajos prácticos de la segunda etapa (Páginas Web con Componentes Dinámicos) de Programación Web Front-end, Argentina Programa. Dictado por FAMAF - UNC. Córdoba, Argentina 2023.*

---

## Instrucciones de uso

Acá van las instrucciones

---

## Documentación

### PARTE 1: Estructura básica HTML y estilos CSS

* `index.html` este es el archivo base para todo el proyecto.

* `styles.css` archivo para dar estilos generales.

### PARTE 2: Obtención del nombre del jugador

* `script.js` archivos para las acciones dinamicas de la app:
    - `agregarNombre()`: funcion para tomar el nombre del usuario. Contiene validación de input no vacío. Esta vinculada a un evento de tipo *onclick* en el *input* con `id="nombre"`.

### PARTE 3: Selección de la opción del jugador y del oponente (PC)

* En el `index.html` a cada botón (piedra, papel y tijera) se le agrega su correspondiente imágen `<img src=` y evento *onclick* `<button onclick=`.
* En el `script.js` se incorporan funciones para capturar la opción seleccionada por el jugador y generar aleatoriamente la opción del oponente (PC).
 ```javascript
 /* función que genera aleatoriamente la jugada de la compu */
function obtenerJugadaComputadora(){
    let jugadas = ["piedra","papel","tijeras"];
    jugadaComputadora = jugadas[Math.floor(Math.random() * 2.9)];
}

/* las 3 funciones para las jugadas del usuario */
function elijePiedra(){
    jugadaUsuario = "piedra";
    alert(jugadaUsuario);
}

function elijePapel(){
    jugadaUsuario = "papel";
    alert(jugadaUsuario);
}

function elijeTijera(){
    jugadaUsuario = "tijera";
    alert(jugadaUsuario);
}
 ```

---
