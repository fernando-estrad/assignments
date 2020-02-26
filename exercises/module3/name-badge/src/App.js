import React, {Component} from "react"
import Form from "./Form"
import "./styles.css"

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            fName: "",
            lName: "",
            email: "",
            phoneNumber: "",
            placeOfBirth: "",
            favoriteFood: ""
        }
    }

    handleChange = e => {
        const {name, value} = e.target

        this.setState({ [name]: value})

        console.log(this.state)
    }

    render(){
        return(
            <div className="main">
                <Form state={this.state} handleChange={this.handleChange}/>
            </div>
        )
    }

}