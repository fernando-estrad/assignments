const readline = require("readline-sync")

function add(num1, num2){
    return num1 + num2
}
function sub(num1, num2){
    return num1 - num2
}
function mult(num1, num2){
    return num1 * num2
}
function div(num1, num2){
    return num1 / num2
}

var inputOne = +readline.question("Please enter your first number: ")
// console.log(typeof inputOne)
var inputTwo = +readline.question("Please enter your second number: ")
// console.log(inputTwo)
var operation = readline.question("What operation would you like to perform? Choose from sum, sub, mult or div: ")

if (operation === "sum"){
    console.log("The result is " + add(inputOne, inputTwo))
} else if (operation === "sub"){
    console.log("The result is " + sub(inputOne, inputTwo))
} else if (operation === "mult"){
    console.log("The result is " + mult(inputOne, inputTwo))
} else if (operation === "div"){
    console.log("The result is " + div(inputOne, inputTwo))
} else {
    console.log("Improper operation.")
}