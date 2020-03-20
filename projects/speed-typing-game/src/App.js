import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState("")
  const [timer, setTimer] = useState(STARTING_TIME)
  const [isGameOn, setGameOn] = useState(false)
  const [wordCount, setwordCount] = useState(0)

  const textAreaRef = useRef(null)

  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  const handleClick = () => {
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
    setText("")
    setTimer(STARTING_TIME)
    setGameOn(true)
  }

  useEffect(() => {
    if (isGameOn && timer > 0){
      setTimeout(() => setTimer(prevTimer => prevTimer - 1), 1000)
    } else if ( timer === 0){
      setGameOn(false)
      setwordCount(text.trim().split(" ").filter(word => word !== "").length)
    }
  }, [timer, isGameOn])

  useEffect(() => {
    window.addEventListener("keypress", (e) => e.keyCode === 13 && handleClick())
  }, [])

  return (
    <div>
      <h1>How Fast Can You Type?</h1>
      <textarea 
        ref={textAreaRef} 
        onChange={handleChange} 
        value={text} 
        disabled={!isGameOn}
        placeholder="Press enter or click START button and start typing!"
      />
      <h4>Time Remaining: {timer}</h4>
      <button onClick={handleClick} disabled={isGameOn}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App
