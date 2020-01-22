// function fiveAndGreaterOnly(arr) {
//     const result = arr.filter(num => num > 5)
//     return result
//   }

//   console.log(fiveAndGreaterOnly([3, 6, 8, 2, 5, 11, 5.5, 1]));

// function evensOnly(arr) {
//     const result = arr.filter(num => num % 2 === 0)
//     return result
//   }
//   console.log(evensOnly([3, 6, 8, 2]))

// function fiveCharactersOrFewerOnly(arr) {
//     const result = arr.filter(str => str.length <= 5)
//     return result
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

// function peopleWhoBelongToTheIlluminati(arr){
//     const result = arr.filter(person => person.member === true)
//     return result
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true},
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: true},
//       { name: "Bob Ziroll", member: false }
//   ]));
function ofAge(arr){
    const result = arr.filter(person => person.age >= 18)
    return result
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
