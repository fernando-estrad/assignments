import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CorrectContextProvider} from "./correctContext"

ReactDOM.render(
    <CorrectContextProvider>
        <App />
    </CorrectContextProvider>
    ,document.getElementById('root'));


