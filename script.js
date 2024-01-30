let firstNumber = 0
let operator;
let secondNumber = 0
let display = document.querySelector('#display')
let equation = document.querySelector('#equation')
let solution = document.createElement('div')
let numbers = document.querySelectorAll('.numbers')
let zero = document.querySelector('#zero')
let addtion = document.querySelector('#add')
let subtraction = document.querySelector('#subtract')
let multiplication = document.querySelector('#multiply')
let division = document.querySelector('#divide')
let dot = document.querySelector('#dot')
let answer = document.querySelector('#answer')
let del = document.querySelector('#del')
let clear = document.querySelector('#clear')
let previousSolution;

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


function getNumbersAndSigns() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            if (equation.textContent.includes(` 0`) && 
                equation.textContent.includes(` - `)) {
                equation.textContent = "";
                equation.textContent += subtraction.textContent
            }else if (equation.textContent.includes(` 0`)) {
                equation.textContent = "";
            }
            equation.textContent += number.textContent
        })
    })
    addtion.addEventListener('click', () => {
        if (equation.textContent.includes(`${division.textContent} 0`)) {
            equation.textContent = `MATH error`
         } else {
            if (equation.textContent.includes('+')) {
                getFirstAndSecondNumbers()
                previousSolution = add(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${addtion.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes(`${multiplication.textContent}`)) {
                getFirstAndSecondNumbers()
                previousSolution = multiply(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${addtion.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes(`${division.textContent}`)) {
                getFirstAndSecondNumbers()
                previousSolution = divide(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${addtion.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes('-')) {
                getFirstAndSecondNumbers()
                previousSolution = subtract(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${addtion.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else {
                equation.textContent += ` ${addtion.textContent} `
            }
         }
    })
    subtraction.addEventListener('click', () => {
        if (equation.textContent.includes(`${division.textContent} 0`)) {
            equation.textContent = `MATH error`
         } else {
            if (equation.textContent.includes('+')) {
                getFirstAndSecondNumbers()
                previousSolution = add(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${subtraction.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes(`${multiplication.textContent}`)) {
                getFirstAndSecondNumbers()
                previousSolution = multiply(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${subtraction.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes(`${division.textContent}`)) {
                getFirstAndSecondNumbers()
                previousSolution = divide(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${subtraction.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes('-')) {
                getFirstAndSecondNumbers()
                previousSolution = subtract(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${subtraction.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else {
                equation.textContent += ` ${subtraction.textContent} `
            }
         }
    })
    multiplication.addEventListener('click', () => {
        if (equation.textContent.includes(`${division.textContent} 0`)) {
            equation.textContent = `MATH error`
         } else {
            if (equation.textContent.includes('+')) {
                getFirstAndSecondNumbers()
                previousSolution = add(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${multiplication.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes(`${multiplication.textContent}`)) {
                getFirstAndSecondNumbers()
                previousSolution = multiply(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${multiplication.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes(`${division.textContent}`)) {
                getFirstAndSecondNumbers()
                previousSolution = divide(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${multiplication.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes('-')) {
                getFirstAndSecondNumbers()
                previousSolution = subtract(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${multiplication.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else {
                equation.textContent += ` ${multiplication.textContent} `
            }
         }
    })
    division.addEventListener('click', () => {
        if (equation.textContent.includes(`${division.textContent} 0`)) {
            equation.textContent = `MATH error`
         } else {
            if (equation.textContent.includes('+')) {
                getFirstAndSecondNumbers()
                previousSolution = add(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${division.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes(`${multiplication.textContent}`)) {
                getFirstAndSecondNumbers()
                previousSolution = multiply(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${division.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes(`${division.textContent}`)) {
                getFirstAndSecondNumbers()
                previousSolution = divide(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${division.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else if (equation.textContent.includes('-')) {
                getFirstAndSecondNumbers()
                previousSolution = subtract(firstNumber,secondNumber)
                equation.textContent = '';
                equation.textContent += `${previousSolution} ${division.textContent} `
                firstNumber = 0
                secondNumber = 0
            } else {
                equation.textContent += ` ${division.textContent} `
            }
         }
    })
    dot.addEventListener('click', () => {return equation.textContent.includes('.') ? equation.textContent += '' : equation.textContent += `${dot.textContent}`;})
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
    } else  if (equation.textContent.includes(multiplication.textContent)) {
        let values = equation.textContent.split(` ${multiplication.textContent} `)

        firstNumber += values[0]
        secondNumber += values[1]
        operator = '*'
        return
    } else {
        let values = equation.textContent.split(` ${division.textContent} `)

        firstNumber += values[0]
        secondNumber += values[1]
        operator = '/'
        return
    }

}



function operate(symbol,firstDigit,secondDigit) {
    display.setAttribute('style','display: block;')
    equation.setAttribute('style','width: fit-content; margin-left: auto; border: 4px solid white;')
    solution.setAttribute('style','width: fit-content; margin-left: auto; border: 4px solid white;')
    display.appendChild(solution)

    if (symbol == '+') {
        let currentAnswer = add(firstDigit,secondDigit)
        solution.textContent = currentAnswer
       
    } else if (symbol == '-') {
        let currentAnswer = subtract(firstDigit,secondDigit)
        solution.textContent = currentAnswer
       
    } else if (symbol == '*') {
        let currentAnswer = multiply(firstDigit,secondDigit)
        solution.textContent = currentAnswer
       
    } else if (symbol == '/') {
        let currentAnswer =  divide(firstDigit,secondDigit)
        solution.textContent = currentAnswer
       
    }

}


answer.addEventListener('click', () => {
    if (equation.textContent == 0) {
       alert('Type in an expression')
    }else if (equation.textContent.includes(`${division.textContent} 0`)) {
        equation.textContent = `MATH error`
     } else {
        getFirstAndSecondNumbers()

        if (operator == '+') {
            operate('+',firstNumber,secondNumber) 
        } else if (operator == '-') {
            operate('-',firstNumber,secondNumber) 
        } else if (operator == '*') {
            operate('*',firstNumber,secondNumber) 
        } else if (operator == '/') {
            operate('/',firstNumber,secondNumber) 
        }
    }
})

del.addEventListener('click', () => {
     let newChar = equation.textContent.slice(0,-1)
     equation.textContent = '';
     equation.textContent = newChar;
     
     if (equation.textContent === '') {
        equation.textContent = 0;
     }
})

clear.addEventListener('click', () => {
    equation.textContent = ` 0`;
    firstNumber = 0
    secondNumber = 0
    display.setAttribute('style','display: flex;')
    display.removeChild(solution)
})

getNumbersAndSigns()
