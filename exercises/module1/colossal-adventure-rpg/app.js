var readline = require('readline-sync')
const playerName = readline.question("Welcome to my RPG game. \nYou may type 'p' at any time to show your inventory and HP. \nKill 10 enemies without dying to win! \n\nWhat is your name?: ")
let lookingForEnemy = true
const enemies = ["Goblin", "Orc", "Centaur", "Witch", "Giant Crab"]
let playerHp = 12
let fightOrFlight = ["Try to run away.", "Fight!"]
let enemyHealth
let fighting
let playerDamageDealt, typeOfEnemy, enemyDamageDealt;
let isAlive = true 
let possibleItems = [" Iron Sword", " Wooden Shield", " Steel Sword", " Bronze Helm", " Steel Helm", " Short Bow", " Long Bow", " Steel Armor", " Worthless Junk"]
let inventory = []
let itemReceived
let enemiesKilled = 0


while (isAlive === true){
    while (lookingForEnemy === true){
    const walking = readline.keyIn("Press 'w' to walk: ",{limit: ['w', 'p']})
        if (walking === 'p'){
            console.log("\n" + playerName + ", you have " + playerHp + " HP left. \nYour items: " + inventory)
        } else if (walking === 'w'){
        console.log("Walking...")
        let enemyAppear = (Math.floor(Math.random() * 100))
        if (enemyAppear <= 25){
            typeOfEnemy = enemies[Math.floor(Math.random() * enemies.length)]
            enemyHealth = Math.floor((Math.random() * 10) + 1)
            if (enemyHealth == 0){enemyHealth + 10}
            console.log("\nAn enemy has appeared! \nThis " + typeOfEnemy + " has " + enemyHealth + ' HP!')
            lookingForEnemy = false
        }
    }
    }
    while (lookingForEnemy === false){
        index = readline.keyInSelect(fightOrFlight, playerName + ", what would you like to do?: ")
        if (index === 0){
            console.log("\n" + playerName + " attempts to run away...")
            readline.keyInPause()
            let didEscape = Math.random()
            if (didEscape <= 0.5){
                console.log("\nYou successfully ran away!")
                lookingForEnemy = true
            } else {
                console.log("\nYou failed to run away, you must fight!")
                fighting = true
                lookingForEnemy = true
            }
        } else if (index === 1){
            fighting = true
            lookingForEnemy = true
        }
    }
    while (fighting === true){
        console.log("\n" + playerName + " attacks!")
        readline.keyIn("Press 'a' to attack: ", {limit: 'a'})
        playerDamageDealt = Math.floor((Math.random() * 6) + 1)
        console.log("\nYou struck the " + typeOfEnemy + " and dealt " + playerDamageDealt + " damage!")
        enemyHealth -= playerDamageDealt
        console.log("The " + typeOfEnemy + " has " + enemyHealth + " health left!")
        readline.keyInPause()
        if (enemyHealth <= 0){
            console.log("\nYou have killed the " + typeOfEnemy + "!")
            itemReceived = possibleItems[Math.floor(Math.random() * possibleItems.length)]
            console.log("\nYou have received" + itemReceived)
            inventory.push(itemReceived)
            enemiesKilled += 1
                if (enemiesKilled === 1){
                    console.log("You have slain " + enemiesKilled + " enemy.")
                } else if (enemiesKilled > 1 && enemiesKilled < 10){
                console.log("You have slain " + enemiesKilled + " enemies!")
                }
                if (enemiesKilled >= 10){
                    console.log("Congratulations, " + playerName + ", you are the greatest warrior this world has ever seen!")
                    isAlive = false
                    fighting = false
                }
            fighting = false
        } else if (enemyHealth > 0){
        enemyDamageDealt = Math.floor((Math.random() * 3) + 1)
        console.log("\nThe " + typeOfEnemy + " attacks back and deals " + enemyDamageDealt + " damage!")
        playerHp -= enemyDamageDealt
        console.log("You have " + playerHp + " HP left.")
        if (playerHp <= 0){
            console.log("\n" + playerName + " has died... Game Over")
            isAlive = false
            fighting = false
        }
        }
    }
}