function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}


let firstNumber;
let operator;
let secondNumber;


function operate(symbol,firstDigit,secondDigit) {
    if (symbol == '+') {
        add(firstDigit,secondDigit)
    } else if (symbol == '-') {
        subtract(firstDigit,secondDigit)
    } else if (symbol == '*') {
        multiply(firstDigit,secondDigit)
    } else if (symbol == '/') {
        divide(firstDigit,secondDigit)
    }
}