import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <div className='footer-container'>
      <h2> Contact Me </h2>
      <section class='contact-me'>
        <div class='contact-me-input'>
          <a class="mailto" href="mailto:mariasearle15@gmail.com"> mariasearle15@gmail.com </a>
          <a class="callme" href="tel:07429224296"> 07429224296</a>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/MSearle00'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Twitter'
            >
            <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link github'
              href='https://github.com/MSearle00'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/mariasearle00/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
