import React from "react"

class Square extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className="square" style={{backgroundColor: this.props.color}}></div>
        )
    }
}

export default Square