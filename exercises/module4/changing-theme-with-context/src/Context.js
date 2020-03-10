import React, {Component, createContext} from "react"

const {Provider, Consumer} = createContext()

class ContextProvider extends Component{
    state = {
        theme: "light"
    }

    changeTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }

    render(){
        return (
            <Provider value={{theme: this.state.theme, changeTheme: this.changeTheme}}>
                {this.props.children}
            </Provider>
        )
    }
} 

export {ContextProvider, Consumer as ContextConsumer}