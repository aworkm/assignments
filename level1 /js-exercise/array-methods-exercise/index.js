// Array Methods Exercise

// Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.

// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//After every command, use `console.log()` to inspect your arrays. A good way to do that is to do something like:

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

/* To Dos
1. Remove the last item from the vegetable array.
2. Remove the first item from the fruit array.
3. Find the index of "orange."
4. Add that number to the end of the fruit array.
5. Use the length property to find the length of the vegetable array.
6. Add that number to the end of the vegetable array.
7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
8. Remove 2 elements from your new array starting at index 4 with one method.
9. Reverse your array.
10. Turn the array into a string and return it.
*/

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

    //1 - remove last item from veg arr
//vegetables.pop();
// console.log(vegetables);
    //2 - remove 1st itm from fruit arr
//fruit.shift();
// console.log(fruit)
    //3 & 4 - find index of orange + add the number to end of the fruit array
//fruit.push(fruit.indexOf("orange"));
//console.log(fruit);
    // 5 & 6 - use length of property to find length of veg arr + add that number to the end of veg arr
//vegetables.push(vegetables.length);
//console.log(vegetables);
    // 7 put the 2 arrays into one arr. call it 'food'
const food = fruit.concat(vegetables);
//console.log(food);
    // 8 remove 2 elements from new arr 'food' at index 4 
const removeTwo = food.splice(4,1); 
//console.log(food);
    // 9 reverse arr
const reverseArr = food.reverse();
console.log(reverseArr);
    // 10 turn array into string and return it
const string = reverseArr.join('');
console.log(string);