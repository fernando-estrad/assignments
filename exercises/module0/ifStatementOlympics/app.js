//Prelims
if (5 > 3){
    //console.log("is greater than")
}

if ("cat".length === 3){
    //console.log("is the length")
}

if ("cat" === "dog"){
    //console.log("are the same ")
}   else {
    //console.log("not the same")
}

//Bronze Medal
var person = {
    name: "Bobby",
    age: 12
}

// if (person.age >= 18){
//     console.log(person.name + " is allowed to go to the movie.")
// } else {
//     console.log(person.name + " is not allowed to go to the movie.")
// }

// if (person.name[0] === "B"){
//     console.log(person.name + " is allowed to go to the movie.")
// } else {
//     console.log(person.name + " is not allowed to go to the movie.")
// }

// if (person.name[0] === "B" && person.age >= 18) {
//     console.log(person.name + " is allowed to go to the movie.")
// } else {
//     console.log(person.name + " is not allowed to go to the movie.")
// }

//Silver Medal
// if (1 === "1"){
//     console.log("strict")
// } else if (1 == "1"){
//     console.log("loose")
// } else {
//     console.log("not equal at all")
// }

//Gold Medal 
// if (typeof "dog" === 'string'){
//     console.log ("it is a string")
// }

// if (typeof "true" === "boolean"){
//     console.log ("it is a boolean")
// }

// var apple = "22"
// if (typeof apple === "undefined"){
//     console.log("Variable is undefined")
// }

// if ("s" > 12){
//     console.log("It is greater")
// } else {
//     console.log("Not the same type of data")
// }

function oddOrEven(num){
    return (num % 2) === 0 ? 'even' : 'odd'
}

console.log(oddOrEven(12))