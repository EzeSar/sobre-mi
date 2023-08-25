# Piedra, papel o tijera

---

**Objetivo:**
Crear un juego web simple utilizando HTML5, CSS3 y JavaScript que permita a los usuarios realizar una partida contra el PC.
*Este proyecto es parte de los trabajos prácticos de la segunda etapa (Páginas Web con Componentes Dinámicos) de Programación Web Front-end, Argentina Programa. Dictado por FAMAF - UNC. Córdoba, Argentina 2023.*

---

## Instrucciones de uso

Para poder ***correr localmente*** Piedra, papel o tijera, descargar los archivos desde [mi repositorio de GitHub](https://github.com/EzeSar/sobre-mi/tree/main/piedra-papel-tijera "github.com/EzeSar/sobre-mi/tree/main/piedra-papel-tijera"). Luego ejecutar el archivo ***index.html***.

***Piedra, papel o tijera*** es el clásico juego de manos para 2 oponentes. En este caso nuestro rival es ***La Compu***, que genera su jugada ***aleatoriamente*** al momento de jugar la ronda.

Primero debemos ingresar obligatoriamente nuestro nombre de usuario. Luego elegiremos una de las 3 opciones y al clickear el botón de jugada el sistema nos dará el resultado de la ronda.

Las victorias se suman y quien logre 3 será quien ***gane el juego***. En caso de empate no se suman puntos y se repite la ronda. Al finalizar el juego se reinicia clickeando ***volver a jugar***. También se puede ***cambiar el nombre*** del usuario.

---

## Documentación

### PARTE 1: Estructura básica HTML y estilos CSS

* `index.html` este es el archivo base para todo el proyecto.

* `styles.css` archivo para dar estilos generales.

### PARTE 2: Obtención del nombre del jugador

* `index.html`: botón para ingresar el ***nombre del usuario***.

```html
<div class="nombre">
        <label>Tu nombre: <input type="text" id="nombre"></label>
        <button id="enviar" onclick="agregarNombre()">Enviar</button>
    </div>
```

* `script.js`: archivos para las acciones dinamicas de la app.
    - `agregarNombre()`: funcion para tomar el nombre del usuario. Contiene ***detección de input vacío***. Está vinculada a un evento de tipo ***onclick*** en el ***input*** con `id="nombre"`.

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

* `index.html`: a cada ***botón*** (piedra, papel y tijera) se le agrega su correspondiente ***imágen*** `<img src=` y evento ***onclick*** `<button onclick=`.

* `script.js`: se incorporan funciones para ***capturar*** la opción seleccionada por el jugador *(esta función la mejoré en la parte 8)* y para ***generar aleatoriamente*** la opción del oponente (PC).

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

* Por ***definición general*** se establece que la opción "piedra" le gana a "tijera", "papel" le gana a "piedra", y "tijera" le gana a "papel".

* `index.html`: se agregan los ***marcadores de resultados***.

```html
<p id="resultado-ronda"></p>

<p id="resultado-final"></p>

<p id="marcador-usuario"></p>
        
<p id="marcador-compu"></p>
```

* `script.js`: se agrega la función `jugada()`, que ejecuta a `determinarGanador(jugadaUsuario,jugadaCompu)` para ***comparar las opciones*** del jugador y del oponente y ***determinar el ganador*** de la ronda.
    - Se agrega función `actualizarMarcadores()` que ***actualiza los marcadores*** luego de cada ronda.

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

* Se establece que el juego se juega al mejor de ***5 rondas***.
* `script.js`: se crea una variable `rondas` para contar las rondas, y una función `finDelJuego()` para verificar si alguno de los jugadores ha alcanzado ***3 victorias***.
    - Se agrega detección de ***juego finalizado*** a `jugada()`.

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
        alert("JUEGO FINALIZADO, REINICIAR!!!");
    } else {
    obtenerJugadaCompu();
    determinarGanador(jugadaUsuario,jugadaCompu);
    actualizarMarcadores();
    finDelJuego();
    }
}
```

### PARTE 6: Anunciar al ganador y reiniciar el juego

* `script.js`: Cuando uno de los jugadores alcanza ***3 victorias*** la función `finDelJuego()` muestra un mensaje ***anunciando al ganador***.

```javascript
function finDelJuego(){
    if(ganadosUsuario === 3){
        juegoFinalizado = true;
        document.getElementById("resultado-final").innerHTML = `Finalizó el juego en ${rondas} rondas... GANÓ ${nombreUsuario} !!!`;
    } else if(ganadosCompu === 3){
        juegoFinalizado = true;
        document.getElementById("resultado-final").innerHTML = `Finalizó el juego en ${rondas} rondas... GANÓ la compu !!!`;
    }
}
```

* `index.html`: se agrega un botón que llama a la función `reiniciarMarcadores()` para reiniciar el juego y restablecer los marcadores.

```html
<button onclick="reiniciarMarcadores()">REINICIAR MARCADORES</button>
```

```javascript
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
```

### PARTE 7: Mejoras y personalización

* Agrego ***más estilos*** CSS:
    - Imagen gif de fondo al body `background-image: url`
    - color y sombras al texto `text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
    color: white;`
    - bordes redondeados a los botones `border-radius: 6px;`
    - imagenes ***gif*** para los marcadores de ***usuario y computadora***.

* ***Retroalimentación visual*** cuando se selecciona una opción:
    - se agregan funciones para ***mostrar y ocultar*** divs con formularios y botones.
    - escalado tamaño `scale: 140%;`
    - desplazamiento eje y `transform: translateY(4px);`
    - cambia la sombra `box-shadow: 0 5px #666;`

