let counter = +localStorage.getItem("runningCount")
const counterDisplay = document.getElementById("counterDisplay")
counterDisplay.innerText = localStorage.getItem("runningCount")

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 32){
        counter += 1
        localStorage.setItem("runningCount", counter)
        counterDisplay.innerText = counter
    }
    else if (e.keyCode === 8){
        localStorage.removeItem("runningCount")
        location.reload()
    }
})

