import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import About from "./About"
import Services from "./Services"

export default function App(){
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
            </Switch>
        </div>
    )
}