import React from "react"
import bgIMG from "../images/Fernando-Estrada-Resume.pdf"

export default function Resume(){
    return (
        <div className="download-resume">
            <a href={bgIMG} download>Download Resume <i class="fas fa-download"></i></a>
        </div>
        
    )
}