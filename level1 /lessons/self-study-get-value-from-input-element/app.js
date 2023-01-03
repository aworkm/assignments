var nameInput = document.getElementById("name");
let submitButton = document.getElementById("button");
let header = document.querySelector(".header")
submitButton.addEventListener("click", function(e){
    e.preventDefault()
    header.textContent = nameInput.value
    console.log(nameInput.value)
})