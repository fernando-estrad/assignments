var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabetArr = alphabet.split("")
var finalArr = []

for (var i = 0; i < people.length; i++){
    finalArr.push(people[i] + ": ")
    for (var j = 0; j < alphabetArr.length; j++){
        finalArr.push(alphabetArr[j])
    }
}
console.log(finalArr)