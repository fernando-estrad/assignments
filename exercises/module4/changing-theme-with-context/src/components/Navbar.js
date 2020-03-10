import React from "react"
import { ContextConsumer } from "../Context"

export default function Navbar(){
    return (
        <ContextConsumer>
            {context => (
                <nav className={`nav-${context.theme}`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </nav>
            )}
        </ContextConsumer>
    )
}