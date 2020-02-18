import React from "react"

class Button extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className="button"> 
                <button onClick={this.props.function}>{this.props.innerText}</button>
            </div>
        )
    }
}

export default Button