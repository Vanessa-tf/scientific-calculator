var currentInput = '0';
var operator = '';
var previousInput = '';
function updateDisplay() {
    var display = document.getElementById('display');
    if (display) {
        display.textContent = currentInput;
    }
}
function appendNumber(num) {
    if (currentInput === '0') {
        currentInput = num;
    }
    else {
        currentInput = currentInput + num;
    }
    updateDisplay();
}
function appendOperator(op) {
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
}
function calculate() {
    var result = 0;
    var prev = parseFloat(previousInput);
    var current = parseFloat(currentInput);
    if (operator === '+') {
        result = prev + current;
    }
    else if (operator === '-') {
        result = prev - current;
    }
    else if (operator === '*') {
        result = prev * current;
    }
    else if (operator === '/') {
        result = prev / current;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}
function clearDisplay() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    updateDisplay();
}
function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    }
    else {
        currentInput = '0';
    }
    updateDisplay();
}
function calculateSin() {
    var num = parseFloat(currentInput);
    var radians = num * (Math.PI / 180);
    currentInput = Math.sin(radians).toString();
    updateDisplay();
}
function calculateCos() {
    var num = parseFloat(currentInput);
    var radians = num * (Math.PI / 180);
    currentInput = Math.cos(radians).toString();
    updateDisplay();
}
function calculateTan() {
    var num = parseFloat(currentInput);
    var radians = num * (Math.PI / 180);
    currentInput = Math.tan(radians).toString();
    updateDisplay();
}
function calculateSquare() {
    var num = parseFloat(currentInput);
    currentInput = (num * num).toString();
    updateDisplay();
}
function calculateSqrt() {
    var num = parseFloat(currentInput);
    currentInput = Math.sqrt(num).toString();
    updateDisplay();
}
window.appendNumber = appendNumber;
window.appendOperator = appendOperator;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
window.deleteLast = deleteLast;
window.calculateSin = calculateSin;
window.calculateCos = calculateCos;
window.calculateTan = calculateTan;
window.calculateSquare = calculateSquare;
window.calculateSqrt = calculateSqrt;

