import React, {Component} from "react"

export default class Form extends Component {
    render(){
        return (
        <form onSubmit={this.props.handleSubmit}>
            <input 
                type="text" 
                placeholder="First Name" 
                value={this.props.state.fName} 
                name="fName" 
                onChange={this.props.handleChange}
            /> <br />
            <input 
                type="text" 
                placeholder="Last Name"
                value={this.props.state.lName} 
                name="lName" 
                onChange={this.props.handleChange}
                /> <br />
            <button>Submit</button>
        </form>
        )
    }
}