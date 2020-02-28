import React from 'react'
import Header from './Header'
import Cards from './Cards'
import RandomColorComponent from './RandomColorComponent'

import './styles.css'

export default class App extends React.Component {

    render(){
        return(
            <div>
                <Header />
                <Cards />
                <RandomColorComponent />
            </div>
        )
    }
}

