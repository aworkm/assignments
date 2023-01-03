// querySelector - selects a single element from the page. It will always return a single element. 

//var result = document.querySelector("ol#favorite-things > li")
//console.log(result)

// querySelectorAll - selects all elements fromt he page that match the query.

var result = document.querySelectorAll("ol#favorite-things > li")
console.log(Array.from(result))

//for (var i = 0; i< result.length; i++){
  //  result[i].textContent = "** REDACTED **"
//}