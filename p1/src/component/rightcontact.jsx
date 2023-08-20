import React, { useState } from 'react';

function Rightcontact() {
    const [msg, setMsg] = useState('');

    const submitForm = () => {
        const scriptURL = 'YOUR script';
        const form = document.forms['submit-to-google-sheet'];

        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    setMsg('Message Sent Successfully');
                    setTimeout(() => {
                        setMsg('');
                        form.reset(); // Reset the form fields
                    }, 5000);
                })
                .catch(error => {
                    setMsg('Message Not Sent');
                });
        });
    };
    return (
        <div className='rightcontact'>
            <form name='submit-to-google-sheet'>
                <input type='text' name='Name' id='name' placeholder='Your Name' className='inputBox' required />
                <input type='email' name='Email' id='email' placeholder='Your Email' className='inputBox' required />
                <textarea name='Message' id='message' rows='6' placeholder='Your Message'></textarea>
                <button type='submit' onClick={submitForm}>Submit</button>
            </form>
            <div className='msg'>
                {msg}
            </div>
        </div>
    );
}

export default Rightcontact;
