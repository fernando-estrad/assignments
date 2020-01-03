const group = [
    {
        name: "Fernando",
        age: 23,
        gender: "male"
    },
    {
        name: "Taylor",
        age: 22,
        gender: "female"
    },
    {
        name: "Eric 1",
        age: 32,
        gender: "male"
    },
    {
        name: "Eric 2",
        age: 31,
        gender: "male"
    }
]

function theErics(){
    var i = 0;
    for (i = 0; i < group.length; i++) {
        var g = group[i].gender;
        console.log(g)
        if (g === "female"){
            var pronoun = "she"
        }
        else {
            var pronoun = "he"
        }
        console.log("This is " + group[i].name + ", " + pronoun +" is " + group[i].age + " years old.")
    }
}

theErics(group)