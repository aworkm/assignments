//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

function capitalizeAndLowercase(string){
    let uppercase = string.toUpperCase();
    let lowercase = string.toLowerCase();

    return uppercase + lowercase;
};

//console.log(capitalizeAndLowercase('hello'));

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
/*Hint: You'll need to use Math.floor().*/

function findMiddleIndex(string){
    let middleIndex = Math.floor(string.length / 2);

    return middleIndex;
};

//console.log(findMiddleIndex('takeindexofthis'));

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.

function returnFirstHalf(string){
    let findHalf = findMiddleIndex(string);
    let firstHalf = string.slice(0, findHalf);

    return firstHalf;
};

//console.log(returnFirstHalf('hello world'));

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
/*Hint: If your string length is odd, use Math.floor() to round down.*/

function capFirstHalfLowSecondHalf(string){
    let findHalf = findMiddleIndex(string);
    let firstHalf = string.slice(0, findHalf).toUpperCase();
    let secondHalf = string.slice(findHalf).toLowerCase();
    
    return firstHalf + secondHalf;
};

//console.log(capFirstHalfLowSecondHalf('hello world'));

//(This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
//Write a function that takes a string as a parameter and capitalizes any character that follows a space.

function capitalize(string){
    let arr = string.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    return arr.join(' ')
};

console.log(capitalize('hey friends! practice practice practice!'));
