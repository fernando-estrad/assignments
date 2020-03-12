import React, {Component} from 'react'

const {Provider, Consumer} = React.createContext()


class ContextProvider extends Component {
    state = {
        things: []
    }

    addUglyThing = newThing => {
        this.setState(prev => {
            return {
                things: [...prev.things, newThing]
            }
        })
        console.log(this.state.things)
    }

    render(){
        return (
            <Provider value={{addUglyThing: this.addUglyThing, things: this.state.things}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}