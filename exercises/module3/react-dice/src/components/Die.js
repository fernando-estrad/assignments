import React from 'react'

class Die extends React.Component {
    constructor(){
        super()
        this.state = {
            isClicked: false
        }
        this.stopChanging = this.stopChanging.bind(this)
    }

    stopChanging(){
        if (this.state.isClicked) {
            this.setState({isClicked: false})
        } else if (this.state.isClicked === false) {
            this.setState({isClicked: true})
        }
    }

    render(){
        return(
            <img 
                src={this.props.img[this.props.num]} 
                onClick={this.stopChanging} 
                style={this.state.isClicked ? {height: "75px", width: "75px"} : {height: "60px", width: "60px"}} 
            />
        )
    }
}

export default Die