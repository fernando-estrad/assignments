import React, {Component} from "react"

export default class Form extends Component {
    state = {
        imgUrl: "",
        title: "",
        description: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        console.log("pressed")
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Image URL" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange}></input>
                <input placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}></input>
                <input placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}></input>
                <button>Submit</button>
            </form>
        )
    }
}