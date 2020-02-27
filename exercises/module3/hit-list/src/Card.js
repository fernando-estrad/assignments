import React from "react"

export default function Card(props) {
    return(
        <div className="card" onClick={props.handleClick}>
            <img src={props.target.image} alt={props.target.name}></img>
            <h3>{props.target.name}</h3>
        </div>
    )
}