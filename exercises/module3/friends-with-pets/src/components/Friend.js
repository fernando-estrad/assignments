import React from "react"
import Pet from "./Pet"

function Friend(props){
    let {pets, name, age} = props.friend
    const petProps = pets.map(pet => <Pet pet={pet}/>)
    console.log(petProps)

    return(
        <div className="friend">
            <h1>Friend Name: {name}</h1>
            <p>Friend Age: {age}</p>
            <h2>Pets:</h2>
            {petProps}
        </div>
    )
}

export default Friend