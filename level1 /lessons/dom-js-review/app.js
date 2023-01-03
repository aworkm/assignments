/**
 * CHALLENGE:
 * 
 * Play around with all the different DOM methods for selecting and modifying elements.
 * 
 * Make sure to read through the `notes.md` file for a recap and some new information regarding using the DOM API
 */
// var headerOne = document.getElementById("header1")
// headerOne.style.color = "green";
// headerOne.style.fontSize = "60px";


// var result = document.querySelector("#header2")
// result.style.color = "red"; 

// var listItems = document.getElementsByClassName("list-items")
// console.log(listItems)

//  for ( let i = 0; i < listItems.length; i ++ ){
//    listItems[i].style.backgroundColor = "purple";
// }
// listItems[0].style.color = "blue"

// var listItemsTag = document.getElementsByTagName("li")
// console.log(listItemsTag)

// for ( let i = 4; i < listItemsTag.length; i ++ ){
//     listItemsTag[i].style.color = "pink";
//     listItemsTag[i].style.margin = "10%" 
// }

var listItems = document.querySelectorAll("li.list-items")
console.log(listItems)
