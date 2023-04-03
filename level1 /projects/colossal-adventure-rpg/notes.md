Description

The year is 1985. Your job is to build a text-based (console) RPG game.
The point of this exercise is to better master Javascript functions, loops, conditionals, and some data types.

**Project Requirements:** 

1. Console must greet player with a fun message -- "Greetings traveler, you are about to embark on a journey of a lifetime, to collect knowledge by adverting from temptations.. It will take stamina, patience, and willingness to learn, but first...tell me your name?"
2. Console must ask for the player's name and store it -- "Pleasure to know your name ___ " " Are you ready to begin?"
3. Walking:
- The console will ask the user to enter a "w" to walk
- Every time the player walks, a random algorithm will be run that determines if a temptation has appeared (A 1/3 or 1/4 chance of encounter)
- Use a while loop to control this flow.
1. If a temptation appears:
- The temptation is random (can be chosen out of a minimum of 3 different temptation names)
- The user can decide to fight or return home
- If fighting, a random amount of moral will be dealt between a min and max
- If retruning, there will be a 50% chance of losing all knowledge
- After the player resists or returns fights the temptation strikes back for a random hp amount
- The player and temptation will exchange energy each other in a loop until one of them gives in.
- If the player resists and fight the Player will recieve some HP and special item that is stored in the inventory . After this, the player will continue walking.
- If the player gives into temptation the console prints a cool assuring message and the game ends -- "Come back when you are ready to face temptation to reach enlightment."
1. Inventory
- When the player is successfl in resisting temptation, they are awarded with a level up (optional)
- If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory

The story is the warroirs journey to enlightnment. Temptation along the way that takes vitality and moral. If successful the player will reach a new level closer to enlightenment. If giving into temptation and distraction, the player will need to return to try again..