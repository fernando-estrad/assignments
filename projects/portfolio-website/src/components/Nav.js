import React, {useState} from "react"

export default function Nav(){
    const [navClass, setNavClass] = useState("full-nav")

    return (
        <nav className={navClass}>
            <ul className="nav-list">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#techSkills">Skills</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="hamburger">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    )
}