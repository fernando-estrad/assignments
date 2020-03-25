import React from "react"

export default function SkillList(){
    return (
        <div className="skill-list" id="skills">
            <div>
                <i class="fab fa-html5" style={{fontSize: "150px"}}></i>
                <p>HTML</p>
            </div>
            <div>
                <i class="fab fa-css3-alt" style={{fontSize: "150px"}}></i>
                <p>CSS</p>
            </div>
            <div>
                <i class="fab fa-js" style={{fontSize: "150px"}}></i>
                <p>JavaScript</p>
            </div>
            <div>
                <i class="fab fa-react" style={{fontSize: "150px"}}></i>
                <p>React</p>
            </div>
            <div>
                <i class="fab fa-node-js" style={{fontSize: "150px"}}></i>
                <p>Node.js</p>
            </div>
            <div>
                <i class="fab fa-git" style={{fontSize: "150px"}}></i>
                <p>Git</p>
            </div>
            <div className="other-skills">
                <h3>Others:</h3>
                {/* <hr /> */}
                <ul>
                    <li>MongoDB</li>
                    <li>Axios</li>
                    <li>Express.js</li>
                    <li>AJAX</li>
                </ul>
            </div>
        </div>
    )
}