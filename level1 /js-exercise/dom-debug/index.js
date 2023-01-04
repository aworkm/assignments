const colors = ["red", "blue", "green"]

//Changed the event listener to listen for a 'click' insteand of 'onclick' because 'onclick' is a diffferent function than a listener, it is working now // 
document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

//In order to call the full value, have to add '.length' so the loop will go through the entire array. Then have to add 'document' to creating an element so the js knows where to create the element. 
function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
// Changing 'parent' to 'parentElement' to define which parent to target the function. Additionally have to call the 'style' in order for background color to change. 
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}

//the subItemValue needed a '.value' added because it didn't know which value to add from the input. 
function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


