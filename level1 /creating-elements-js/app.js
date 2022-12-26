var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.append(newLi)

var newParagraph = document.createElement("p")
newParagraph.textContent = "This is my Paragraph!"
 /*Body is unique, can add directly without giving an id to the body*/

newParagraph.style.textAlign = "center"
newParagraph.style.fontSize = "30px"
newParagraph.style.color = "red"
newParagraph.style.border = "dotted"
document.body.append(newParagraph)

//inner HTML vs textContent

var myList = document.getElementById("my-list")
myList.innerHTML += "<li>3</li>"

//document.body.innerHTML += "<p id='paragraph'>V School Rocks!</p>"
//document.getElementByID("paragraph").style.textAlign = "center"