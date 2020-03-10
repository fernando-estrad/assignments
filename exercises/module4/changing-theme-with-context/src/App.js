import React, {Component} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from './components/Footer'

import "./App.css"

export default class App extends Component {
    render(){
        return(
            <div>
                <Navbar />
                <Main />
                <Footer />
            </div>
        )
    }
}