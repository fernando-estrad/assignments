// const arr = [1,2,3,4]

// function doubleNums(arr){
//     const newArr = arr.map(num => num * 2)
//     return newArr
// }
// console.log(doubleNums([1,2,3]))

// function stringItUp(arr){
//     const newArr = arr.map(num => num.toString())
//     return newArr
//   }
  
//   console.log(stringItUp([2, 5, 100]))

// function capitalizeNames(arr){
//     const newArr = arr.map(function(str){
//         let firstLetter = str.charAt(0).toUpperCase()
//         return firstLetter + str.substr(1).toLowerCase()  
//     })
//     return newArr
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt", "PoPyPsFgEs"]))

// function namesOnly(arr){
//     const userNames = arr.map((obj) => {
//         return obj.name
//     })
//     return userNames
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]))

// function makeStrings(arr){
//     const newArr = arr.map((obj) => {
//         if (obj.age > 18){
//             return `${obj.name} is old enough to go!`  
//         } else {
//             return `${obj.name} is too young!`
//         }
//     })
//     return newArr
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]))

function readyToPutInTheDOM(arr){
    const newArr = arr.map((obj) => {
        return `<h1>${obj.name}</h1><h2>${obj.age}</h2>`
    })
    return newArr
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]))
