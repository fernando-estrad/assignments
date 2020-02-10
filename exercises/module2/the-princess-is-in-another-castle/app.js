class Player {
    constructor(name, totalCoins = 0, status = "Big", hasStar = false, gameActive = true){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.gameActive = gameActive
    }

    setName(namePicked){
        if (namePicked === "Mario"){
            this.name = "Mario"
        }
        else if(namePicked === "Luigi"){
            this.name = "Luigi"
        }
        return this.name
    }

    gotHit(){
        if (this.status === "Powered Up"){
            this.status = "Big"
        } else if (this.status === "Big"){
            this.status = "Small"
        } else if (this.status === "Small"){
            this.status = "Dead"
            this.gameActive = false
        }
    }

    gotPowerUp(){
        if (this.status === "Small"){
            this.status = "Big"
        } else if (this.status === "Big"){
            this.status = "Powered Up"
        } else if (this.status === "Powered Up"){
            console.log(`Congratulations! You got a star.`)
        }
    }
    
    addCoin(){
        this.totalCoins += 1
    }

    print(){
        console.log(
        `Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`)
    }
    
}
const playerOne = new Player("Luigi")

const intervalId = setInterval(function actions(min = 0, max = 3){
    const number = Math.floor(Math.random() * (max - min) + min)
    if (number === 0){
        playerOne.gotHit()
    } else if (number === 1){
        playerOne.gotPowerUp()
    } else if (number === 2){
        playerOne.addCoin()
    }
    if (playerOne.gameActive === false){
        clearInterval(intervalId)
    }
    playerOne.print()
    
}, 1000)




