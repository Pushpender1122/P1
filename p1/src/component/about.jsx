import React, { useState } from 'react'
import img from '../images/second-img.png'

function About() {
    const [activeTab, setActiveTab] = useState('skills');
    const [Content, setContent] = useState('skills');
    const handleSkills = (value) => {
        setActiveTab(value);
        setContent(value);
    }
    return (
        <div id='about'>
            <div className="second-img">
                {/* <img src={img} width={'300px'} alt="My-img" /> */}
            </div>
            <div className="about-me-text">
                <h1>About me</h1>
                <div className="para">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis earum delectus qui. Placeat, obcaecati est alias in commodi eius sunt nesciunt facilis maiores, debitis officiis labore vel optio expedita rerum nobis ratione, nam molestias.</p>
                </div>

                <div className="list">
                    <ol>
                        <li onClick={() => { handleSkills('skills') }} className={activeTab === 'skills' ? 'active' : ''}>Skills</li>
                        <li onClick={() => { handleSkills('experience') }} className={activeTab === 'experience' ? 'active' : ''}>Experience</li>
                        <li onClick={() => { handleSkills('education') }} className={activeTab === 'education' ? 'active' : ''}>Education</li>
                    </ol>
                </div>
                <div className={Content === 'skills' ? 'content-list' : 'hide-Element'}>
                    <ol>
                        <li>UI/UX</li>
                        <li>Designing Web/App interfaces</li>
                    </ol>
                    <ol>
                        <li>Web Development</li>
                        <li>Web app Development</li>
                    </ol>
                    <ol>
                        <li>App developmenet</li>
                        <li>Building Android/iOS apps</li>
                    </ol>
                    {/* experience */}

                </div>
                <div className={Content === 'experience' ? 'content-list' : 'hide-Element'}>
                    <ol>
                        <li>2023-Current</li>
                        <li>UI/UX Design Training at PJ institute</li>
                    </ol>
                    <ol>
                        <li>2022-2023</li>
                        <li>Team lead at StarApp LLC</li>
                    </ol>
                    <ol>
                        <li>2021-2023</li>
                        <li>UI/UX Design Executive at Cain Digital LTD</li>
                    </ol>
                </div>
                <div className={Content === 'education' ? 'content-list' : 'hide-Element'}>
                    <ol>
                        <li>2019</li>
                        <li>UI/UX Design Training at PJ institute</li>
                    </ol>
                    <ol>
                        <li>2020</li>
                        <li>MBA from MIT</li>
                    </ol>
                    <ol>
                        <li>2021</li>
                        <li>BBA from LPU</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default About
