
function calcular() {
    //primero traemos las variables desde el html...
    var res = document.getElementById("resultado").value;
    var num1 = document.getElementById("número1").value;
    var num2 = document.getElementById("número2").value;
    var oper = document.getElementById("operación").value;

    if (oper === "" || num1 === "" || num2 === "") {
        res = "error,faltan datos";
        //el primer if valida que los campos no esten vacíos
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
                if(num2 === 0){
                    //este if valida que no se divida x 0
                    res = "error,no dividir x 0";
                } else {
                    res = num1 / num2;
                }
        } 
    } if((res.toString()).length > 20) {
        //este if da el limite de 20 digitos al resultado
        alert("Resultado demasiado extenso, máximo 20 dígitos");
    } else {
        document.getElementById("resultado").innerHTML = (res);
    }
}
//evento click para el botón
document.getElementById("botón").addEventListener("click", calcular);