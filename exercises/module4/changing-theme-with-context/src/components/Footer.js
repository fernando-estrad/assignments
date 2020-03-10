import React from 'react'
import {ContextConsumer} from '../Context'

export default function Footer() {
    return (
        <ContextConsumer>
            {context => (
                <footer className={`footer-${context.theme}`}>
                    <p>Made by Fernando</p>
                </footer>
            )}
        </ContextConsumer>
    )
}