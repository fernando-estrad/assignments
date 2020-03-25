import React from "react"
import "./App.css"
import Home from "./components/Home"
import Nav from "./components/Nav"
import SkillList from "./components/SkillList"
import Resume from "./components/Resume"

export default function App() {
    return (
        <div>
            <Nav />
            <Home />
            <h2 id="techSkills">Skills</h2>
            <hr></hr>
            <SkillList />
            <h2 id="resume">Resume</h2>
            <hr></hr>
            <Resume />
        </div>
    )
}