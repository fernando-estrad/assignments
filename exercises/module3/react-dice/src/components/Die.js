import React from 'react'

class Die extends React.Component {
    render(){
        return(
            <img src={this.props.img[this.props.num]} onClick={this.props.stopChanging} isClicked={this.props.isClicked}/>
        )
    }
}

export default Die