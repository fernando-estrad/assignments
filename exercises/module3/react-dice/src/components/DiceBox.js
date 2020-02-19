import React from 'react'
import Die from "./Die"
import {one, two, three, four, five, six} from "../imageLinks"

class DiceBox extends React.Component {
    constructor(){
        super()
        this.state = {
            images: [one, two, three, four, five, six]
        }
    }
    
    render(){
        const dice = this.props.nums.map(num => <Die img={this.state.images} num={num}/>)
        return (
            <div className="dice-box">
                {dice}
            </div>
        )
    }
}

export default DiceBox