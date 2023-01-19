//* modifying the header using a single variable, however this method I am not able to create the <h1> element for the first line because only one innerHTML can be declaired. I would have to futher modify the CSS in order to give the appearance of an h1 element. *//

// const myHeader = document.getElementById("header");

// console.dir(document.getElementById("header"))

// myHeader.innerText = "<h1><span class='header>JavaScript Made This!!";
// myHeader.innerHTML += "<p><span class='name'> Alyssa Workman</span> wrote this JavaScript</p>";


/* another method of modifying the header element is to append like the example below */

let headerDiv = document.createElement('div');
headerDiv.classList.add('header');

let headerEl = document.createElement('h1');
headerEl.textContent = 'JavaScript Made This!';

let para = document.createElement('p');
para.innerHTML += '<p><span class="name">Alyssa Workman</span> wrote the JavaScript</p>';

header.append(headerDiv);
headerDiv.append(headerEl);
headerDiv.append(para);

/* clear the conversation with the 'clear' button by user click eventListener */ 

const messages = document.querySelector('.messages');

let clear = document.getElementById('clear-button').addEventListener('click', (e) => {
    e.preventDefault();
    messages.textContent = '';
    console.log('Cleared!');
})

/* Automatically changing the conversation messages using :nth-child(n) */

const leftOne = document.querySelector('.messages :nth-child(1)');
const rightOne = document.querySelector('.messages :nth-child(2)')
const leftTwo = document.querySelector('.messages :nth-child(3)');
const rightTwo = document.querySelector('.messages :nth-child(4)');

leftOne.textContent = 'I am learning JavaScript.';
rightOne.textContent = 'Day-by-day, that is the plan!';
leftTwo.textContent = 'Way to be! You will make a big difference.';
rightTwo.textContent = 'I belive in you. Stay consistent and keep asking questions.';

/* Changing the theme of the backagound colors of the messages */

const theme = document.getElementById('theme-drop-down');

theme.addEventListener('change', (e) => {
    if(e.target.value === 'theme-one') {
        leftOne.style.backgroundColor = 'lightblue';
        rightOne.style.backgroundColor = 'burlywood';
        leftTwo.style.backgroundColor = 'lightblue';
        rightTwo.style.backgroundColor = 'burlywood';
    } else if (e.target.value === 'theme-two') {
        leftOne.style.backgroundColor = 'red';
        rightOne.style.backgroundColor = 'black';
        leftTwo.style.backgroundColor = 'red';
        rightTwo.style.backgroundColor = 'black';
        rightOne.style.color = 'white';
        rightTwo.style.color = 'white';
    } else if (e.target.value === 'none') {
        leftOne.style.backgroundColor = '';
        rightOne.style.backgroundColor = '';
        leftTwo.style.backgroundColor = '';
        rightTwo.style.backgroundColor = '';
        rightOne.style.color = '';
        rightTwo.style.color = '';
    }
});

/* For appendiing  a new element into the document based on user interaction */ 
let sideToggle = true;
const newMessage = document.getElementById('new-message').addEventListener('click', (e) => {
    
    e.preventDefault();
    const altMessage = document.createElement('div');
    //using template literal the message shows up in the html with the div class, but the class 'align-self' is not looking the same as the other messages. Is it because the right side is not submitted yet? the 'right' class has the 'flex-end' wherase the 'left' class has 'flex-start' so I think i would need to declair a new variable like 'altMessageR' to be able to complete the 'flex' in order for it to shorten the end on the left. After creating the 'altMessageR' then i could continue building the for loop/condittional?  
    altMessage.innerHTML += `${input.value}`;
    //console.log(altMessage.classList);
    if (sideToggle === true){
        altMessage.classList.add("message", "left")
        console.log(altMessage.classList)
    }else {
        altMessage.classList.add("message", "right")
        console.log(altMessage.classList)
    }
    sideToggle = !sideToggle /* the ! allows for muting the variable because using a let statment*/
    messages.append(altMessage);

    input.value = ''; 
});

// for( let i = 0; i <= messages.children.length; i++){
//     if(i%2 === 0){
//        messages.children[i] 
//     } 
// }

console.log(messages.children)
/* Every other message will be posted on the right in one color, and the next on the left the other color. 

I know that I need to add the class someplace on the HTML to be able to querySelect and add an eventListener. 

I am fairly certain that it needs to be a function and for loop array combined with a condtitional statment. */

