import React from "react"

export default function SkillList(){
    return (
        <div className="skill-list">
            <div>
                <i class="fab fa-html5" style={{fontSize: "100px"}}></i>
                <p>HTML</p>
            </div>
            <div>
                <i class="fab fa-css3-alt" style={{fontSize: "100px"}}></i>
                <p>CSS</p>
            </div>
            <div>
                <i class="fab fa-js" style={{fontSize: "100px"}}></i>
                <p>JavaScript</p>
            </div>
            <div>
                <i class="fab fa-react" style={{fontSize: "100px"}}></i>
                <p>React</p>
            </div>
            <div>
                <i class="fab fa-node-js" style={{fontSize: "100px"}}></i>
                <p>Node.js</p>
            </div>
            <div>
                <i class="fab fa-git" style={{fontSize: "100px"}}></i>
                <p>Git</p>
            </div>
            <div className="others">
                <i class="fas fa-list" style={{fontSize: "100px"}}></i>
                <p>Others</p>
            </div>
            {/* <div className="other-skills">
                <h3>Other Skills:</h3>
                <ul>
                    <li>MongoDB</li>
                    <li>Axios</li>
                    <li>Express.js</li>
                    <li>AJAX</li>
                </ul>
            </div> */}
        </div>
    )
}