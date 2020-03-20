import React, {useState, useContext} from "react"
import "./App.css"
import {CorrectContext} from "./correctContext"

function Prompt(props){
    const [prompt] = useState("The recent emergence of several competitive typing websites has allowed several fast typists on computer keyboards to emerge along with new records, though these are unverifiable for the most part. Two of the most notable online records that are considered genuine are 241.82 wpm on an English text on typingzone.com by Brazilian Guilherme Sandrini (equivalent to 290.184 wpm using the traditional definition for words per minute since this site defines a word as six characters rather than five) and 256 wpm (a record caught on video) on TypeRacer by American Sean Wrona, the inaugural Ultimate Typing Championship winner, which was considered the highest ever legitimate score ever set on the site, until Wrona claimed it has been surpassed. Both of these records are essentially sprint speeds on short text selections lasting much less than one minute and were achieved on the QWERTY keyboard. Wrona also maintained 174 wpm on a 50-minute test taken on  hi-games.net, another online typing website to unofficially displace Blackburn as the fastest endurance typist, although disputes might still arise over differences in the difficulty of the texts as well as Wronas use of a modern computer keyboard as opposed to the typewriter used by Blackburn.")
    const splitText = props.text.trim().split('')
    const splitPrompt = prompt.trim().split('')
    
    const {isRight, toggleIsRight} = useContext(CorrectContext)
    console.log(isRight)

    let color 

    for(let i = 0; i < splitText.length; i++){
        if(splitText[i] === splitPrompt[0]){
            splitPrompt.shift()
            color = "whitesmoke"
        } else if (splitText[i] !== splitPrompt[0]){
            color = "red"
            toggleIsRight()
        }
    }

    return(
        <div className="prompt">
            <h1>Prompt:</h1>
            <p style={{color: color}}>
                {splitPrompt}
            </p>
        </div>
    )
}

export default Prompt