'use strict'

//Coge la cadena del caracter que se ha clicado y lo imprime en el displau
function addToDisplay(value) {
    document.calc.display.value += value;
}

//Limpia el display
function clearDisplay() {
    document.calc.display.value = '';
}

//Implementa la logica de la calculadora
function calculateResult() {
    let operador = cadenaExtractor(document.calc.display.value); // Extrae el operador

    switch (operador) {
        case 'suma':
            sumar(document.calc.display.value); // Llama a la función de suma
            break;
        case 'resta':
            restar(document.calc.display.value); // Llama a la función de resta
            break;
        case 'multiplicacion':
            multiplicar(document.calc.display.value); // Llama a la función de multiplicación
            break;
        case 'division':
            dividir(document.calc.display.value); // Llama a la función de división
            break;
        default:
            document.calc.display.value = 'Cálculo no válido'; // Mensaje para cálculo no válido
            break;
    }
}

//Analiza la cadena para buscar el operador
function cadenaExtractor(cadenaDisplay){
    let operador = null;
    
    for (let index = 0; index < cadenaDisplay.length; index++) {
        if (cadenaDisplay.charAt(index) == '+') {
            operador = 'suma';
            break;
        }else if (cadenaDisplay.charAt(index) == '-') {
            operador = 'resta';
            break;
        }else if (cadenaDisplay.charAt(index) == '*') {
            operador = 'multiplicacion';
            break;
        }else if (cadenaDisplay.charAt(index) == '/') {
            operador = 'division';
            break;
        }
    }

    return operador;
}

//Funciones de Operaciones
function sumar(cadenaDisplay){
    let numeros = cadenaDisplay.split('+');
    let numero1 = parseFloat(numeros[0]);
    let numero2 = parseFloat(numeros[1]);
    let resultado = numero1 + numero2;
    document.calc.display.value = resultado;
}

function restar(cadenaDisplay) {
    let numeros = cadenaDisplay.split('-');
    let numero1 = parseFloat(numeros[0]);
    let numero2 = parseFloat(numeros[1]);
    let resultado = numero1 - numero2;
    document.calc.display.value = resultado;
}

function multiplicar(cadenaDisplay) {
    let numeros = cadenaDisplay.split('*');
    let numero1 = parseFloat(numeros[0]);
    let numero2 = parseFloat(numeros[1]);
    let resultado = numero1 * numero2;
    document.calc.display.value = resultado;
}

function dividir(cadenaDisplay) {
    let numeros = cadenaDisplay.split('/');
    let numero1 = parseFloat(numeros[0]);
    let numero2 = parseFloat(numeros[1]);
    
    // Verificar si el segundo número es 0 para evitar la división por cero
    if (numero2 === 0) {
        document.calc.display.value = 'Error: División por 0';
        return;
    }

    let resultado = numero1 / numero2;
    document.calc.display.value = resultado;
}
