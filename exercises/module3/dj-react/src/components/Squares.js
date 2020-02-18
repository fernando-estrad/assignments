import React from "react"
import Square from "./Square"
import Buttons from "./Buttons"

class Squares extends React.Component{
    constructor(){
        super()
    }

    render(){
        const square = this.props.colors.map(color => <Square color={color} />) 
        return (
            <div className="squares">
                {square}
            </div>
        )
    }
}

export default Squares