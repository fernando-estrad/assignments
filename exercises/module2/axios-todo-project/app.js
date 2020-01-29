const axios = require('axios')

axios.get("https://api.vschool.io/fernandoestrada/todo")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))