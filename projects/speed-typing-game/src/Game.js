import React, {useState, useEffect, useRef, useContext} from 'react';
import './App.css';

function Game(props) {
  const STARTING_TIME = 60

  const [timer, setTimer] = useState(STARTING_TIME)
  const [isGameOn, setGameOn] = useState(false)
  const [wordCount, setwordCount] = useState(0)

  const textAreaRef = useRef(null)

  const handleClick = () => {
    window.removeEventListener("keypress", handleKeyPess)
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
    props.setText("")
    setTimer(STARTING_TIME)
    setGameOn(true)
  }

  useEffect(() => {
    if (isGameOn && timer > 0){
      setTimeout(() => setTimer(prevTimer => prevTimer - 1), 1000)
    } else if (timer === 0){
      setGameOn(false)
      setwordCount(props.text.trim().match(/.{1,5}/g).length)
      console.log(props.text.trim().match(/.{1,5}/g))
    }
  }, [timer, isGameOn])

  const handleKeyPess = (e) => {
    if (e.keyCode === 13){
      handleClick()
    }
  }

  useEffect(() => {
      window.addEventListener("keypress", handleKeyPess)
  }, [wordCount])

  return (
    <div className="game">
      <h1>How Fast Can You Type?</h1>
      <div>
      <textarea 
        ref={textAreaRef} 
        onChange={props.handleChange} 
        value={props.text} 
        disabled={!isGameOn}
        placeholder="Press enter or click START button and start typing!"
      />
      </div>
      <h4>Time Remaining: {timer}</h4>
      <button onClick={handleClick} disabled={isGameOn}>Start</button>
      <h1 style={isGameOn ? {display:"none"} : {display:"block"}}>Word Count: {wordCount} WPM</h1>
    </div>
  )
}

export default Game