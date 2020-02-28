import React, {Component} from "react"
import Form from "./Form"
import Badge from "./Badge"
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
            favoriteFood: "",
            about: "",
            badges: []x
        }
    }

    handleChange = e => {
        const {name, value} = e.target

        this.setState({ [name]: value})

        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault()
        
        this.setState(prevState => {
            let {fName, lName, email, phoneNumber,placeOfBirth, favoriteFood, about} = prevState
            return {
                fName: "",
                lName: "",
                email: "",
                phoneNumber: "",
                placeOfBirth: "",
                favoriteFood: "",
                about: "",
                badges:  [...prevState.badges, {
                    fName,
                    lName,
                    email,
                    phoneNumber,
                    placeOfBirth,
                    favoriteFood,
                    about
                }]
               
            }
        })
    }

    render(){
        const badgeComponent = this.state.badges.map(badge => <Badge badge={badge} />)
        return(
            <div className="main">
                <Form state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <div className="badges-container">
                    {badgeComponent}
                </div>
            </div>
        )
    }

}