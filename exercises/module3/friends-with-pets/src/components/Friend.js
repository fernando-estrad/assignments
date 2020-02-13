import React from "react"
import Pet from "./Pet"

function Friend(props){
    const petProps = props.friend.pets.map(pet => <Pet pet={pet}/>)
    console.log(petProps)

    return(
        <div className="friend">
            <h1>Friend Name: {props.friend.name}</h1>
            <p>Friend Age: {props.friend.age}</p>
            <h2>Pets:</h2>
            {petProps}
        </div>
    )
}

export default Friend