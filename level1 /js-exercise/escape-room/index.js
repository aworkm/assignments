//Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.
// Game start:
/* Tell the user their options:
1. Find the key, or
2. Open the door
     a. Put hand in hole
They can't open the door unless they find the key first.They die if they put their hand in the hole.*/
// Tools that may help - While loop, Variables, Booleans, if/else or switch statement, List, readline-sync

const readLine = require("readline-sync");
const name = readLine.question("Hello User! What is your name?");

//Need to ask user q question over & over
    //will need a for loop
    //same question but respond in different way depending on variables. 
    //define some vairables 
let riddleQuestion;
    //how many times will user be asked a question?
    // define 'count' and set = to zero
let guesses = 3;
    //what varialbes do i need to define before a for loop 
        //variables will toggle 
            //know difference between assignment operators 
//Use if statments nested within an if statment

//need a function to start the game

function startGame(){
    //Yes is the only anser so use 'do' instead of 'if'
    let beginGame;
    do{
        beginGame = readLine
        .question(`Hello ${name}. Are you ready to begin? Yes or yes? HINT: You don't have a choice because you're locked in a room. `
          )
          .toLowerCase()
    } while (beginGame !== 'yes');

    console.log('You are in a locked room. You have 3 options to try to escape. Do you: 1. Put your hand in a hole you find. 2. Search for a key to unlock the door. 3. Just open the door.'
    );

// User must enter option 1, 2, or 3. 
    let userOption;
    userOption = parseInt(
        readLine.keyIn('Which option will you choose?', {
            limit: '<1-3>',
    })
);
// use the if else if else to ensure what happens when user inputs an option
    if (userOption === 1){
        console.log('When you stick your hand in the hole you feel a sting in the palm of your hand while you quickly fade into unconciousness');
        tryAgain();
    } else if (userOption === 2){
        lookForKey();
    } else {
        openDoor();
    }
}
//end of startGame function

//need logic for when the user selects option 2. 
function lookForKey() {
    console.log('You look across the room and notice an envelope that says "key".');
    //return true if Y and false if NO
    const yesOrno = readLine.keyInYN('When you lift the envelope you notice an auspicious button. Do you press it?'
    );

    if (yesOrno === false){
        let oneMoreChance = readLine.keyInYN('That was a mistake, you have been blown to smithereens. Do you want to play again?'
        );
        if (oneMoreChance === true){
            startGame()
        } else {
            return;
        }
    }
    // ask user to solve a riddle to get the key to escape
    let askUserRiddle = readLine.keyInYN('You open the envelope to find a question: "If you can solve this riddle, the key will appear. You have three chances to anser correctly, or you will be trapped forever. Are you ready to play?');

    //need for loop to ask the riddle until user get it right or rund out of responses. 
    if (askUserRiddle === true){
        for (let i = 0; i < 3; i++){
            riddleQuestion = readLine.question('What has many keys but cannot open a single lock?'
            );
            if (riddleQuestion === 'a piano') {
            console.log('You are correct. The key is yours...you can unlock the door.');
            break;
            } else if (riddleQuestion !== 'twelve'){
            guesses--;
            console.log(`Incorrect. You have ${guesses} guesses left...`
            );
            }
        }
    } else if (askUserRiddle === false) {
    console.log(
        'You had three guesses and none more will be granted. You traped forever. Game over.'
        );
    }
    //allow user to play again
    tryAgain();
}
// end lookForKey function

function openDoor() {
    console.log('What did you expect? The door is locked, good try though.');
    lookForKey();
}

function tryAgain() {
    let tryAgain = readLine.keyInYN('Would you like to play again?');
    if (tryAgain === true) {
        startGame();
        guesses = 3;
    } else {
        console.log(`Better luck next time ${name}!`);
    }
}

startGame();
