import React from "react"
import "./App.css"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Skills from "./components/Skills"

export default function App() {
    return (
        <div>
            <Nav />
            <Home />
            <Skills />
        </div>
    )
}