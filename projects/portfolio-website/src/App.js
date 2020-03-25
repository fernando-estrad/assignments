import React from "react"
import "./App.css"
import Home from "./components/Home"
import Nav from "./components/Nav"
import SkillList from "./components/SkillList"

export default function App() {
    return (
        <div>
            <Nav />
            <Home />
            <h2>Tech Skills</h2>
            <hr></hr>
            <SkillList />
        </div>
    )
}