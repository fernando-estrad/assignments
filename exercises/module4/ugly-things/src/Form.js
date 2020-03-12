import React, {Component} from "react"
import  {ContextConsumer} from './Context'

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

    handleSubmit = (e, addUglyThing) => {
        e.preventDefault()

        addUglyThing(this.state)
    }

    render(){
        return(
            <ContextConsumer>
                {context => (
                    <form onSubmit={(e) => this.handleSubmit(e, context.addUglyThing)}>
                        <input placeholder="Image URL" name="imgUrl" value={this.state.newImgUrl} onChange={this.handleChange}></input>
                        <input placeholder="Title" name="title" value={this.state.newTitle} onChange={this.handleChange}></input>
                        <input placeholder="Description" name="description" value={this.state.newDescription} onChange={this.handleChange}></input>
                        <button>Submit</button>
                    </form>
                )}
            </ContextConsumer>
        )
    }
}