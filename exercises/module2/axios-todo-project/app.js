const form = document.newTodo
const title = form.title
const description = form.description
const imgUrl = form.imgUrl
const list = document.getElementById("todoList")


//Populating the list items in API onto page on load
function getList(){
    axios.get("https://api.vschool.io/fernandoestrada/todo")
        .then(response => listData(response.data))
        .catch(err => console.log(err))
}

function listData(data){
    data.forEach(data => {
        createTodo(data)
        // const delBtn = document.getElementsByClassName("delBtn")
        // for (let i = 0; i < delBtn.length; i++){
        //     delBtn[i].addEventListener("click", eraseItem)
        // }
    })
}

getList()

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newItem = {
        title: title.value,
        description: description.value,
        imgUrl: imgUrl.value
    }  

    axios.post("https://api.vschool.io/fernandoestrada/todo", newItem)
        .then(response => createTodo(response.data))
        .catch(err => console.log(err)) 
})

function eraseItem(id){
    axios.delete(`https://api.vschool.io/fernandoestrada/todo/${id}`)
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
}

function isComplete(){
    const checkbox = document
}

function createTodo(todo){
    const newLi = document.createElement("li")
    
    if (todo.imgUrl == ""){
        newLi.innerHTML = `<li><span class = newTodoTitle>${todo.title}</span><input class="checkbox" type="checkbox" name="isCompleted">
        <label class = "checkboxLabel">Completed</label><br><span class=newTodoDescription>${todo.description}</span><br><hr class="listHr"></li>`
    } else {
        newLi.innerHTML = `<li><img class = newTodoImg src="${todo.imgUrl}"><span class = newTodoTitle>${todo.title}</span>
        <input class="checkbox" type="checkbox" name="isCompleted"><label class="checkboxLabel">Completed</label>
        <br><span class=newTodoDescription>${todo.description}</span><br><hr class="listHr"></li>`
    }

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.addEventListener("click", (e) => {
        eraseItem(todo._id)
        e.target.parentNode.remove()
    })
    deleteBtn.className = "delBtn"
    newLi.append(deleteBtn)

    list.appendChild(newLi)
}

