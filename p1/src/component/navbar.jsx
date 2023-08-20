import React, { useState } from 'react';
import './navbar.css';
import Firstcontent from './firstcontent';
import { BiMenu } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';

function Navbar() {
    const [displayClass, setDisplayClass] = useState('navbar-text');
    const [count, setCount] = useState(0);

    const handleClass = () => {
        if (count === 0) {
            setDisplayClass('show-Element');
            setCount(1);
        } else {
            setDisplayClass('navbar-text');
            setCount(0);
        }
    };

    const handleLinkClick = () => {
        setDisplayClass('navbar-text');
        setCount(0);
    };

    return (
        <div className='main'>
            <nav className='navbar'>
                <div className="nvabarlogo">
                    <a className='logo-text' href="#">G</a>
                    <a className='logo-text2' href="#">ungun</a>
                </div>
                <div className="button-hide" onClick={handleClass}>
                    <BiMenu style={{ fontSize: '2rem' }} />
                </div>
                <div className={displayClass}>
                    <FaTimes style={{ fontSize: '2rem', cursor: "pointer" }} onClick={handleClass} className="button-hide" />
                    <ol><li><a href="#" onClick={handleLinkClick}>Home</a></li></ol>
                    <ol><li><a href="#about" onClick={handleLinkClick}>About</a></li></ol>
                    <ol><li><a href="#service" onClick={handleLinkClick}>Services</a></li></ol>
                    <ol><li><a href="#work" onClick={handleLinkClick}>Portfolio</a></li></ol>
                    <ol><li><a href="#contact" onClick={handleLinkClick}>Contact</a></li></ol>
                </div>
            </nav>
            <Firstcontent />
        </div>
    );
}

export default Navbar;
