// calculadora/src/app.js

// Variables para almacenar el resultado
let currentInput = '';
let previousInput = '';
let operation = '';

// Función para actualizar la pantalla de resultados
function updateDisplay(value) {
    const display = document.getElementById('display');
    display.value = value;
}

// Función para manejar la entrada de números
function appendNumber(number) {
    if (currentInput.length < 10) { // Limitar la longitud de la entrada
        currentInput += number;
        updateDisplay(currentInput);
    }
}

// Función para manejar las operaciones
function chooseOperation(op) {
    if (currentInput === '') return; // Evitar operaciones sin número
    if (previousInput !== '') {
        calculate(); // Calcular si ya hay una operación anterior
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

// Función para calcular el resultado
function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentInput = computation.toString();
    operation = '';
    previousInput = '';
    updateDisplay(currentInput);
}


// Función para manejar el botón de porcentaje
function calculatePercentage() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay(currentInput);
}

// Función para limpiar la entrada
function clear() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay('');
}

// Event listeners para los botones
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => appendNumber(button.innerText));
});

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', () => chooseOperation(button.innerText));
});

document.getElementById('equals').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('percentage').addEventListener('click', calculatePercentage);