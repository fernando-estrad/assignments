// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// var counter = 0
// for (var i = 0; i < officeItems.length; i++){
//     if (officeItems[i] === "computer"){
//         counter++
//     }
// }
// console.log(counter)

var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
for (var i = 0; i < people.length; i++){
    var g = people[i].gender
    if (people[i].age >= 18 && g === "male"){
        console.log(people[i].name + " is old enough to watch this movie, let him in.")
    } else if (people[i].age < 18 && g === "male"){
        console.log(people[i].name + " is NOT old enough to watch this movie, don't let him in")
    } else if (people[i].age >= 18 && g === "female"){
        console.log(people[i].name + " is old enought to watch this movie, let her in.")
    } else if (people[i].age < 18 && g === "female"){
        console.log(people[i].name + " is NOT old enough to watch this movie, don't let her in.")
    }
}
