// function collectAnimals(...animals) {  
//     return animals
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "horse", 'Giraffe'))

// function combineFruit(fruits, sweets, vegetables){
//     return {fruits, sweets, vegetables}
// }

// console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]))

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//   function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }

//   console.log(parseSentence(vacation))

// function returnFirst(items){
//     const firstItem = {items}; /*change this line to be es6*/
//     return firstItem
// }
// console.log(returnFirst("sword"))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = favoriteActivities
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
// }

// console.log(returnFavorites(favoriteActivities))

// function combineAnimals(...arrays) {  
//     const animals = []
//     return  animals.concat(...arrays)
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];
// const otherAnimals = ["horse", "giraffe"]

// console.log(combineAnimals(realAnimals, magicalAnimals))

// function product(...nums) {  
//     var numbers = nums
  
//     return numbers.reduce((acc, number) => {
//       return acc * number
//     }, 1)
// }

// console.log(product(2, 2, 55))

function populatePeople(names){
    return names.map((name) => {
        name = name.split(" ");
        let firstName = name[0]
        let lastName = name[1]
        return {
            firstName: firstName,
            lastName: lastName
        }
})
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))