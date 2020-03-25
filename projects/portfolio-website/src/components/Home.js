import React from "react"

export default function Home(){
    return (
        <div className="home" id="home">
            <h1>Fernando Estrada</h1>
            <p>Web Developer</p>
            <div className="social-icons">
                <a target="blank" href="https://github.com/fernando-estrad"><i class="fab fa-github"></i></a>
                <a target="blank" href="https://www.instagram.com/ferinio21/"><i class="fab fa-instagram"></i></a>
                <a target="blank" href="https://www.linkedin.com/in/fernandoestrada1/"><i class="fab fa-linkedin"></i></a>
            </div>
            <div className="continue-to-page">
                <a href="#techSkills"><i class="fas fa-arrow-circle-down"></i></a>
            </div>
            <span id="techSkills"></span>
        </div>
    )
}