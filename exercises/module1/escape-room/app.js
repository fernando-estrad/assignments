const readline = require("readline-sync")

const playerName = readline.question("What is your name?: ")
console.log("")
console.log("Welcome, " + playerName + ". Attempt to escape the room.")

let choice = readline.question("What would you like to do?: [1]Put your hand in the hole  [2]Find the key  [3]Open the door: ")
if (choice == 1){
    console.log('You have died!')
}
else if (choice == 2){
    hasKey = true
    console.log("You found the key.")
    secondChoice = readline.question("Open the door? [1]Yes [2]No: ")
        if (secondChoice == 1){
            console.log("You escaped!")
        } else if (secondChoice == 2){
            console.log("You chose not to escape...")
        }
}
else if (choice == 3){
    console.log("The door is locked. The guard hears you fumble with the door and kills you.")
}
