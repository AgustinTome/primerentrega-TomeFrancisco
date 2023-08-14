class Calculadora {
    constructor() {

}
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num, exp) {
        return num ** exp;
    }
    raizCuadrada(num) {
        return Math.sqrt(num);
    }
    raizCubica(num) {
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

let continuar = true;

while (continuar) {
    alert("¿Qué operación deseas realizar?");
    let operacion = prompt("1: Sumar, 2: Restar, 3: Dividir, 4: Multiplicar, 5: Potenciación, 6: Raíz Cuadrada");

    let resultado;

    if (operacion == 1) {
        let numero1 = prompt("Primer número para sumar");
        let numero2 = prompt("Segundo número para sumar");
        resultado = calculadora.sumar(numero1,numero2);
        alert(`El resultado de tu operacion es: ${resultado}`);
    }
    else if (operacion == 2) {
        let numero1 = prompt("Primer número para restar");
        let numero2 = prompt("Segundo número para restar");
        resultado = calculadora.restar(numero1,numero2);
        alert(`El resultado de tu operacion es: ${resultado}`);
    }
    else if (operacion == 3) {
        let numero1 = prompt("Primer número para dividir");
        let numero2 = prompt("Segundo número para dividir");
        resultado = calculadora.dividir(numero1,numero2);
        alert(`El resultado de tu operacion es: ${resultado}`);
    }
    else if (operacion == 4) {
        let numero1 = prompt("Primer número para multiplicar");
        let numero2 = prompt("Segundo número para multiplicar");
        resultado = calculadora.multiplicar(numero1,numero2);
        alert(`El resultado de tu operacion es: ${resultado}`);
    }
    else if (operacion == 5) {
        let numero1 = prompt("Primer número a potenciar");
        let numero2 = prompt("Segundo número a potenciar");
        resultado = calculadora.potenciar(numero1,numero2);
        alert(`El resultado de tu operacion es: ${resultado}`);
    }
    else if (operacion == 6) {
        let numero1 = prompt("Conocer la raíz cuadrada de: (PONE UN NÚMERO)");
        resultado = calculadora.raizCuadrada(numero1);
        alert(`El resultado de tu operacion es: ${resultado}`);
    }

    if (continuar) {
        let opcion = prompt("¿Quieres continuar operando? (Si/No)").toLowerCase();
        if (opcion !== "si") {
            continuar = false;
        }
    }
}

alert("¡Hasta luego!");
