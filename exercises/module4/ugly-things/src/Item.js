import React from "react"

export default function Item(props) {
    return (
        <div className="item">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img src={props.imgUrl} alt={props.title}></img>
        </div>
    )
}