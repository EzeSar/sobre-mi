
function calcular() {
    let resultado;
    let numero1 = document.getElementById("número1").value;
    let numero2 = document.getElementById("número2").value;
    let operacion = document.getElementById("operación").value;

    if (operacion==="none"||numero1===""||numero2==="") {
        alert("Complete todos los campos");
    } else {
        numero1 = Number(numero1);
        numero2 = Number(numero2);
        if(operacion==="sumar") {
            resultado=numero1+numero2;
        } else if(operacion==="restar") {
            resultado=numero1-numero2;
        } else if(operacion==="multiplicar") {
            resultado=numero1*numero2;
        } else if(operacion==="dividir") {
            if(numero2===0){
                alert("Ingrese un divisor que no sea 0");
            } else {
                resultado=numero1/numero2;
            }
        } if((resultado.toString()).length > 20) {
            alert("El resultado tiene demasiados carácteres");
        } else {
            document.getElementById("resultado").innerHTML = (resultado);
        }
    }
}