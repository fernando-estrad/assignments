import React from "react"

function Pet(props){
    return(
        <div className="pet">
            <h3>Name: {props.pet.name}</h3>
            <p>Breed: {props.pet.breed}</p>
        </div>
    )
}

export default Pet