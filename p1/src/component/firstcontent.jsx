import React from 'react'
import bg_img from '../images/primary-img.png';
import './navbar.css'
function Firstcontent() {
    return (
        <div className='content1-Text'>
            <div className='text'>
                <p>UI/UX Designer</p>
                <div>
                    Hi,I'm <span>Gungun</span>From fatehabad
                </div>
            </div>
            <div className="primary-img">
                <img src={bg_img} alt="My-img" />
            </div>
        </div>
    )
}

export default Firstcontent
