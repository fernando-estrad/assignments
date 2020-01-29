const xhr = new XMLHttpRequest()
const list = document.getElementById("list")

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()



xhr.onreadystatechange = function(){
    if (xhr.status === 200 && xhr.readyState === 4){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        const pokeArr = data.objects[0].pokemon
        listPokemon(pokeArr)
        console.log(data)
    }
}

function listPokemon(pokeArr){
    for (i = 0; i < pokeArr.length; i++){
        const pokemonName = pokeArr[i].name
        const h3 = document.createElement("h3")
        h3.innerHTML = `<li> ${pokemonName} </li>\nThis is Pokemon ${i + 1}`
        list.append(h3)
    }
}

