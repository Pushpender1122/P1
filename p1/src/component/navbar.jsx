import React from 'react'
import './navbar.css'
import Firstcontent from './firstcontent'
function Navbar() {
    return (
        <div className='main'>
            <nav className='navbar'>
                <div className="nvabarlogo">
                    <a className='logo-text' href="#">G</a>
                    <a className='logo-text2' href="#">ungun</a>
                </div>
                <div className='navbar-text'>
                    <ol><li><a href="#">Home</a></li> </ol>
                    <ol><li><a href="#">About</a></li> </ol>
                    <ol><li><a href="#">Services</a></li> </ol>
                    <ol><li><a href="#">Portfolio</a></li> </ol>
                    <ol><li><a href="#">Contact</a></li> </ol>
                </div>
            </nav>
            <Firstcontent />
        </div>
    )
}

export default Navbar
