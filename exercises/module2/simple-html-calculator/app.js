const addForm = document.additionForm
const subForm = document.substractionForm
const multForm = document.multForm
// const clearButton = document.getElementById("clearBtn")

// clearButton.addEventListener("click", () => {
//     document.getElementById("addResults").innerText = ""
//     document.getElementById("subResults").innerText = ""
//     document.getElementById("multResults").innerText = ""
// })

addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    document.getElementById("addResults").innerText = ""
    let addOne = addForm.addFirstNum
    let addTwo = addForm.addSecondNum
    let addResult = +addOne.value + +addTwo.value
    document.getElementById("addResults").append(addResult)
    addOne.value = ""
    addTwo.value = ""
} )

subForm.addEventListener("submit", (e) => {
    e.preventDefault()
    document.getElementById("subResults").innerText = ""
    let subOne = subForm.subFirstNum
    let subTwo = subForm.subSecondNum
    document.getElementById("subResults").append(+subOne.value - +subTwo.value)
    subOne.value = ""
    subTwo.value = ""
})

multForm.addEventListener("submit", (e) => {
    e.preventDefault()
    document.getElementById("multResults").innerText = ""
    let multOne = multForm.multFirstNum
    let multTwo = multForm.multSecondNum
    document.getElementById("multResults").append(+multOne.value * +multTwo.value)
    multOne.value = ""
    multTwo.value = ""
})