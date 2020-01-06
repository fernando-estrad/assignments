//Sum of two numbers
function sum(num1, num2){
    return num1 + num2
}
//console.log(sum(55,6))

//Lagest of three numbers
function largestNum(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return num1
    } else if (num2 >> num1 && num2 > num3){
        return num2
    } else {
        return num3
    }
}
//console.log(largestNum(100,22,444))

//Even or Odd
function oddOrEven(num){
    if (num % 2 === 0){
        return "Even"
    } else {
        return "Odd"
    }
}
//console.log(oddOrEven(31))

//String Return
function myFunc(words){
    if (words.length <= 20){
        return words + " " + words
    } else {
        return words.substr(0, (words.length/2))
    }
}
//console.log(myFunc("This is a very long sentence and I dont know what I am writing."))

//Fibonacci Sequence
function fiboSeq(n){
    if (n <= 1) {
        return 1;
    } else {
        return fiboSeq(n - 1) + fiboSeq(n - 2)
    }
}
//console.log(fiboSeq(6))