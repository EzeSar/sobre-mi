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

* Por definición general se establece que la opción "piedra" le gana a "tijera", "papel" le gana a "piedra", y "tijera" le gana a "papel".

* `index.html`: se agregan los marcadores de resultados.

```html
<div class="marcadores">
        <p id="resultado-jugada"></p>
        <p id="ganados-usuario"></p>
        <p id="ganados-compu"></p>
    </div>
```

* `script.js`: se agrega la función `jugada()`, que ejecuta a `determinarGanador(jugadaUsuario,jugadaCompu)` para comparar las opciones del jugador y del oponente y determinar el ganador de la ronda.

    - Se agrega función `actualizarMarcadores()` que actualiza los marcadores luego de cada ronda.

```javascript
function jugada(){
    /* if que detecta nombre vacío */
    if(document.getElementById("nombre").value === ""){
        alert("INGRESA TU NOMBRE!!!");
    } else {
    obtenerJugadaCompu();
    determinarGanador(jugadaUsuario,jugadaCompu);
    actualizarMarcadores();
    }
}
```

### PARTE 5: Control del juego

* Se establece que el juego se juega al mejor de 5 rondas.
* `script.js`: se crea una variable `rondas` para contar las rondas, y una función `finDelJuego()` para verificar si alguno de los jugadores ha alcanzado 3 victorias.

    - Se agrega detección de juego finalizado a `jugada()`.

```javascript
function finDelJuego(){
    if(ganadosUsuario === 3){
        juegoFinalizado = true;
    } else if(ganadosCompu === 3){
        juegoFinalizado = true;
    }
}

function jugada(){
    /* if que detecta nombre vacío */
    if(document.getElementById("nombre").value === ""){
        alert("INGRESA TU NOMBRE!!!");
    /* if que detecta juego finalizado */
    } else if(juegoFinalizado){
        alert("JUEGO FINALIZADO!!!");
    } else {
    obtenerJugadaCompu();
    determinarGanador(jugadaUsuario,jugadaCompu);
    actualizarMarcadores();
    finDelJuego();
    }
}
```

### PARTE 6: Anunciar al ganador y reiniciar el juego

* `script.js`: Cuando uno de los jugadores alcanza 3 victorias la función `finDelJuego()` muestra un mensaje anunciando al ganador.

```javascript
document.getElementById("resultado-jugada").innerHTML = `Finalizó el juego en ${rondas} rondas... Ganó ${nombreUsuario}!!!`;
```

* `index.html`: se agrega un botón que llama a la función `reiniciarMarcadores()` para reiniciar el juego y restablecer los marcadores.

```html
<button onclick="reiniciarMarcadores()">Reiniciar juego</button>
```

```javascript
function reiniciarMarcadores(){
    juegoFinalizado = false;
    rondas = 0;
    ganadosCompu = 0;
    ganadosUsuario = 0;
    document.getElementById("resultado-jugada").innerHTML = "";
    document.getElementById("ganados-usuario").innerHTML = "";
    document.getElementById("ganados-compu").innerHTML = "";
}
```

### PARTE 7: Mejoras y personalización

* Agrego más estilos CSS:

    - Imagen gif de fondo al body `background-image: url`
    - color y sombras al texto `text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
    color: white;`
    - bordes redondeados a los botones `border-radius: 6px;`
    - texto bold para los marcadores `font-weight: bold;`

* Retroalimentación visual cuando se selecciona una opción:

    - escalado tamaño `scale: 140%;`
    - desplazamiento eje y `transform: translateY(4px);`
    - cambia la sombra `box-shadow: 0 5px #666;`

* Transiciones suaves para las animaciones de los botones `transition: 500ms;` .


---
