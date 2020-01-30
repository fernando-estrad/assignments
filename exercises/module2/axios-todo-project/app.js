const axios = require('axios')

const newTodo = {
    title: "This is the first one",
    description: "Random description",
    imgUrl: "randomwebsite.com/img.jpg"
}

axios.get("https://api.vschool.io/fernandoestrada/todo")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))