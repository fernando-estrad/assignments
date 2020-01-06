//Prelims
for (i = 0; i <10; i++){
    //console.log(i)
}

for (i = 9; i > -1; i--){
    //console.log(i)
}
var fruit = ["banana", "orange", "apple", "kiwi"]
for (i=0; i < fruit.length; i++){
    //console.log(fruit[i])
}

//Bronze Medal
var arr = []
for (i=0; i<10; i++){
   arr.push(i)
}
//console.log(arr[0])

for (i=0; i<101; i += 2){
    //console.log(i)
}

var fruitArr = ["banana","orange", "apple", "kiwi", "pear", "peach"]
var NewfruitArr = []
for (i=0; i<fruitArr.length; i+=2){
    NewfruitArr.push(fruitArr[i])
}
//console.log(NewfruitArr)

//Silver Medal
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for (i=0; i < peopleArray.length; i++){
    //console.log(peopleArray[i].name)
}

var names = []
var occup = []
for (i=0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name)
    occup.push(peopleArray[i].occupation)
}
//console.log(names)
//console.log(occup)

var everyOtherName = []
var everyOtherOccup = []
for (i=0; i<peopleArray.length; i+=2){
    everyOtherName.push(peopleArray[i].name)
    everyOtherOccup.push(peopleArray[i+1].occupation)
}
//console.log(everyOtherName)
//console.log(everyOtherOccup)

//Gold Medal
var mainZeroArr = []
for (let i = 0; i<3; i++){
    mainZeroArr.push([])
    for (let j = 0; j<3; j++){
    mainZeroArr[i].push(0)
    }
}
//console.log(mainZeroArr)

var secondArr = []
for (let i = 0; i<3; i++){
    secondArr.push([])
    for (let j = 0; j<3; j++){
    secondArr[i].push(i)
    }
}
//console.log (secondArr)

var thirdArr = []
for (let i = 0; i<3; i++){
    thirdArr.push([])
    for (let j = 0; j<3; j++){
    thirdArr[i].push(j)
    }
}
//console.log(thirdArr)

var xArr = []
for (let i = 0; i<3; i++){
    xArr.push([])
    for (let j = 0; j<3; j++){
    xArr[i].push("x")
    }
} //console.log(xArr)