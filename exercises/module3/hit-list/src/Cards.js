import React from "react"
import Card from "./Card"
const axios = require('axios')

export default class Cards extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            targets: []
        }
        
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => {this.setState({
                loading: false,
                targets: response.data
            })})
    }

    // handleClick(){
    //     console.log("clicked")
    // }

    render(){
        const card = this.state.targets.map(target => <Card target={target} handleClick={this.handleClick}/>)

        return(
            <div className="cards">
                {this.state.loading ? "Loading..." : card}
            </div>
        )
    }
}