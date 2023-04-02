// * Remember to - console.log(isDivisible(4, 2)) 


//PART 1: Write a function that takes an array of numbers and returns the largest (without using Math.max())

// iterate through an array 
    // Check if current value is > than proceeding value. 
        // If it is > than the proceeding value, then push the value into an array. 
            //If it is not > then pop the value until all values have been compared & return the highest value 

function largest(arr) {
    let largestNum = arr [0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr [i]
        }
    }
    return largestNum;
};

//TEST DATA

// console.log(largest([6, 13, 250, 3])) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40

// Yay! They work! 

// PART 2: Write a function that takes an array of words and a character and returns each word that has that character present.

// Iterate through an array of words & characters with a string 
    //write the function that includes the test data name for the arr & characters
        // define the strngs with letters
            // for loop of the array
                // create if statment about the array and indicator [i] and define what to push
                    //return string with letters

// const lettersWithStrings = 

// function lettersWithStrings(arr, char) {
//     let stringsWithLetters = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes(char)) {
//             stringsWithLetters.push(arr[i]);
//         }
//     }
//     return stringsWithLetters;
//}

//TEST DATA 


// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"));
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"));

//  I cannot console.log all three at once ^^^

function isDivisible(num1, num2) {
  let result = num1 / num2;
  if (Number.isInteger(result)) {
    return true;
  } else {
    return false;
  }
}
// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false