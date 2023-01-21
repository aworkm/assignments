// Nested Loops

var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// matrix or grid are another way to describe nested loops 

for (var i = 0; i < arrayOfArrays.length; i ++){ //how many times will this loop run? = 3 times
    //console.log(arrayOfArrays[i])
    for (var j = 0; j <arrayOfArrays[i].length; j++){ //how many times will this loop run? = 9 times
        console.log(arrayOfArrays[i][j])
    }
}

// 1. console.log the number 6

//console.log(arrayOfArrays[1][2]);

// 2. console.log the number 1

//console.log(arrayOfArrays[0][0]);

// 3. console.log the number 9

//console.log(arrayOfArrays[2][2])