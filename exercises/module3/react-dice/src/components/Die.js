import React from 'react'

class Die extends React.Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        console.log("hi")
    }

    render(){
        return(
            <img src={this.props.img[this.props.num]} onClick={this.handleClick}/>
        )
    }
}

export default Die