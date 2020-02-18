import React from "react"
import Button from "./Button"
import Squares from "./Squares"

class Buttons extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className="buttons">
                <Button innerText="B/W" function={this.props.blackOrWhite} />
                <Button innerText="Two Purple" function={this.props.twoPurple} />
                <Button innerText="Third Blue" function={this.props.thirdBlue} />
            </div>
        )
    }
}

export default Buttons

