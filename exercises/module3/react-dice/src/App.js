import React from 'react'
import DiceBox from "./components/DiceBox"
import RollButton from "./components/RollButton"
import "./App.css"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      nums: [0, 0, 0, 0, 0, 0],
      isClicked: [false, false, false, false, false, false]
    }
    this.randomizer = this.randomizer.bind(this)
    this.stopChanging = this.stopChanging.bind(this)
  }

  randomizer(){
    let one = Math.floor(Math.random() * 6)
    let two = Math.floor(Math.random() * 6)
    let three = Math.floor(Math.random() * 6)
    let four = Math.floor(Math.random() * 6)
    let five = Math.floor(Math.random() * 6)
    let six = Math.floor(Math.random() * 6)
    
    this.setState({nums: [one, two, three, four, five, six]})
  }

  stopChanging(){
    if (this.state.isClicked) {
      this.setState({isClicked: false})
    } else if (!this.state.isClicked) {
      this.setState({isClicked: true})
    }

    console.log(this.state.isClicked)
  }

  render(){
    return (
      <div className="main">
        <DiceBox nums={this.state.nums} stopChanging={this.stopChanging} isClicked={this.state.isClicked} />
        <RollButton randomizer={this.randomizer} />
      </div>
    )
  }
}


export default App