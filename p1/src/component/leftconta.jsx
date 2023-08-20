import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { MdCall } from 'react-icons/md'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'

function Leftconta() {
    const iconStyle = {
        color: '#ff004f', fontSize: '1.5rem', marginRight: '1rem',
        position: 'relative', bottom: '-4px',
    }
    const socialIcon = {
        fontSize: '1.5rem',
        marginLeft: '1rem',
        marginTop: '1rem',
        color: 'darkgray',
        cursor: 'pointer',
    }
    const socialIcon2 = {
        color: 'darkgray',
        fontSize: '1.5rem',
        // marginLeft: '1rem',
        marginTop: '1rem',
        cursor: 'pointer',
    }
    return (
        <div className='leftcontact'>
            <h1>Contact Me</h1>
            <div className="contactNo-email">
                <p><FaTelegramPlane style={iconStyle} /> spiderj2021@gmail.com</p>
                <p><MdCall style={iconStyle} />946759....</p>
            </div>
            <div className="icons">
                <div className="fb">
                    <a href="#"><BsFacebook style={socialIcon2} /></a>
                </div>
                <div className="twi">
                    <a href='#'> <BsTwitter style={socialIcon} /> </a>
                </div>
                <div className="ins">
                    <a href='#'> <FiInstagram style={socialIcon} /></a>
                </div>
                <div className="linkdin">
                    <a href='#'> <BsLinkedin style={socialIcon} /></a>
                </div>
            </div>
            <div className="cv-down">
                <button>Download CV</button>
            </div>
        </div>
    )
}

export default Leftconta
