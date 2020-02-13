import React from 'react'

function Card(props){
    return(
        <div className="card">
            <h1><a href={props.spot.linkUrl} target="_blank">{props.spot.place}</a></h1>
            <p>${props.spot.price}</p>
            <p>Best Time to Go: {props.spot.timeToGo}</p>
            <hr></hr>
        </div>
    )
}

export default Card 