import React, {useState} from 'react';
import Game from "./Game"
import Prompt from "./Prompt"

import './App.css';

function App() {
  const [text, setText] = useState("")

  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  return (
    <div className="app" >
      <Game text={text} setText={setText} handleChange={handleChange}/>
      <Prompt text={text} />
    </div>

  )
}

export default App
