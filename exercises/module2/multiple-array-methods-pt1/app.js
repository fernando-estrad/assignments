var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
    const eighteenOrOlder = arr.filter(person => person.age >= 18)
    eighteenOrOlder.sort((a, b) => {
        if (a.lastName > b.lastName){
            return 1
        } else if (a.lastName < b.lastName){
            return -1
        }
        return 0
    })
    const newArr = []
    eighteenOrOlder.map(person => {
        newArr.push(`<li>${person.firstName} is ${person.age}</li>`)
    })
    return newArr
 }
 
 console.log(sortedOfAge(peopleArray))