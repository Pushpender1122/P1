import React from 'react'
import { FaCode, FaCropAlt } from 'react-icons/fa'
import { SiAppstore } from 'react-icons/si'
function Services() {
    return (
        <div id='service'>
            <h1>My Services</h1>
            <div className="my-service-text">
                <div className='box'>
                    <FaCode style={{ fontSize: '48px' }} />
                    <h2 >Web Design</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt necessitatibus velit quidem alias aperiam atque, quisquam maiores? Quis, fuga iure?</p>
                    <a href="#">Learn more</a>
                </div>
                <div className='box'>
                    <FaCropAlt style={{ fontSize: '48px' }} />
                    <h2 >UI/UX Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus modi quis doloremque! Incidunt ipsam minus consequuntur dolore, sapiente magni.</p>
                    <a href="#">Learn more</a>
                </div>
                <div className='box'>
                    <SiAppstore style={{ fontSize: '48px' }} />
                    <h2 >App Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod exercitationem corrupti nihil sit dolorum modi recusandae ullam veniam tempora!.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default Services
