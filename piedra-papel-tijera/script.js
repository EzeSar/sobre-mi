let $nombreInput = document.getElementById("nombre");

/**
 * Funcion que toma el nombre
 */
function agregarNombre(){
    let nombre = $nombreInput.value;
    
    /**
     * Condicion de testeo para la otencion del nombre
     */
    if(nombre !== null){
        console.log(nombre);
    }
}