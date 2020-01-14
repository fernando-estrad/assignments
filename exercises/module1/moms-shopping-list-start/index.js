var list = document.getElementById("list")
var input = document.getElementById("input")
var submitButton = document.getElementById("submitButton")
var delButton = document.getElementsByClassName("xButton")

function addNew(){
    var newItem = document.createElement ('li')
    newItem.innerHTML = "<div>" + input.value + "</div> <button>edit</button> <button type='button' class='xButton'>X</button>"
    list.append(newItem)
    var newDelButton = document.getElementsByClassName("xButton")
    for (var i = 0; i < newDelButton.length; i++){
        newDelButton[i].addEventListener("click", eraseItem)
    }  
}
submitButton.addEventListener("click", addNew)

function eraseItem(e){
    var thisItem = this.parentNode
    thisItem.remove()
}

for (var i = 0; i < delButton.length; i++){
    delButton[i].addEventListener("click", eraseItem)
}