// Review - Arrays and Loops

/* QUIZ
    1. What part of the for loop will allow you to access each individual item in an array?
    
    The index variable 

    2. What part of the for loop will need the array's length in order to run the correct amount of iterations?
    
    the object length  

    3. Using the pets array, how would you write a for loop to console.log all of the pets with an "s" added to the end? Your console log's should be ( cats, dogs, birds, snakes, rabbits )

    Need to concatenate the console log by adding to the string. 
    for (var i = 0; i < petsArr.length; i++){
        console.log(petsArr[i] + "s")
    }

    4. Using the numbers array, how would you write a for loop to console log only the odd numbers?
    
    I need to do the same as above, to set the object length within the square brackates using the initalizing variable. Then will need to use the modulus operator % symbol and set with !== to 0

    5. Using the users array, how would you write a for loop that would console log the following sentence for each user in the array. ("Hi, I am joe and I am 30 years old")

    Need to log the array with a string of messages attaced using cancatenation. 
    
    6. Using the pets array, how would you write a for loop that would console.log all the pets in
    reverse order?
    
*/

// 3. 
//var petsArr = ["cat", "dog", "bird", "snake", "rabbit"]
// for (var i = 0; i < petsArr.length; i++){
//     console.log(petsArr[i] + "s")
// }

// 4.  

// var numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2]
//     for(var i = 0; i < numbersArr.length; i++){
//         if(numbersArr[i] % 2 !== 0){
//             console.log(numbersArr[i])
//         }
//     }
    
// 5. 
// var users = [
//     {
//         name: "joe",
//         age: 30,
//     },
//     {
//         name: "steve",
//         age: 23
//     },
//     {
//         name: "sarah",
//         age: 39
//     },
//     {
//         name: "lisa",
//         age: 27
//     }
// ]

// for(var i = 0; i < users.length; i++){
//     console.log("Hi, I am " + users[i].name + " and I am " + users[i].age + " years old.")
// }

//6

var petsArr = ["cat", "dog", "bird", "snake", "rabbit"]
    for(var i = petsArr.length -1; i >= 0; i--){
        console.log(petsArr[i])
    }