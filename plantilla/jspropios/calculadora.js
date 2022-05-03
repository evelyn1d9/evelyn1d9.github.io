function Suma(){
    //1.-Referencia a los objetos del documento html
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    //Convertir
    let suma =Number(num1) + Number(num2);
    alert("La suma es: "+suma);
 
}

function Resta(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resta = num1 - num2;
    alert("La resta es: "+resta);
}

function Multi(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let multiplicacion = num1 * num2;
    alert("La multiplicación es: "+multiplicacion);
}

function Division(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let division = num1 / num2;
    alert("La división es: "+division);
}