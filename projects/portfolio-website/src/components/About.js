import React from "react"
import profile from "../images/profile.JPG"

export default function About(){
    return (
        <div className="about-div">
            <img src={profile} alt="Profile" style={{height: "250px"}}/>
            <div className="about-text">
                <p>
                    I am a Marine Corps veteran, and more importantly, I am a full stack web developer. I spend my days absorbing 
                    whatever new information I can from any resource available, as well as experimenting with different programming 
                    languages in order to have a more broad range of knowledge. I am a very curious person, and I love taking on a new challange when it presents itself. I am always looking
                    to improve myself in any way possible.
                </p>
                <br />
                <p>
                    I am passionate about web development. It is not just something I think of as a job, but also a very enjoyable
                    hobby. Other hobbies of mine include fishing, hiking, and anything else outdoors! 
                </p>
            </div>
        </div>

    )
}