import React from "react"
import "./App.css"
import Home from "./components/Home"
import Nav from "./components/Nav"
import SkillList from "./components/SkillList"
import Resume from "./components/Resume"
import About from "./components/About"
import Contact from "./components/Contact"

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
            <h2 id="about">About</h2>
            <hr></hr>
            <About />
            <Contact />
        </div>
    )
}