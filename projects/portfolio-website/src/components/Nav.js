import React from "react"


export default function Nav(){
    
    const handleClick = () => {
        const navList = document.getElementById("navList")
        navList.classList.toggle("open")
        console.log(navList.classList)
    }

    const NormalNav = () => {
        const navList = document.getElementById("navList")
        if (window.innerWidth >= 650 && navList.classList.contains("open")){
            console.log("big")
            navList.classList.remove("open")
        }
    }

    window.addEventListener("resize", NormalNav)

    return (
        <nav>
            <ul className="nav-list" id="navList">
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
            <button className="hamburger" onClick={handleClick}>
                <i class="fas fa-bars"></i>
            </button>
        </nav>
    )
}