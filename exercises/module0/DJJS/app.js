var square = document.getElementById("square")

function turnWhite(){
    square.style.backgroundColor = "white"
}
function turnBlue(){
    square.style.backgroundColor = "blue"
}
function turnRed(){
    square.style.backgroundColor = "red"
}
function turnYellow(){
    square.style.backgroundColor = "yellow"
}
function turnGreen(){
    square.style.backgroundColor = "green"
}
function turnOrange(){
    square.style.backgroundColor = "orange"
    console.log("scrolling")
}
function turnColor(color){
    square.style.backgroundColor = color
}

square.addEventListener("mouseover", function(){turnColor('blue')})
square.addEventListener("mouseout", turnWhite)
square.addEventListener("mousedown", turnRed)
square.addEventListener("mouseup", turnYellow)
square.addEventListener("dblclick", turnGreen)
window.addEventListener("scroll", turnOrange)

window.addEventListener('keydown', function(event){
    if (event.keyCode === 82){
        turnRed()
    } else if (event.keyCode === 71){
        turnGreen()
    } else if (event.keyCode === 79){
        turnOrange()
    } else if (event.keyCode === 66){
        turnBlue()
    } else if (event.keyCode === 89){
        turnYellow()
    }
})
window.addEventListener("keyup", turnWhite)