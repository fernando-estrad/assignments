import React, {Component} from "react"

export default class Form extends Component{
    render(){
        return (
            <form className="form" onSubmit={this.props.handleSubmit}>
                <input 
                    minLength="3" 
                    type="first name" 
                    name="fName" 
                    placeholder="First Name" 
                    autoComplete="given-name"
                    value={this.props.state.fName}
                    onChange={this.props.handleChange} 
                />
                <input 
                    minLength="3" 
                    type="last name" 
                    name="lName" 
                    placeholder="Last Name" 
                    autoComplete="family-name" 
                    value={this.props.state.lName}
                    onChange={this.props.handleChange}
                />
                <input 
                    minLength="3" 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={this.props.state.email}
                    onChange={this.props.handleChange} 
                />
                <input 
                    minLength="3" 
                    type="tel" 
                    name="phoneNumber" 
                    placeholder="Phone Number" 
                    value={this.props.state.phoneNumber}
                    onChange={this.props.handleChange}
                />
                <input 
                    minLength="3" 
                    type="text" 
                    name="placeOfBirth" 
                    placeholder="Place of Birth" 
                    value={this.props.state.placeOfBirth}
                    onChange={this.props.handleChange}
                />
                <input 
                    minLength="3" 
                    type="text" 
                    name="favoriteFood" 
                    placeholder="Favorite Food" 
                    value={this.props.state.favoriteFood}
                    onChange={this.props.handleChange}
                />
                <textarea 
                    name="about"
                    placeholder="Tell us about yourself."
                    value={this.props.state.about}
                    onChange={this.props.handleChange}
                />
                <button 
                    disabled={
                        !this.props.state.fName || 
                        !this.props.state.lName || 
                        !this.props.state.email ||
                        !this.props.state.phoneNumber ||
                        !this.props.state.placeOfBirth || 
                        !this.props.state.favoriteFood  || 
                        !this.props.state.about 
                    }> Create New Badge 
                </button>
            </form>
        )
    }
}