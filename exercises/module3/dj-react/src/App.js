import React from 'react';
import Buttons from "./components/Buttons"
import Squares from "./components/Squares"
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      colors: ["white", "white", "white", "white"]
    }
    this.blackOrWhite = this.blackOrWhite.bind(this)
    this.twoPurple = this.twoPurple.bind(this)
    this.thirdBlue = this.thirdBlue.bind(this)
  }


  blackOrWhite(){
    if (this.state.colors[0] === "white"){
      this.setState({colors: ["black", "black", "black", "black"]})
    } else if (this.state.colors[0] !== "white"){
      this.setState({colors: ["white", "white", "white", "white"]})
    }
  }

  twoPurple(){
    this.setState({colors: ["purple", "purple", this.state.colors[2], this.state.colors[3]]})
  }

  thirdBlue(){
    this.setState({colors: [this.state.colors[0], this.state.colors[1], "blue", this.state.colors[3]]})
  }

  render(){
    return (
      <div>
        <Squares colors={this.state.colors}/>
        <Buttons blackOrWhite={this.blackOrWhite} twoPurple={this.twoPurple} thirdBlue={this.thirdBlue} />
      </div>
    )
  }
}

export default App;
