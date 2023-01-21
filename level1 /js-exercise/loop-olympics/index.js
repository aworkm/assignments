// PRELIMINARIES 

//1 write a for loop that prints to the console the numbers 0 through 9

// for (var i = 0; i <= 9; i++){
//     console.log(i)
// }

//2 write a for loop that prints to the console the numbers 9 through 0

// for (var i = 9; i  >= 0; i--){
//     console.log(i)
// }

//3 write a for loop that prints these frutis to the console: const fruit = ['banana', 'orange', 'apple', 'kiwi']

const fruit = ["banana", "orange", "apple", "kiwi"];

// for (let i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }

//BRONZE MEDAL

//1 Write a for loop that will push the numbers 0 through 9 to an array. 

// const numArr = [];
// for(let i = 0; i <= 9; i++){
//     numArr.push([i]);  
//     console.log(numArr)
// }

//2 Write a for loop that prints to the console only even numbers 0 through 100. 

// for (let i = 0; i < 100; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

//3 Write a for loop that will push every other fruit to an array. 

const everyOtherFruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

// for (let i = 0; i < everyOtherFruit.length; i++){
//     if (i % 2 !== 0){
//         console.log(everyOtherFruit[i])
//     }
// }

//SILVER MEDAL

//1 Write a loop that will print out all the names of the people of the people array
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

const names = [];
const occupations = [];

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

// for (let i = 0; i < peopleArray.length; i++){
//  console.log(peopleArray[i].name);
// }
  
  //2 Write a loop that pushes the names into a names array, and the occupations into an occupations array.

// for (let i = 0; i < peopleArray.length; i++){
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// } 
// console.log(names);
// console.log(occupations);

//3 Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

// for (let i = 0; i < peopleArray.length; i++){
//     if(i % 2 === 0){
//         names.push(peopleArray[i].name);
//         occupations.push(peopleArray[i].occupation);
//     }
// }
// console.log(names);
// console.log(occupations);

// GOLD MEDAL - NESTING 

const grid = []; 

//1. Create an array that mimics a grid like the following using nested for loops: 
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

for (let i = 0; i < 3; i++){
    grid[i] = [];
    for(let j = 0; j < 3; j++){
        grid[i][j] = 0;
    }
}
console.log(grid);

//2.Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

const grid2 = [];

for (let i = 0; i < 3; i++){
    grid2[i] = [];
    for (let j = 0; j < 3; j++){
        grid2[i][j] = i;
    }
}
console.log(grid2);

//3.Create an array that mimics a grid like the following using nested for loops:
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]

const grid3 =[];

for (let i = 0; i < 3; i++){
    grid3[i] = [];
    for (let j = 0; j < 3; j++){
        grid3[i][j] = j;
    }
}
console.log(grid3);

//Given a grid like the previous ones, write a nested for loop that would change every number to an x.


const grid4 =[];

for (let i = 0; i <3; i++){
    grid4[i] = [];
    for (let j = 0; j < 3; j++){
        grid4[i][j] = 'x';
    }
}
console.log(grid4)