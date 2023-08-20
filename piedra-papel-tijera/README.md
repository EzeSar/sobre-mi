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

* `index.html`: botón para ingresar el nombre del usuario.

```html
<div class="nombre">
        <label>Tu nombre: <input type="text" id="nombre"></label>
        <button id="enviar" onclick="agregarNombre()">Enviar</button>
    </div>
```

* `script.js`: archivos para las acciones dinamicas de la app.
    - `agregarNombre()`: funcion para tomar el nombre del usuario. Contiene validación de input no vacío. Esta vinculada a un evento de tipo *onclick* en el *input* con `id="nombre"`.

```javascript
/* Funcion que toma el nombre */
function agregarNombre(){
    /* if que obliga a ingresar el nombre */
    if(document.getElementById("nombre").value === ""){ 
        alert("INGRESA TU NOMBRE!");
    } else {
        nombreUsuario = document.getElementById("nombre").value;
    }
}
```

### PARTE 3: Selección de la opción del jugador y del oponente (PC)

* `index.html`: a cada botón (piedra, papel y tijera) se le agrega su correspondiente imágen `<img src=` y evento *onclick* `<button onclick=`.

* `script.js`: se incorporan funciones para capturar la opción seleccionada por el jugador y generar aleatoriamente la opción del oponente (PC).

 ```javascript
 /* función que genera aleatoriamente la jugada de la compu */
function obtenerJugadaCompu(){
    let jugadas = ["piedra","papel","tijeras"];
    jugadaCompu = jugadas[Math.floor(Math.random() * 2.9)];
}

/* las 3 funciones para las jugadas del usuario */
function elijePiedra(){
    jugadaUsuario = "piedra";
}

function elijePapel(){
    jugadaUsuario = "papel";
}

function elijeTijera(){
    jugadaUsuario = "tijera";
}
 ```

### PARTE 4: Determinación del ganador y actualización del marcador

* Por definición general la opción "piedra" le gana a "tijera", "papel" le gana a "piedra", y "tijera" le gana a "papel".

* `script.js`: se agregan funciones para comparar las opciones del jugador y del oponente y determinar el ganador de la ronda.

* `index.html`: se agregan los marcadores de resultados.

* `script.js`: se agrega función que actualiza los marcadores luego de cada ronda.

```javascript
function jugada(){
    obtenerJugadaCompu();
    determinarGanador(jugadaUsuario,jugadaCompu);
    actualizarMarcadores();
}
```

---
