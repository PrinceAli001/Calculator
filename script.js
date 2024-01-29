function add(a,b) {
    return +a + +b
}

function subtract(a,b) {
    return +a - +b
}

function multiply(a,b) {
    return +a * +b
}

function divide(a,b) {
    return +a / +b
}


let firstNumber = 0
let operator;
let secondNumber = 0


let display = document.querySelector('#display')
let equation = document.querySelector('#equation')
let solution = document.createElement('div')
let numbers = document.querySelectorAll('.numbers')
let addtion = document.querySelector('#add')
let subtraction = document.querySelector('#subtract')
let multiplication = document.querySelector('#multiply')
let division = document.querySelector('#divide')
let dot = document.querySelector('#dot')
let answer = document.querySelector('#answer')
let currentDisplay = display.textContent


function getNumbersAndSigns() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            if (equation.textContent.includes(0)) {
                equation.textContent = "";
            }
            equation.textContent += number.textContent
        })
    })
    addtion.addEventListener('click', () => {equation.textContent += ` ${addtion.textContent} `})
    subtraction.addEventListener('click', () => {equation.textContent += ` ${subtraction.textContent} `})
    multiplication.addEventListener('click', () => {equation.textContent += ` ${multiplication.textContent} `})
    division.addEventListener('click', () => {equation.textContent += ` ${division.textContent} `})
    dot.addEventListener('click', () => {equation.textContent += ` ${dot.textContent} `})
}



function getFirstAndSecondNumbers() {
    if (equation.textContent.includes(`+`)) {
        let values = equation.textContent.split(' + ')

        firstNumber += values[0]
        secondNumber += values[1]
        operator = '+'
        return
    } else  if (equation.textContent.includes(`-`)) {
        let values = equation.textContent.split(' - ')

        firstNumber += values[0]
        secondNumber += values[1]
        operator = '-'
        return
    } else  if (equation.textContent.includes(`*`)) {
        let values = equation.textContent.split(' * ')

        firstNumber += values[0]
        secondNumber += values[1]
        operator = '*'
        return
    } else {
        let values = equation.textContent.split(' / ')

        firstNumber += values[0]
        secondNumber += values[1]
        operator = '/'
        return
    }

}



function operate(symbol,firstDigit,secondDigit) {
    if (symbol == '+') {
        let currentAnswer = add(firstDigit,secondDigit)
        solution.textContent = currentAnswer
        display.setAttribute('style','display: block;')
        equation.setAttribute('style','width: fit-content; margin-left: auto; border: 4px solid white;')
        solution.setAttribute('style','width: fit-content; margin-left: auto; border: 4px solid white;')
        display.appendChild(solution)
    } else if (symbol == '-') {
        let currentAnswer = subtract(firstDigit,secondDigit)
        solution.textContent = currentAnswer
        display.setAttribute('style','display: block;')
        equation.setAttribute('style','width: fit-content; margin-left: auto; border: 4px solid white;')
        solution.setAttribute('style','width: fit-content; margin-left: auto; border: 4px solid white;')
        display.appendChild(solution)
    } else if (symbol == '*') {
        let currentAnswer = multiply(firstDigit,secondDigit)
        solution.textContent = currentAnswer
        display.setAttribute('style','display: block;')
        equation.setAttribute('style','width: fit-content; margin-left: auto; border: 4px solid white;')
        solution.setAttribute('style','width: fit-content; margin-left: auto; border: 4px solid white;')
        display.appendChild(solution)
    } else {
        let currentAnswer =  divide(firstDigit,secondDigit)
        solution.textContent = currentAnswer
        display.setAttribute('style','display: block;')
        equation.setAttribute('style','width: fit-content; margin-left: auto; border: 4px solid white;')
        solution.setAttribute('style','width: fit-content; margin-left: auto; border: 4px solid white;')
        display.appendChild(solution)
    }

}

answer.addEventListener('click', () => {
    getFirstAndSecondNumbers()

    if (operator == '+') {
        operate('+',firstNumber,secondNumber) 
    } else if (operator == '-') {
        operate('-',firstNumber,secondNumber) 
    } else if (operator == '*') {
        operate('*',firstNumber,secondNumber) 
    } else {
        operate('/',firstNumber,secondNumber) 
    }
})


getNumbersAndSigns()

