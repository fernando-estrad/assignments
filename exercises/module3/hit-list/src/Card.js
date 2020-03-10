import React from "react"
import UIfx from 'uifx'
import gunshot from './my-sounds/gunshot.mp3'

const gunShot = new UIfx (
    gunshot,
    {
        volume: .04,
        throttleMs: 50
    }
)

export default class Card extends React.Component {
    constructor(){
        super()
        this.state = {
            isAlive: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            isAlive: !this.state.isAlive
        })

        if (this.state.isAlive){
            gunShot.play()
        } 
    }
    
    render(){
        const imgUrl = this.state.isAlive ? this.props.target.image : "https://i.ytimg.com/vi/gPxJAx7ysVA/maxresdefault.jpg"

        return(
            <div 
                className={this.state.isAlive ? "card" : "dead-card"} 
                onClick={this.handleClick}
            >
                <img src={imgUrl} alt={this.props.target.name}></img>
                <h3>{this.props.target.name}</h3>
            </div>
        )
    }
}