import React from "react"
import Form from "./Form"

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            fName: '',
            lName: '',
            names: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()

        if (this.state.fName === "" || this.state.lName === ""){
            alert("Please enter a full name")
        } else {
            this.setState(prevState => { 
                return {
                    fName: "",
                    lName: "",
                    names: [...prevState.names, `${this.state.fName} ${this.state.lName}`]
                }
            })
        }
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    render(){
        const namesList = this.state.names.map(name => <li> {name} </li>)
        return (
            <div>
                <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
                <h1>{this.state.fName} {this.state.lName}</h1>
                <ol>
                    {namesList}
                </ol>
            </div>
        )
    }
    
}