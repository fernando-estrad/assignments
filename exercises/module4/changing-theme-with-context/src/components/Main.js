import React from "react"
import {ContextConsumer} from "../Context"

export default function Main(){
    return(
        <ContextConsumer>
            {context => (
                <main className={`main-${context.theme}`}>
                    <p>Good {context.theme === "light" ? "morning" : "evening"}, User, how are you doing today?</p>
                    <button onClick={context.changeTheme} className={`button-${context.theme}`}>Change Theme</button>
                </main>    
            )}
        </ContextConsumer>
    )
}