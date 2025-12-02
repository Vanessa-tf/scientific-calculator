let currentInput: string = '0';
let operator: string = '';
let previousInput: string = '';

function updateDisplay(): void {
    const display = document.getElementById('display');
    if (display) {
        display.textContent = currentInput;
    }
}

function appendNumber(num: string): void {
    if (currentInput === '0') {
        currentInput = num;
    } else {
        currentInput = currentInput + num;
    }
    updateDisplay();
}

function appendOperator(op: string): void {
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
}

function calculate(): void {
    let result: number = 0;
    const prev: number = parseFloat(previousInput);
    const current: number = parseFloat(currentInput);
    
    if (operator === '+') {
        result = prev + current;
    } else if (operator === '-') {
        result = prev - current;
    } else if (operator === '*') {
        result = prev * current;
    } else if (operator === '/') {
        result = prev / current;
    }
    
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay(): void {
    currentInput = '0';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function deleteLast(): void {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculateSin(): void {
    const num: number = parseFloat(currentInput);
    const radians: number = num * (Math.PI / 180);
    currentInput = Math.sin(radians).toString();
    updateDisplay();
}

function calculateCos(): void {
    const num: number = parseFloat(currentInput);
    const radians: number = num * (Math.PI / 180);
    currentInput = Math.cos(radians).toString();
    updateDisplay();
}

function calculateTan(): void {
    const num: number = parseFloat(currentInput);
    const radians: number = num * (Math.PI / 180);
    currentInput = Math.tan(radians).toString();
    updateDisplay();
}

function calculateSquare(): void {
    const num: number = parseFloat(currentInput);
    currentInput = (num * num).toString();
    updateDisplay();
}

function calculateSqrt(): void {
    const num: number = parseFloat(currentInput);
    currentInput = Math.sqrt(num).toString();
    updateDisplay();
}
