import React from 'react'
import { useFormik } from 'formik';
import * as yup from "yup"
import emailjs from '@emailjs/browser';
import "../css/Contact.css"
import jimPhoto from "../assets/mainPics/jim.jpg"
import mbLogo from "../assets/mainPics/MB-logo.png"
import facebookLogo from "../assets/mainPics/Facebook_Logo_Primary.png"

function Contact() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const formSchema = yup.object().shape({
    userFirstName: yup.string().required("Name is not valid.").max(25),
    userLastName: yup.string().required("Last name is not valid").max(30),
    userEmail: yup.string().email().required("Email is not valid"),
    userPhoneNum: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    userMessage: yup.string().required("Message is not valid").max(300)
  })

  const formik = useFormik({
    initialValues: {
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userPhoneNum: "",
      userMessage: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      const formElement = document.querySelector('form');
      emailjs
        .sendForm('service_pda4dyn', 'template_4npi60d', formElement, 'JiyFMUBN4XcgzPCpE')
        .then((result) => {
          console.log(result.text);
          window.alert("Your message was sent successfully")
          formik.resetForm();
        })
        .catch((error) => {
          console.log(error.text);
          window.alert("Something went wrong")
        });
    },
  });

  return (
    <div className='contactUsWrapper'>
      <div className='businessCard'>
        <img src={jimPhoto} alt="Jim's Masterbilt Profile" />
        <h2>James A. Stiltner</h2>
        <a href='tel:7199643526'>719-964-3526</a> <br />
        <a href='mailto:jim@masterbilt.com'>jim@masterbilt.com</a>
      </div>
      <img src={mbLogo} alt='Masterbilt-Logo' className='mbLogo' />
      <div className='contactUsContainer'>
        <div className="contactUsText">
          Contact Us
        </div>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className='formRow'>
              <div className='inputData'>
                <label htmlFor="userFirstName">
                  {formik.errors.userFirstName ? (
                    <>First Name: <i>{formik.errors.userFirstName}</i></>
                  ) : "First Name:"}
                </label>
                <input
                  type='text'
                  id='userFirstName'
                  name='userFirstName'
                  value={formik.values.userFirstName}
                  onChange={formik.handleChange}
                  required
                /><br />
              </div>
              <div className='inputData'>
                <label htmlFor="userLastName">
                  {formik.errors.userLastName ? (
                    <>Last Name: <i>{formik.errors.userLastName}</i></>
                  ) : "Last Name:"}
                </label>
                <input
                  type='text'
                  id='userLastName'
                  name='userLastName'
                  value={formik.values.userLastName}
                  onChange={formik.handleChange}
                  required
                /><br />
              </div>
            </div>
            <div className='formRow'>
              <div className='inputData'>
                <label htmlFor="userEmail">
                  {formik.errors.userEmail ? (
                    <>Email: <i>{formik.errors.userEmail}</i></>
                  ) : "Email:"}
                </label>
                <input
                  type='text'
                  id='userEmail'
                  name='userEmail'
                  value={formik.values.userEmail}
                  onChange={formik.handleChange}
                  required
                /><br />
              </div>
              <div className='inputData'>
                <label htmlFor="userPhoneNum">
                  {formik.errors.userPhoneNum ? (
                    <>Phone#: <i>{formik.errors.userPhoneNum}</i></>
                  ) : "Phone#:"}
                </label>
                <input
                  type='text'
                  id='userPhoneNum'
                  name='userPhoneNum'
                  value={formik.values.userPhoneNum}
                  onChange={formik.handleChange}
                /><br />
              </div>
            </div>
            <div className="form-row">
              <div className="input-data textarea">
                <label htmlFor="userMessage">
                  {formik.errors.userMessage ? (
                    <>Write your message: <i>{formik.errors.userMessage}</i></>
                  ) : "Write your message:"}</label><br />
                <textarea
                  id='userMessage'
                  rows="8" cols="80"
                  name="userMessage"
                  value={formik.values.userMessage}
                  onChange={formik.handleChange}
                  required
                /><br />
                <input className='submitBtn' type="submit" />
              </div>
            </div>
          </form>
        </div>

      </div>
      <div className='socialsDiv'>
        <a
          href='https://www.facebook.com/MasterbiltHomes'
          target='_blank'
          rel="noopener noreferrer"
          className="facebookButton"
        >
          <img src={facebookLogo} alt="Masterbilt Townhomes Facebook Logo" className="facebookLogo" />
          <span>Visit Our Facebook Page</span>
        </a>
        <a href="https://www.bbb.org/us/co/palmer-lake/profile/building-contractors/masterbilt-homes-0785-5281152/#sealclick"
          target="_blank"
          rel="noreferrer"
          className='bbbRating'
        >
          <img src="https://seal-southerncolorado.bbb.org/seals/darkgray-seal-200-65-bbb-5281152.png"
            alt="Masterbilt Homes BBB Review" />
        </a>
      </div>
    </div>
  )
}

export default Contact
