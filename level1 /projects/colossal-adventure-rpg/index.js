"use strict";

//I need to prepare the variables first, that includes enableing readLine, a greeting message, a question for the userName, a changeable inventory (let), healthpoints (let) for user & possible temptations, 

const readLine = require("readline-sync");
const greeting = console.long("Greetings traveler, you are about to embark on a journey of a lifetime, to collect knowledge from the greatest Guru known. It will take stamina, patience, discernment from temptation and willingness to learn...");
const userName = readline.question("Before we bein, please tell me your name: ");
let userInventory = [];
let hasItems = false;
let hp = 100;
let temptationHP = 100; 
let resistanceEquipped = false;
let playerLevel = 1; 
let experience = 0;

//with all variables defined now I need to write the walk function, game options, user option to key in their choice selection, then use if statments that run through the options with random chance of temptation appearing. 

function walk() {
    const options = ["Walk", "Traveler Info", "Equip Resistance to Temptation"];
    const userOption = readline.keyInSelect( options, "Make a choice from the following options:");
    if (userOption === 0) {
        const temptationAppears = Math.random();
        if (temptationAppears <= 0.4) {
            fight();
        } else if (userOptino === 1) {
            console.log (`\nUsername: ${userName}\nHP: ${hp}\nItems: ${userInventory}\nLevel: ${playerLevel1}\n`);
//If user has items and user will run if === true;
        } else if (userOption === 2 && hasItems) {
            const equipResistance = readLine.keyInYN("Do you want to resist this temptation to increase your chances to reach enlightenment?");
            if (equipResistance === true) {
                resistanceEquipped = true;
            }
        } else if (userOption === -1) {
            hp = 0;
            playAgain();
        }
    } 
}
