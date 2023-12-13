import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "../Contact.css"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pda4dyn', 'template_4npi60d', form.current, 'JiyFMUBN4XcgzPCpE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <div className='container'>
      <div className="text">
        Contact Us
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='formRow'>
          <div className='inputData'>
            <label htmlFor="userFirstName">First Name:</label>
            <input type='text' id='userFirstName' name='userFirstName' required></input><br />
          </div>
          <div className='inputData'>
            <label htmlFor="userLastName">Last Name:</label>
            <input type='text' id='userLastName' name='userLastName' required></input><br />
          </div>
        </div>
        <div className='formRow'>
          <div className='inputData'>
            <label htmlFor="userEmail">Email:</label>
            <input type='text' id='userEmail' name='userEmail' required></input><br />
          </div>
          <div className='inputData'>
            <label htmlFor="userPhoneNum">Phone#:</label>
            <input type='text' id='userPhoneNum' name='userPhoneNum' required></input><br />
          </div>
        </div>
        <div className="form-row">
         <div className="input-data textarea">
            <label htmlFor="userMessage">Write your message</label><br />
            <textarea id='userMessage' rows="8" cols="80" name="userMessage" required></textarea><br />
            <input className='submitBtn' type="submit"></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
