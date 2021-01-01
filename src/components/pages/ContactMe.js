import React from 'react';
import emailjs from 'emailjs-com';
import { Button } from '.././Button';

import './ContactMe.css';
import Footer from '../Footer';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_7p41itg', e.target, 'user_epre9iRRNnEE19GXSKR2l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      document.getElementById('contactForm').reset();
  }

  return (
    <>
    <div class="resumeContainer">
      <p> Feel free to download my CV using the button below!</p>
      <br></br>
      <a href="/files/CV.pdf" download>
        <Button
        className='buttons'
        buttonStyle='buttonOutlined'
        buttonSize='buttonMedium'>
          CV
        </Button>
      </a>
    </div>


    <div class="contactContainer">
      <form id="contactForm" onSubmit={sendEmail}>
      <div class="field">
          <label for="from_name">Name</label>
          <input type="text" name="from_name" id="from_name" required/>
        </div>

        <div class="field">
          <label for="user_email">Email</label>
          <input type="text" name="user_email" id="user_email" required/>
        </div>

        <div class="field">
          <label for="subject">Subject</label>
          <input type="text" name="subject" id="subject" required/>
        </div>

        <div class="field">
          <label for="message">Message</label>
          <textarea type="text" name="message" id="message" required/>
        </div>

        <input type="submit" id="button" value="Send Email" />
      </form>
    </div>
    <Footer />
    </>
  );
}
