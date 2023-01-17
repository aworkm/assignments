/**
 * QUIZ:
 * 
 * 1. Why do programmers care about loops? What are they good for?
 * Loops allows for the programmer to run the same set of code many times. 
 * 
 * 2. In a for loop, what are the 3 main parts that go into the parentheses?
 * for (1. initialize vairables, 2. condition - should I run one more time?, 3. final code that we want to run)
 * 
 * 3. Write a loop that logs the numbers 15 to 50 (inclusive) to the console.
 * for (var i = 15; i <= 50; i ++) {
    console.log(i)
}
 * 
 * 4. Write a loop that logs the numbers 0 to 10 (inclusive) to the console, but if the number is 7, also log "It's your lucky day!"
 */

// for (var i = 15; i <= 50; i ++) {
//     console.log(i)
// }

for (var i = 0; i <= 10; i++){
    console.log(i)
    if(i === 7){
        console.log("It's your lucky day!")
    }
}