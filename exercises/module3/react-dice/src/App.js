import React from 'react'
import DiceBox from "./components/DiceBox"
import RollButton from "./components/RollButton"
import "./App.css"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      nums: [0, 0, 0, 0, 0]
    }
    this.randomizer = this.randomizer.bind(this)
  }

  randomizer(){
    this.setState({nums: [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]})
  }

  render(){
    return (
      <div className="main">
        <DiceBox nums={this.state.nums} />
        <RollButton randomizer={this.randomizer} />
      </div>
    )
  }
}


export default App