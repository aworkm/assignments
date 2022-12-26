const form = document ["make-circle"]

form.addEventListener("submit", function (e) {
        e.preventDefault()

       const newShape = document.createElement("div")
        newShape.classList.add("shape")

        if (form.shape.value === "circle") {
            newShape.classList.add("circle")
        } else {
            newShape.classList.add("square")
        }
   
        newShape.style.width = form.size.value + "px"
        newShape.style.height = form.size.value + "px"
        newShape.style.backgroundColor = form.color.value
      document.getElementById("container").appendChild(newShape)
    })