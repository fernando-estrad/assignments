import React from "react"

class RollButton extends React.Component{
    render(){
        return(
            <button className="roll-button" onClick={this.props.randomizer}>Roll</button>
        )
    }
}

export default RollButton