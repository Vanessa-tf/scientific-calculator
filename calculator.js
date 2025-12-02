var currentInput = '0';
var operator = '';
var previousInput = '';
function updateDisplay() {
    var display = document.getElementById('display');
    if (display) {
        if (operator && previousInput) {
            display.textContent = "".concat(previousInput, " ").concat(getOperatorSymbol(operator), " ").concat(currentInput);
        }
        else {
            display.textContent = currentInput;
        }
    }
}
function getOperatorSymbol(op) {
    switch (op) {
        case '+': return '+';
        case '-': return '−';
        case '*': return '×';
        case '/': return '÷';
        default: return op;
    }
}
function appendNumber(num) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = num;
    }
    else {
        currentInput += num;
    }
    updateDisplay();
}
function appendOperator(op) {
    if (operator && previousInput) {
        calculate();
        previousInput = currentInput;
        currentInput = '0';
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
}
function calculate() {
    if (!previousInput || !operator) {
        return;
    }
    var prev = parseFloat(previousInput);
    var current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) {
        currentInput = 'Error';
        operator = '';
        previousInput = '';
        updateDisplay();
        return;
    }
    var result;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                currentInput = 'Error';
                operator = '';
                previousInput = '';
                updateDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    result = Math.round(result * 100000000) / 100000000;
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
    if (currentInput.length > 1 && currentInput !== 'Error') {
        currentInput = currentInput.slice(0, -1);
    }
    else {
        currentInput = '0';
    }
    updateDisplay();
}
function appendParenthesis(parenthesis) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = parenthesis;
    }
    else {
        currentInput += parenthesis;
    }
    updateDisplay();
}
function calculateSin() {
    var num = parseFloat(currentInput);
    if (isNaN(num))
        return;
    var radians = num * (Math.PI / 180);
    var result = Math.sin(radians);
    currentInput = Math.round(result * 100000000) / 100000000 + '';
    updateDisplay();
}
function calculateCos() {
    var num = parseFloat(currentInput);
    if (isNaN(num))
        return;
    var radians = num * (Math.PI / 180);
    var result = Math.cos(radians);
    currentInput = Math.round(result * 100000000) / 100000000 + '';
    updateDisplay();
}
function calculateTan() {
    var num = parseFloat(currentInput);
    if (isNaN(num))
        return;
    var radians = num * (Math.PI / 180);
    var result = Math.tan(radians);
    currentInput = Math.round(result * 100000000) / 100000000 + '';
    updateDisplay();
}
function calculateSquare() {
    var num = parseFloat(currentInput);
    if (isNaN(num))
        return;
    currentInput = (num * num) + '';
    updateDisplay();
}
function calculateSqrt() {
    var num = parseFloat(currentInput);
    if (isNaN(num))
        return;
    if (num < 0) {
        currentInput = 'Error';
    }
    else {
        currentInput = Math.sqrt(num) + '';
    }
    updateDisplay();
}

window.appendNumber = appendNumber;
window.appendOperator = appendOperator;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
window.deleteLast = deleteLast;
window.appendParenthesis = appendParenthesis;
window.calculateSin = calculateSin;
window.calculateCos = calculateCos;
window.calculateTan = calculateTan;
window.calculateSquare = calculateSquare;
window.calculateSqrt = calculateSqrt;
