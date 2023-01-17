var numbers = [42, 13, 34, 18, 123]
var turtles = ["Raphael", "Donatello", "Michaelangelo", "Leonardo"]
var users = [
    {
        name: "Joe Schmoe",
        age: 42,
        gender: "Male"
    },
    {
        name: "Jill Schmoe",
        age: 41,
        gender: "Female",
        childrenAges: [8, 10, 12],
    },
    {
        name: "Jimmy Schmoe",
        age: 9,
        gender: "Male"
    }   
]

var disparateArr = ["Alice", 40, true, [8, 10, 12]]

/**
 * QUIZ:
 * 
 * 1. What is the purpose of arrays? Why do programmers care about them?
 * The purpose is to collect multiple pieces of data together
 * 
 * 2. What are some differences between arrays and objects?
 * Arrays are for gathering together many 'things' and objects are best used to describe ONE thing in more detail.
 * 
 * 3. How would you access the number 34 from the `numbers` array above? 
 * See if you can log it to the console)
 * console.log(numbers[2]) have to 'zero index' with a square bracket. It works!
 * 
 * 4. What is the length of the `turtles` array? How would you access that length?
 * The length is 4 but since it is zero indexed to access each have to log 0-3. So in this case I would console.log(turtles.length)
 * 
 * 5. Is it syntatically correct to have an array like `disparateArr`?
 * Yes, any data-type can be mixed, but there are better ways to go about it. 
 * 
 * 6. What might be a better data structure to use for `disparateArr`?
 * An object with a descriptor would be better than an array, because an array is not very descriptive. 
 * 
 * 7. How would you log Jill Schmoe's name to the console using the `users` array?
 * To access Jill, I will console log the object, then the zero indexed item within the object, followed by dot notation of her name. console.log(users[1].name) -- It works!
 */

//console.log(numbers[2])
//console.log(turtles.length)

//console.log(users[1].name)

console.log(users[1].childrenAges[0])