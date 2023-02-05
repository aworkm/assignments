// JS Array Methods

// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp

// var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]

// push - adds item(s) to the end of the array

    // var newFoodArr = arrOfFoods.push("cereal")
    // console.log(newFoodArr)
    //when creating a new var it will actually return the length of the new array and changes the data. 

    // arrOfFoods.push("cereal")
    // console.log(arrOfFoods)

// pop - removes item from the end of the array
    // arrOfFoods.pop()
    // console.log(arrOfFoods)

// unshift - adds item(s) to the beginning of the array
    // arrOfFoods.unshift("cereal")
    // console.log(arrOfFoods)

// shift - removes item from the beginning of the array
    // arrOfFoods.shift()
    // console.log(arrOfFoods)

// concat
    // var colors1 = ["blue", "green"]
    // var colors2 = ["purple", "red"]
    // var newArr = colors1.concat(colors2)
    // console.log(newArr)


// var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]    
// indexOf
    // var pizzaIndex = arrOfFoods.indexOf("pizza")
    // console.log(pizzaIndex)

// slice
//    var newArr = arrOfFoods.slice(1,3)
//     console.log(newArr)
// join
    // var name = "steve"
    // var splitName = new.split("")
// reverse
    // var name = "rick" //kcir
    // var splitN = name.split("")
    // var reversedArr = splitName.reverse()
    // var reversedName = reveredArr.join("")
    // console.log
    //var allAtOnce = name.split("").reverse().join("")
// splice - changes the original array

var result = arrOfFoods.spice(2, 2, "bacon", "ice cream")
console.log(arrOfFoods)