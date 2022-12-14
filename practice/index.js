//var result = document.querySelector("ol#favorite-things")
//console.log(result[0])

//var result = document.querySelectorAll("ol#favorite-things > li")
//console.log(Array.from(result))
        //This isn't running for me in the cosole, 


//for (var i = 0; result.length; i++){
   // result[i].textContent = "** REDACTED **"
//}

var result = document.getElementById("favorite-things")

console.log(Array.from(result))
    //This isn't logging the array, do I need to actually define the 'ol' or 'li' before listing the result?