"use strict";
//I need to prepare the variables first, that includes enableing readLine to run in node, a greeting message, a question for the userName, usable mindeset tools(let), healthpoints (let) for user & temptations, the user can level up if they gain experince.  

const readLine = require("readline-sync");
const greeting = console.log("Greetings traveler, you are about to embark on a journey of a lifetime to collect knowledge by resistance to temptations like doubt, negative self-talk, procrastination, and distraction. It will take stamina, patience, and discernment in order to keep moral high.");
const userName = readLine.question("Before we begin, please tell me your name: ");
let userTools = [];
let hasTools = false;
let hp = 100;
let temptationHp = 100; 
let resistanceEquipped = false;
let playerLevel = 1; 
let experience = 0;

//with all variables defined now I need to write the walk function, game options, user option to key in their choice selection, then use if statments that run through the options with random chances of temptation appearing. 

function walk() {
    //opted for options vs plyer array, so the player has choices what to do. If i did the player array the user would be able to input alphabet options, this way keeps the keys conscise in one place like a console game with option 1, 2, 3, or 0 to exit.
    const options = ["Walk", "Traveler Info", "Equip Resistance to Temptation"];
    //if else statements to go through the options 
    const userOption = readLine.keyInSelect( options, "Make a choice from the following options:"
    );
    //if statement for chance encounter with temptation
    if (userOption === 0) {
        const temptationAppears = Math.random();
        if (temptationAppears <= 0.4) {
            fight();
        }
// option to print user info (user name, tools, helth points, & current level)
    } else if (userOption === 1) {
    console.log (`\nUsername: ${userName}\nHP: ${hp}\nMindsetTools: ${userTools}\nLevel: ${playerLevel}\n`);
//If user has tools to equip === true; otherwise the the game will continue. 
    } else if (userOption === 2 && hasTools) {
        const equipResistance = readLine.keyInYN("Do you want to equipt mindset tools to resist temptation and increase your chances to reach enlightenment?");
        if (equipResistance === true) {
                resistanceEquipped = true;
        }
//option to exit the game
    } else if (userOption === -1) {
        hp = 0;
        playAgain();
    }
} 
// Fight or Run fucntion and variables with 50% chance of escaping//
function fight() {
    const willFight = readLine.keyIn("A temptation has appeared! Press 'f' to fight temptation or 'r' to resist and run.", { limit: "fr" })
        .toLowerCase();
    const attemptToRun = Math.random();
    if (willFight === "f") {
        determineInfluence();
    } else if (willFight === "r" && attemptToRun >= 0.5) {
        console.log("You have escaped temptation, one step closer to enlightenment!");
    } else if (attemptToRun < 0.5) {
        console.log("Your attempt to leave the temptation has failed, you have lost some moral.");
        determineInfluence();
    }
}
// Function for type of temptation influence and what mindset tool user will use to resist the temptation. 
function determineInfluence() {
    const temptations = ["Doubt", "Procrastination", "Distraction", "Negative Self-Talk", "Fear"];
    const randomTemptation = Math.floor(Math.random() * temptations.length);
    const temptation = temptations[randomTemptation];
    const tools = ["Affirmation", "Guides & Guardians", "Meditate", "Change Mindset", "Courage"];
    const randomTools = Math.floor(Math.random() * tools.length);
    const playerTool = tools [randomTools];
//While loop to generate the random damage that can happen and the attack key option.
    while (hp > 0 && temptationHp > 0) {
        const playerDmg = randomDmg(10, 16);
        const temptationDmg = randomDmg(5, 8);
        const bonusDMG = randomDmg(5,11);
        const attack = readLine.keyIn("Press 'a' to abstain from temptation! ", { limit: "a"});
//Check for tools equipped to abstain from temptation and possibile results if the temptation is successful in a counter attack
        if (resistanceEquipped === true){
            console.log(
                `\nYou abstain from the ${temptation} for ${playerDmg} points + ${bonusDMG} for fighting the urge to give in!\n`
            );
            temptationHp = temptationHp - (playerDmg + bonusDMG);
        } else {
            console.log(`\nYou abstain from the ${temptation} for ${playerDmg} points of abstinence!`);
            temptationHp = temptationHp - playerDmg;
        }
        console.log(`\nThe ${temptation} lurs you in for ${temptationDmg} points of moral loss!\n`);
        hp = hp - temptationDmg;
//if player is successful in escaping with minimal damage, then player gets points to heal and/or level up, 
        if (temptationHp <= 0) {
            console.log(`\nYou have overcome the temptation and moral has been restored to you by 40 points! You now have more tools in your mindset to over come temptation. You are getting closer to enlightenment!\n`
            );
            experience = experience + 44;
            if (experience === 100) {
                playerLevel++;
                hp = 100;
                experience = 0;
                console.log(`You have reached level ${playerLevel} and are closer to enlightenment!`
                );
            }
            hasTools = true;
//Add if statment that only adds up to 100 hp before leveloing up, 
            if (hp < 100) {
                hp = hp + 30;
            }
            temptationHp = 100;
            userTools.push(playerTool);
            break;
        } else if (hp <= 0) {
// Moral is gone and asks user to play again. If yes, temptation respawns with full Hp & tools of morality clear out. 
            console.log(`\nOh no! You gave into temptation!\n`);
            playAgain();
            temptationHp = 100;
            userTools = [];
            break;
        }
    }
}
// Function to allow player to play again or not. otherwise will terminate the game.
function playAgain() {
    const playAgain = readLine.keyInYN("Would you like to try again? ");
    if (playAgain === true) {
        hp = 100;
    } else {
        console.log("Come back when you are ready to overcome temptation and reach enlightenment!");
    }
}
// Random damage range when temptations are encountered
function randomDmg(max, min) {
    const attackDamage = Math.floor(Math.random() * (max - min) + min);
    return attackDamage;
}

while (hp > 0) {
    walk();
}

