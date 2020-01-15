function capitalizeAndLowerCase(str){
    return str.toUpperCase() + " " + str.toLowerCase()
}
// console.log(capitalizeAndLowerCase("hey"))

function findMidIndex(str){
    return Math.floor(str.length/2)
}
// console.log(findMidIndex("hello world"))

function halfAndHalf(str){
    let middle = findMidIndex(str)
    let firstHalf = str.slice(0, middle)
    let secondHalf = str.slice(middle)
    return firstHalf.toUpperCase() + secondHalf.toLowerCase()
}
console.log(halfAndHalf("Hello World"))