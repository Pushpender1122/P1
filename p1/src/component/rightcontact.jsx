import React from 'react'

function Rightcontact() {
    return (
        <div className='rightcontact'>
            <form action="#" method='post' onSubmit={'false'}>
                <input type="text" name="Name" id="name" placeholder='Your Name' className='inputBox' required />
                <input type="email" name="Email" id="email" placeholder='Your Email' className='inputBox' required />
                <textarea name="Message" id="message" rows="6" placeholder='Your Message'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Rightcontact
