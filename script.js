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


let display = document.querySelector('#display')
let numbers = document.querySelectorAll('.numbers')
let addtion = document.querySelector('#add')
let subtraction = document.querySelector('#subtract')
let multiplication = document.querySelector('#multiply')
let division = document.querySelector('#divide')
let dot = document.querySelector('#dot')
let currentDisplay = display.textContent


function getNumbersAndSigns() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {display.textContent += number.textContent})
    })
    addtion.addEventListener('click', () => {display.textContent += ` ${addtion.textContent} `})
    subtraction.addEventListener('click', () => {display.textContent += ` ${subtraction.textContent} `})
    multiplication.addEventListener('click', () => {display.textContent += ` ${multiplication.textContent} `})
    division.addEventListener('click', () => {display.textContent += ` ${division.textContent} `})
    dot.addEventListener('click', () => {display.textContent += ` ${dot.textContent} `})
}

getNumbersAndSigns()