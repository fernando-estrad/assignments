// try {
// function sum(x, y){
//     if (typeof x !== "number" || typeof y !== "number"){
//         throw new Error("Input is not a number.")
//     }
//     return x + y;
//     }
// }
// catch(err){
//     console.log(err)
// }

// console.log(sum(true, 3))

var user = {username: "sam", password: "123abc"};

function login(username, password){
    if(username !== user.username || password !== user.password){
        throw new Error ("Invalid username or password")
    }
    console.log("Login successful!")
}
try {
    login("sam", "123ac")
}

catch (err){
    console.log(err)
}

