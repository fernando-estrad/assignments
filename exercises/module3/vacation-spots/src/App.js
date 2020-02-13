import React from "react"
import vacationData from "./vacationData"
import Card from "./Card"
import css from "./index.css"
//import Header from "./header"

function App(){
  const cardProps = vacationData.map(item => <Card spot={item} />)
  return (
    <div className="cards">
        <h1>Best Vacation Spots</h1>
        {cardProps}
    </div>
  )
}

export default App