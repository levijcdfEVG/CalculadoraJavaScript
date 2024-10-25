'use strict'

// Variable para almacenar el último resultado y si la pantalla debe limpiarse
let ultimoResultado = null;
let limpiarPantalla = false;

// Coge la cadena del caracter que se ha clicado y lo imprime en el display
function addToDisplay(value) {
    if (limpiarPantalla) {
        clearDisplay();
        limpiarPantalla = false;
    }
    document.calc.display.value += value;
}

// Limpia el display
function clearDisplay() {
    document.calc.display.value = '';
}

// Implementa la logica de la calculadora
function calculateResult() {
    let cadena = document.calc.display.value;
    let operador = cadenaExtractor(cadena); // Extrae el operador
    let numeroDeOperaciones = contarOperaciones(cadena); // Contar el numero de operaciones
    
    if (numeroDeOperaciones === 1) { // Solo una operación permitida
        switch (operador) {
            case 'suma':
                ultimoResultado = sumar(cadena); // Llama a la función de suma
                break;
            case 'resta':
                ultimoResultado = restar(cadena); // Llama a la función de resta
                break;
            case 'multiplicacion':
                ultimoResultado = multiplicar(cadena); // Llama a la función de multiplicación
                break;
            case 'division':
                ultimoResultado = dividir(cadena); // Llama a la función de división
                break;
            default:
                document.calc.display.value = 'Cálculo no válido'; // Mensaje para cálculo no válido
                return;
        }
        document.calc.display.value = ultimoResultado;
        limpiarPantalla = true;
    } else {
        document.calc.display.value = 'ERROR: Introduce solo operaciones únicas';
    }
}

// Analiza la cadena para buscar el operador
function cadenaExtractor(cadenaDisplay) {
    let operador = null;
    for (let index = 0; index < cadenaDisplay.length; index++) {
        if (cadenaDisplay.charAt(index) == '+') {
            operador = 'suma';
            break;
        } else if (cadenaDisplay.charAt(index) == '-') {
            operador = 'resta';
            break;
        } else if (cadenaDisplay.charAt(index) == '*') {
            operador = 'multiplicacion';
            break;
        } else if (cadenaDisplay.charAt(index) == '/') {
            operador = 'division';
            break;
        }
    }
    return operador;
}

// Busca todas las operaciones que contiene la cadena
function contarOperaciones(cadenaDisplay) {
    let nOperaciones = 0;
    for (let index = 0; index < cadenaDisplay.length; index++) {
        if (cadenaDisplay.charAt(index) == '+' || 
            cadenaDisplay.charAt(index) == '-' || 
            cadenaDisplay.charAt(index) == '*' || 
            cadenaDisplay.charAt(index) == '/') {
            nOperaciones++; // Incrementa el contador
        }
    }
    return nOperaciones;
}

// Funciones de Operaciones
function sumar(cadenaDisplay) {
    let numeros = cadenaDisplay.split('+');
    let numero1 = parseFloat(numeros[0]);
    let numero2 = parseFloat(numeros[1]);
    return numero1 + numero2;
}

function restar(cadenaDisplay) {
    let numeros = cadenaDisplay.split('-');
    let numero1 = parseFloat(numeros[0]);
    let numero2 = parseFloat(numeros[1]);
    return numero1 - numero2;
}

function multiplicar(cadenaDisplay) {
    let numeros = cadenaDisplay.split('*');
    let numero1 = parseFloat(numeros[0]);
    let numero2 = parseFloat(numeros[1]);
    return numero1 * numero2;
}

function dividir(cadenaDisplay) {
    let numeros = cadenaDisplay.split('/');
    let numero1 = parseFloat(numeros[0]);
    let numero2 = parseFloat(numeros[1]);
    
    if (numero2 === 0) {
        document.calc.display.value = 'Error: División por 0';
        return;
    }
    return numero1 / numero2;
}

// Llamada a la tecla ANS
function addANS() {
    if (ultimoResultado !== null) {
        addToDisplay(ultimoResultado);
    }
}
