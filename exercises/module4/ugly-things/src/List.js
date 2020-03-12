import React from "react"
import {ContextConsumer} from './Context'

function List(){
    return(
        <ContextConsumer>
            {(word) => (
                <h2>{word}</h2>
            )}
        </ContextConsumer>
    )
}

export default List