/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
} 

function addNumbers() {
    let addNumber1 = Number(document.getElementById('add1').value);
    let addNumber2 = Number(document.getElementById('add2').value);

    document.getElementById('sum').value = add(addNumber1, addNumber2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.getElementById('subtract1').value);
    let subtractNumber2 = Number(document.getElementById('subtract2').value);

    document.getElementById('difference').value = subtract(subtractNumber1, subtractNumber2)
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.getElementById('factor1').value);
    let multiplyNumber2 = Number(document.getElementById('factor2').value);

    document.getElementById('product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    if (number2 === 0) {
        console.log('Division by zero is not allowed.');
        return;
    }
    return number1 / number2;
}

function divideNumbers() {
    let divideNumbers1 = Number(document.getElementById('dividend').value);
    let divideNumbers2 = Number(document.getElementById('divisor').value);

    document.getElementById('quotient').value = divide(divideNumbers1, divideNumbers2);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let currentDate = new Date();

let currentYear;

currentYear = currentDate.getFullYear();

document.getElementById('year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]

document.getElementById('array').value = numbersArray;

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
