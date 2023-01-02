let boxOne = document.getElementById("box");
console.log(boxOne)
if (boxOne) {
    function addNumbers(){
        console.log(boxOne)
    }
    addNumbers()
    boxOne.addEventListener("mouseover", function () {
        boxOne.style.backgroundColor="blue";

        console.log("test1");
    }, false)
};

boxOne.addEventListener("mousedown", function(){
    boxOne.style.backgroundColor="red";
    EventTarget
});

boxOne.addEventListener("mouseup", function(){
    boxOne.style.backgroundColor="yellow";
});

boxOne.addEventListener("dblclick", function(){
    boxOne.style.backgroundColor="green";
});

document.addEventListener("wheel", (event) => {
    boxOne.style.backgroundColor="orange";
});

// document.addEventListener("keypress", e =>{
//     if(e)boxOne.style.backgroundColor="red";
// })

window.addEventListener("keypress", (e) =>{
    console.log("hello");
    if(e.key === "b"){
        boxOne.style.backgroundColor="blue"
    }
    else if(e.key === "r"){
        boxOne.style.backgroundColor="red"
    }
    else if(e.key === "y"){
        boxOne.style.backgroundColor="yellow"
    }
    else if(e.key === "g"){
        boxOne.style.backgroundColor="green"
    }
    else if(e.key === "o"){
        boxOne.style.backgroundColor="orange"
    }
    else if(e.key === "p"){
        boxOne.style.backgroundColor="pink"
    }
})

// boxOne.addEventListener('scroll', function(e){
//     if(document.querySelector('.box').style.background=="orange"
// })

// document.getElementById("box").addEventListener('mouseover', function(e){
//     console.log("You clicked me!", e);
// })
//     function hover(){
//         console.log("You clicked me!"); 
//     }

//     const element = document.querySelector("#box");

//     element.addEventListener("mouseover", event => {
//       console.log("Mouse in");
//     });
    
//     element.addEventListener("mouseout", event => {
//       console.log("Mouse out");
//     });
