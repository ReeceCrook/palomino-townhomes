import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "../Contact.css"
import jimPhoto from "../assets/mainPics/jim.jpg"
import mbLogo from "../assets/mainPics/MB-logo.png"
import facebookLogo from "../assets/mainPics/Facebook_Logo_Primary.png"
import bbbRating from "../assets/mainPics/BBBrating.png"

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
    <div className='contactUsWrapper'>
      <img src={mbLogo} alt='Masterbilt-Logo' className='mbLogo'/>
        <div className='container'>
          <div className="text">
            Contact Us
          </div>
          <div>
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
                  <input type='text' id='userPhoneNum' name='userPhoneNum'></input><br />
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
          <div className='businessCard'>
            <img src={jimPhoto} alt='Profile' />
            <h2>James A. Stiltner</h2>
            <a href='tel:7199643526'>719-964-3526</a> <br />
            <a href='mailto:jim@masterbilt.com'>jim@masterbilt.com</a>
          </div>
        </div>
        <div style={{
          position: "relative"
        }}>
          <a
            href='https://www.facebook.com/MasterbiltHomes'
            target='_blank'
            rel="noopener noreferrer"
            className="facebookButton"
          >
            <img src={facebookLogo} alt="Facebook Logo" className="facebookLogo" />
            <span>Visit Our Facebook Page</span>
          </a>
          <a
            href='https://www.bbb.org/us/co/palmer-lake/profile/building-contractors/masterbilt-homes-0785-5281152#sealclick'
            target='_blank'
            rel="noopener noreferrer"
            className='bbbRating'
          >
            <img src={bbbRating} alt="BBB Logo" className="bbbLogo" />
          </a>
        </div>
    </div>

  )
}

export default Contact
