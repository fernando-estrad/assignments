import React from "react"
import {ContextConsumer} from './Context'
import Item from "./Item"

function List(){
    return(
        <div className="list">
            <ContextConsumer>
                {context => context.things.map(thing => <Item title={thing.title} description={thing.description} imgUrl={thing.imgUrl}/>)}
            </ContextConsumer>
        </div>
    )
}

export default List