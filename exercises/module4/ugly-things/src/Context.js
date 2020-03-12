import React, {Component} from 'react'

const {Provider, Consumer} = React.createContext()


class ContextProvider extends Component {
    render(){
        return (
            <Provider value="hello">
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}