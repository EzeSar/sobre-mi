//esta variable inicia el idioma inglés en false
var ingles = false;

function calcular() {
    //primero traemos las variables desde el html...
    var res = document.getElementById("resultado").value;
    var num1 = document.getElementById("número1").value;
    var num2 = document.getElementById("número2").value;
    var oper = document.getElementById("operación").value;

    //el primer if valida que los campos no esten vacíos
    if (oper === "" || num1 === "" || num2 === "") {
        if (ingles) {
            res = "error, missing data";
        } else {
            res = "error, faltan datos";
        }
    } else {
        //pasamos los value num1 y 2 a números
        num1 = Number(num1);
        num2 = Number(num2);
        switch(oper) {
            //en principio probé if anidados pero al final usé switch case para las operaciones
            case "sumar":
            res = num1 + num2;
            break;
            case "restar":
            res = num1-num2;
            break;
            case "multiplicar":
            res = num1 * num2;
            break;
            case "dividir":
                //este if valida que no se divida x 0
                if(num2 === 0){
                    if (ingles) {
                        res = "don't divide by 0";
                    } else {
                        res = "no dividir por 0";
                    }
                } else {
                    res = num1 / num2;
                }
        } 
        //este if da el limite de 20 digitos al resultado
    } if((res.toString()).includes("e")) {
        if(ingles){
            alert("Result too long, cannot be calculated");
        } else {
            alert("Resultado demasiado extenso, no se puede calcular");
        }
    } else {
        document.getElementById("resultado").innerHTML = (res);
    }
}

//como función extra agregué la de cambiar el idioma a inglés y volver a español
function cambiarIdiomaI(){
    ingles = true;
    document.getElementById("h1").innerHTML = "SIMPLE CALCULATOR";
    document.getElementById("número1").placeholder = "enter a number";
    document.getElementById("opcion-x-defecto").innerHTML = "choose an operation";
    document.getElementById("número2").placeholder = "enter another number";
    document.getElementById("borrar").innerHTML = "Erase everything";
}

function cambiarIdiomaE(){
    ingles = false;
    document.getElementById("h1").innerHTML = "CALCULADORA SIMPLE";
    document.getElementById("número1").placeholder = "ingrese un número";
    document.getElementById("opcion-x-defecto").innerHTML = "elija una operación";
    document.getElementById("número2").placeholder = "ingrese otro número";
    document.getElementById("borrar").innerHTML = "Borrar todo";
}

//evento click para el botón de calcular
document.getElementById("botón").addEventListener("click", calcular);

//evento click para el botón de cambiar idioma a inglés
document.getElementById("idioma-i").addEventListener("click", cambiarIdiomaI);

//evento click para el botón de cambiar idioma a español
document.getElementById("idioma-e").addEventListener("click", cambiarIdiomaE);