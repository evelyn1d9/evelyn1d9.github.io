function agregarDigito(digito) {
   let display = document.getElementById("display");
   display.value = display.value + digito;
}

function allClear() {
document.getElementById("display").value="";
}

function agregarOperador(operador){
    let display = document.getElementById("display");
    display.value = display.value + operador;
}

function calcularResultado(){
    display.value = eval(display.value);
}

function calcularPotencia(){
    let display = document.getElementById("display");
    let base = eval(display.value);
    let exponente = document.getElementById("elevar_potencia").value;
    let resultadoPotencia = Math.pow(base,exponente);
    display.value = resultadoPotencia;
}

function calcularRaiz(){
    let display = document.getElementById("display");
    let base = eval(display.value);
    let resultadoRaiz = Math.sqrt(base);
    display.value = resultadoRaiz;
}

function calcularIn(){
    let display = document.getElementById("display");
    let base = eval(display.value);
    let resultadoIn = Math.log(base);
    display.value = resultadoIn;
}

function calcularLog(){
    let display = document.getElementById("display");
    let base = eval(display.value);
    let resultadoLog = Math.log10(base);
    display.value = resultadoLog;
}

function calcularPorc(){
    let display = document.getElementById("display");
    let base = eval(display.value);
    let resultadoPor = Math.floor (base)/100;
    display.value = resultadoPor;
}

function fac(){
let display = document.getElementById("display");
let base = eval(display.value);
var resultado = 1;

for(var i=1; i<=base; i++) {
  resultado *= i;
}
display.value = resultado;
}
