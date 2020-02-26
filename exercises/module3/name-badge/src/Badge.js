import React, {Component} from "react"

export default class Badge extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className="badge">
                <h2>Badge</h2>
                <p><b style={{fontSize: "20px"}}>Name: </b>{this.props.badge.fName} {this.props.badge.lName}</p>
                <p><b style={{fontSize: "20px"}}>Email: </b>{this.props.badge.email}</p>
                <p><b style={{fontSize: "20px"}}>Phone Number: </b>{this.props.badge.phoneNumber}</p>
                <p><b style={{fontSize: "20px"}}>Birth Place: </b>{this.props.badge.placeOfBirth}</p>
                <p><b style={{fontSize: "20px"}}>Favorite Food: </b>{this.props.badge.favoriteFood}</p>
                <p><b style={{fontSize: "20px"}}>About: </b>{this.props.badge.about}</p>
            </div>
        )
    }
}