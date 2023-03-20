// Write a program that prints from 1 - 100
// Multiple of 3 prints "Fizz"
// Multiple of 5 prints "Buzz"
//Number that are multiples of 3 and 5 print "FizzBuzz"

// Step 1 - Create a function
function fizzBuzz() {
    // Step 2 - create an array declaration
    let arrayOfObject = [];
            // Step 3 - create a for loop 
    for (let i = 1; i <= 100; i++) {
            // Step 4 - create 'if' & 'else if' statements that push 
        if (i % 3 === 0 && i % 5 === 0) {
            arrayOfObject.push({ FizzBuzz: `${i}`});
        } else if (i % 3 === 0) {
            arrayOfObject.push({ Fizz: `${i}` });
        } else if (i % 5 === 0) {
            arrayOfObject.push({ Buzz: `${i}` });
        } else {
            console.log(i);
        }
    }
    return arrayOfObject;
}

console.log(fizzBuzz());




