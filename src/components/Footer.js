import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-section-1'>
        <p className='footer-section-1-heading'>
            Join the adventure of Noora living her best life.
        </p>
        <p className='footer-section-1-text'>
            You can never unsubscribe
        </p>
        <div className='input-areas'>
            <form>
                <input type="email" name="email" placeholder="Your Email" className='footer-input'></input>
                <Button buttonstyle="btn--outline">Subscribe</Button>
            </form>
        </div>
      </section>
      <section>
        <div className='footer-section-2'>
          <div className='footer-link-wrapper'>
              <div className='footer-link-items'>
                  <h4>Visit these pages as well:</h4>
                  <Link to='/Contact'>How it works</Link>
                  <Link to='/Tuska'>Web Development</Link>
                  <Link to='/FlowFestival'>React Native</Link>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;
