// function total(arr) {
//     const result = arr.reduce((final, num) => {
//         final += num
//         return final
//     })
//     return result
//  }
 
//  console.log(total([1,2,3, 55]));

// function stringConcat(arr) {
//     const result = arr.reduce((final, num) => {
//         final += num
//         return final
//     }, "")
//     return result
//  }
 
//  console.log(stringConcat([1,2,3]));

// function totalVotes(arr) {
//     const didVote = arr.reduce((final, voters) => {
//         if(voters.voted){
//             final += 1
//         }
//         return final
//     }, 0)
//     return didVote   
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters));

// function shoppingSpree(arr) {
//     const result = arr.reduce((final, obj) => {
//         final += obj.price
//         return final
//     }, 0)
//     return result
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ]

//  console.log(shoppingSpree(wishlist))

// function flatten(arr) {
//     const result = arr.reduce((final, arr) => {
//         final.push(...arr)
//         return final
//     }, [])  
//     return result 
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
//  const flattenedArr = flatten(arrays)
//  console.log(flattenedArr[0])

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   const result = arr.reduce((final, voter) => {
    if (voter.age >= 18 && voter.age <= 25 && voter.voted){
        final.youth += 1
        final.youngVotes += 1
    } else if (voter.age >= 18 && voter.age <= 25 && !voter.voted){
        final.youth += 1
    }
    if (voter.age >= 26 && voter.age <= 35 && voter.voted){
        final.midVotes += 1
        final.mids += 1
    } else if(voter.age >= 26 && voter.age <= 35 && !voter.voted){
        final.mids += 1
    }
    // if (oter.age >= 26 && voter.age <= 35 && voter.voted)
    return final
   }, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0 })
   return result
}

console.log(voterResults(voters));