* ***Transiciones suaves*** para las animaciones de los botones `transition: 500ms;`.

* Agrego una pista de ***música de fondo*** en el `script.js`, que se activa dentro de la función `aJugar()`. También agregué posteriormente un botón MUSICA NO y uno MUSICA SI. 
***Esta parte fue la que mas me dio problemas, porque en un principio lo hacía correr directamente ejecutando la función `musica.play()`, pero dejaba de funcionar o directamente no andaba. Despúes probé iniciandola al cargarse el body con `body onload="myFunction()"`, pero también fallaba. Di algunas vueltas al código buscando si era error de sintaxis o de implementación, no sabía. Pero investigando leí que algunos navegadores bloquean esas funciones que cargan automaticamente. Así que opté por llamar la función al clickear algún botón. En principio usé el submit del nombre y ya funcionaba perfecto. Después se me ocurrió implementar el formato como quedó finalmente el ingreso al juego y quedó así.***

```javascript
/* agrego una pista de audio de fondo y sus funciones Si y No */
const musica = new Audio("assets/Tetris-large.mp3");

function musicaSi(){
    musica.volume = 0.1;
    musica.loop = true;
    musica.play();
}

function musicaNo(){
    musica.volume = 0;
}

function aJugar(){
    /* se muestra el formulario para el nombre */
    document.getElementById("div-nombre").style.display = "flex";
    /* se oculta el primer texto y el botón a jugar! */
    document.getElementById("div-a-jugar").style.display = "none";
    /* y se activa la música de fondo */
    musicaSi();
}
```

### PARTE 8: Comentarios explicativos y optimización del código

* Se agrega ***comentarios*** en el código JavaScript para explicar el propósito de cada función y sección del código. Por ejemplo:

```javascript
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
```

* Revisión del código para identificar posibles áreas de ***mejora y optimización***. Por ejemplo, para obtener la jugada del usuario usaba 3 funciones separadas y las uní en una con switch case:

```javascript
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
```

### PARTE 9: Prueba y depuración

* Se prueba el juego con diferentes combinaciones de ***opciones y omiciones*** para comprobar que funcionan correctamente las ***funciones y alertas de errores***.

* Se realizaron ***correcciones y ajustes*** necesarios para solucionar errores y comportamientos inesperados. Por ejemplo, al obtener el ***nombre de usuario*** le agregué un ***límite*** para evitar texto largo:

```javascript
function agregarNombre(){
    if(document.getElementById("nombre").value === ""){
        alert("INGRESA TU NOMBRE!!!");
        /* le agrego un limite de 20 caracteres al nombre para 
        evitar texto muy largo que pueda generar errores de visualización */
    } else if(String(document.getElementById("nombre").value).length > 20){
        alert("NOMBRE MUY LARGO, MAXIMO 20 CARACTERES!!!");
    } else { ...

    }
}
```

---

## Autor ✒️

* **Ezequiel Sarmiento** - [EzeSar](https://github.com/EzeSar "github.com/EzeSar") - eservicesupply@gmail.com

---