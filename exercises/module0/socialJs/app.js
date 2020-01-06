var gamers = {
    name: "Hank",
    age: 22,
    gender: "male",
    favoriteGames: [{
        name: "Modern Warfare",
        difficult: false,
        releaseYear: 2019,
    }, {
        name: "Rocket League",
        difficult: true,
        releaseYear: 2015,
    }, {
        name: "Mortal Kombat",
        difficult: true,
        releaseYear: 2015,
    }],
    friends:[{
        name: "Fernando",
        age: 23,
        gender: "male",
        favoriteGames: [{
            name: "Modern Warfare",
            difficult: false,
            releaseYear: 2019,    
        }, {
            name: "Skyrim",
            difficult: false,
            releaseYear: 2011,
        }, {
            name: "Rocket League",
            difficult: true,
            releaseYear: 2015,
        }]
    }, {
        name: "Hunter",
        age: 24,
        gender: "Male",
        favoriteGames: [{
            name: "Crash",
            difficult: false,
            releaseYear: 2019,
        }, {
            name: "Rocket League",
            difficult: true,
            releaseYear: function(){
                return(gamers.friends[0].favoriteGames[2].releaseYear)
            },
        }]
    }]
}

gamers.weight = 220
gamers.height = 70
gamers.friends.name = "Colt"
gamers.friends.age = 26

console.log(gamers.friends)