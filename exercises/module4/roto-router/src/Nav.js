import React from 'react'
import {Link} from 'react-router-dom'


export default function Nav(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
        </nav>
    )
}