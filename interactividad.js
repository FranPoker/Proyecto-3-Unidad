function limpiarFormulario() {
document.getElementById("miForm").reset();
}

var peso = function(n1){

var kg  = parseFloat(document.getElementById("masa").value);

var resultado = kg*9.8;

return "El peso del cuerpo es: "+resultado;
}

function limpiarFormulario() {
document.getElementById("miForm").reset();
}

var CalcularDerivada = function(n1,n2){

var i  = parseFloat(document.getElementById("independiente").value);

var e  = parseFloat(document.getElementById("x").value);


var n = e-1;
var d = i * e;


var resultado = d;
var exponew = n;

return " La derivada de f(x) es " + resultado + " con una nueva exponente de x" +exponew;
}



