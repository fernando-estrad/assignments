import React from 'react'
import Header from './Header'
import Cards from './Cards'

import './styles.css'

export default class App extends React.Component {
    // constructor(){
    //     super()
    // }

    render(){
        return(
            <div>
                <Header />
                <Cards />
            </div>
        )
    }
}

console.log()