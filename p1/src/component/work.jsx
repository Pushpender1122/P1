import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
function Work() {
    const styFa = {
        marginTop: '20px',
        color: ' #e12861',
        // height: '20px',
        // width: '20px',
        // border:'2px solid',
        // borderRadius: '50%',
    }
    return (
        <div id='work'>
            <h1>My work</h1>
            <div className="work-pro">
                <div className="pro1 box-size">
                    <div className='work-text'>
                        <div>
                            <h4>Social Media App</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam optio enim repellat consectetur placeat. Deleniti quo quia et consequatur!</p>
                            <div className="icon">
                                <FaExternalLinkAlt style={styFa} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pro2 box-size">
                    <div className='work-text'>
                        <div>
                            <h4>Music App</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam optio enim repellat consectetur placeat. Deleniti quo quia et consequatur!</p>
                            <div className="icon">
                                <FaExternalLinkAlt style={styFa} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pro3 box-size">
                    <div className='work-text'>
                        <div>
                            <h4>Social Media App</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam optio enim repellat consectetur placeat. Deleniti quo quia et consequatur!</p>
                            <div className="icon">
                                <FaExternalLinkAlt style={styFa} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn"><button>See more</button></div>
        </div>
    )
}

export default Work
