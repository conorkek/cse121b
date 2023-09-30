/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
} 

function addNumbers() {
    let addNumber1 = parseInt(document.getElementById('add1').value);
    let addNumber2 = parseInt(document.getElementById('add2').value);
    
    document.getElementById('sum').value = add(addNumber1, addNumber2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtractNumber1 = parseInt(document.getElementById('subtract1').value);
    let subtractNumber2 = parseInt(document.getElementById('subtract2').value);

    document.getElementById('difference').value = subtract(subtractNumber1, subtractNumber2)
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = parseInt(document.getElementById('factor1').value);
    let multiplyNumber2 = parseInt(document.getElementById('factor2').value);

    document.getElementById('product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let divideNumbers1 = parseInt(document.getElementById('dividend').value);
    let divideNumbers2 = parseInt(document.getElementById('divisor').value);

    document.getElementById('quotient').value = divide(divideNumbers1, divideNumbers2);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let currentDate = new Date();

let currentYear;

currentYear = currentDate.getFullYear();

document.getElementById('year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]

document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.getElementById('odds').innerHTML = numbersArray.filter(parseInt => parseInt % 2 === 1);

/* Output Evens Only Array */
document.getElementById('evens').innerHTML = numbersArray.filter(parseInt => parseInt % 2 === 0);

/* Output Sum of Org. Array */

document.getElementById('sumOfArray').innerHTML = numbersArray.reduce((sum, parseInt) => sum + parseInt, 0);

/* Output Multiplied by 2 Array */

document.getElementById('multiplied').innerHTML = numbersArray.map(parseInt => parseInt * 2);

/* Output Sum of Multiplied by 2 Array */

document.getElementById('sumOfMultiplied').innerHTML = numbersArray.map(parseInt => parseInt * 2).reduce((sum, parseInt) => sum + parseInt, 0);