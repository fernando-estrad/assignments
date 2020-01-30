const axios = require('axios')

const newTodo = {
    title: "This is the first one",
    description: "Random description",
    imgUrl: "randomwebsite.com/img.jpg"
}

axios.post("https://api.vschool.io/fernandoestrada/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))