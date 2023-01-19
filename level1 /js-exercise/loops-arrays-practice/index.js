// 1. Loop through the following array and count how many "computers" there are. Log the final count:
let count = 0;
let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
for(let i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        count++
    }
}
console.log(`There are a total of ${count} computers in the array.`);


//2 Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

let peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];

for (let i = 0; i <peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
  if(
    peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 &&
    peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'
  ){
    console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough, let him in.`);
  } else if(
    peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 &&
    peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'
  ){
    console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough, don't let him in.`);
  } else if(
    peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 &&
    peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female'
  ){
    console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough, let her in.`);
  } else if(
    peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 &&
    peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female'
  ){
    console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough, don't let her in.`);
  }
};

//Using the reduce method I can get the console to toggle the light on or off. 

let numbers = [3, 4, 5, 6, 6];

const sum = numbers.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

if (sum % 2 === 0) {
  console.log('The light is off');
} else {
  console.log('The light is on');
}