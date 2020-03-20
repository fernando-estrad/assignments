import React, {useState} from "react"

const CorrectContext = React.createContext()

function CorrectContextProvider(props){
    const [isRight, setIsRight] = useState(false)

    const toggleIsRight = () => {
        setIsRight(!isRight)
    }

    return (
        <CorrectContext.Provider value={{isRight, toggleIsRight}}>
            {props.children}
        </CorrectContext.Provider>
    )

}

export {CorrectContextProvider, CorrectContext}