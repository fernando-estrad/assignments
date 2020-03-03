import React from 'react'
const axios = require('axios')

export default class RandomColorComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            color: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        axios.get(`http://www.colr.org/json/color/random`)
            .then(response => this.setState({
                color: response.data.colors[0].hex
            }))
        

    }

    handleClick(){
        console.log(this.state.color)
    }

    render(){
        return (
            <div className="rcc-container">
                <div className="square" style={{backgroundColor: `#${this.state.color}`}}>
                </div>
                <button onClick={this.handleClick} >Change Color</button>
            </div>
        )
    }
}