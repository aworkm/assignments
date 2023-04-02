"use strict";
//I need to prepare the variables first, that includes enableing readLine, a greeting message, a question for the userName, a changeable inventory (let), healthpoints (let) for user & possible temptations, 

const readLine = require("readline-sync");
const greeting = console.log("Greetings traveler, you are about to embark on a journey of a lifetime to collect knowledge by resistance to temptations like Doubt, Negative self-talk, Procrastination, and Distractions. It will take stamina, patience, discernment in order to keep moral high.");
const userName = readLine.question("Before we begin, please tell me your name: ");
let userInventory = [];
let hasItems = false;
let hp = 100;
let temptationHp = 100; 
let resistanceEquipped = false;
let playerLevel = 1; 
let experience = 0;

//with all variables defined now I need to write the walk function, game options, user option to key in their choice selection, then use if statments that run through the options with random chance of temptation appearing. 

function walk() {
    const options = ["Walk", "Traveler Info", "Equip Resistance to Temptation"];
    const userOption = readLine.keyInSelect( options, "Make a choice from the following options:"
    );
    if (userOption === 0) {
        const temptationAppears = Math.random();
        if (temptationAppears <= 0.4) {
            fight();
        }
    } else if (userOption === 1) {
    console.log (`\nUsername: ${userName}\nHP: ${hp}\nItems: ${userInventory}\nLevel: ${playerLevel}\n`);
//If user has items and user will run if === true;
    } else if (userOption === 2 && hasItems) {
        const equipResistance = readLine.keyInYN("Do you want to equipt mindset tools to resist this temptation and increase your chances to reach enlightenment?");
        if (equipResistance === true) {
                resistanceEquipped = true;
        }
    } else if (userOption === -1) {
        hp = 0;
        playAgain();
    }
} 
// Fight or Run fucntion//
function fight() {
    const willFight = readLine
        .keyIn("A temptation has appeared! Press 'f' to fight temptation or 'r' to resist and run.", { limit: "fr" }
        )
        .toLowerCase();
    const attemptToRun = Math.random();
    if (willFight === "f") {
        determineWinner();
    } else if (willFight === "r" && attemptToRun >= 0.5) {
        console.log("You have escaped temptation, one step closer to enlightenment!");
    } else if (attemptToRun < 0.5) {
        console.log("Your attempt to leave the temptation has failed, you must prepare to lose some moral.");
        determineWinner();
    }
}
// Function for type of temptation and what item user will use to resist the temptation. 
function determineWinner() {
    const temptations = ["Doubt", "Procrastination", "Distraction", "Negative Self-Talk"];
    const randomTemptation = Math.floor(Math.random() * temptations.length);
    const temptation = temptations[randomTemptation];
    const items = ["Affirmation", "Calling Guides and Guardians", "Meditate", "Banish It"];
    const randomItems = Math.floor(Math.random() * items.length);
    const playerItem = items [randomItems];

    while (hp > 0 && temptationHp > 0) {
        const playerDmg = randomDmg(10, 16);
        const temptationDmg = randomDmg(5, 8);
        const bonusDMG = randomDmg(5,11);
        const attack = readLine.keyIn("Press 'a' to abstain from temptation! ", { limit: "a"});
//Check for items equipped to abstain from temptation
        if (resistanceEquipped === true){
            console.log(
                `\nYou abstain from the ${temptation} for ${playerDmg} points of moral loss + ${bonusDMG} points of additional moral loss!\n`
            );
            temptationHp = temptationHp - (playerDmg + bonusDMG);
        } else {
            console.log(`\nYou abstain from the ${temptation} for ${playerDmg} points of abstinence!`);
            temptationHp = temptationHp - playerDmg;
        }
        console.log(`\nThe ${temptation} lurs you in for ${temptationDmg} points of moral loss!\n`);
        hp = hp - temptationDmg;
        if (temptationHp <= 0) {
            console.log(`\nYou have overcome the temptation and moral has been restored to you by 33 points! You now have more tools in your mindset to over come temptation. You are getting closer to enlightenment!\n`
            );
            experience = experience + 33;
            if (experience === 100) {
                playerLevel++;
                hp = 100;
                experience = 0;
                console.log(`You have reached level ${playerLevel} and are closer to enlightenment!`
                );
            }
            hasItems = true;
//Add if statment that only adds up to 100 hp, 
            if (hp < 100) {
                hp = hp + 30;
            }
            temptationHp = 100;
            userInventory.push(playerItem);
            break;
        } else if (hp <= 0) {
// Moral is gone and asks user to play again. If yes, temptation respawns with full Hp & tools of morality clear out. 
            console.log(`\nOh no! You gave into temptation!\n`);
            playAgain();
            temptationHp = 100;
            userInventory = [];
            break;
        }
    }
}
// Function to allow player to play again or not.
function playAgain() {
    const playAgain = readLine.keyInYN("Would you like to journey again? ");
    if (playAgain === true) {
        hp = 100;
    } else {
        console.log("Come back when you are ready to overcome temptation to reach enlightenment!");
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

