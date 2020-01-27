// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         let petName;
//         if (pets[i] === "cat") {
//             petName = "fluffy"
//         } else {
//             petName = "spot"
//         }
//         console.log("pet name: ", petName)
//         pet.name = petName
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map((carrot) => {
//         return { type: "carrot", name: carrot }
//     })
// }

// console.log(mapVegetables([carrots]))

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter((person) => {
//         return person.friendly
//     })
// }

// console.log(filterForFriendly(people))

// const doMathSum = (a, b) => {
//     return a + b
// }
// console.log(doMathSum(1, 2))


// const produceProduct = (a, b) => {
//     return a * b
// }
// console.log(produceProduct(2, 4))

// function printString(firstName = 'Jane', lastName = 'Doe', age = 10){
//     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
// }
// console.log(printString("Fernando", "Estrada", 23))

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
// function filterForDogs(arr){
//     return arr.filter(animal => {
//         return animal.type === "dog"
//     })
// }

// console.log(filterForDogs(animals))

function welcomeMessage(location, name){
    return `Hi ${name}!

Welcome to ${location}

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}

console.log(welcomeMessage("Egypt", "Fernando"))