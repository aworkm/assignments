const readLine = require('readline-sync');

const num1 = parseInt(readLine.question('Enter first number:'));
const num2 = parseInt(readLine.question('Enter second number:'));
let operation = readLine.question('Enter operation: add, sub, mul, div:');

if (operation === 'add'){
console.log(`Result: ${add(num1, num2)}.`);
} else if (operation === 'mul'){
    console.log(`Result: ${mul(num1, num2)}.`);
} else if (operation === 'div'){
    console.log(`Result: ${div(num1, num2)}.`);
} else if (operation === 'sub'){
    console.log(`Result: ${sub(num1, num2)}.`);
}

function add(){
    return num1 + num2;
}

function mul(){
    return num1 * num2;
}

function mul(){
    return num1 / num2;
}

function sub(){
    return num1 - num2;
}