import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Join the adventure of Noora living her best life.
        </p>
        <p className='footer-subscription-text'>
            You can never unsubscribe
        </p>
        <div className='input-areas'>
            <form>
                <input type="email" name="email" placeholder="Your Email" className='footer-input'></input>
                <Button buttonstyle="btn--outline">Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About me</h2>
                <Link to='/Contact'>How it works</Link>
                <Link to='/Tuska'>Tuska</Link>
                <Link to='/FlowFestival'>Flow Festival</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Contact me</h2>
                <Link to='/Contact'>How it works</Link>
                <Link to='/Tuska'>Tuska</Link>
                <Link to='/FlowFestival'>Flow Festival</Link>
            </div>
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About me</h2>
                <Link to='/Contact'>How it works</Link>
                <Link to='/Tuska'>Tuska</Link>
                <Link to='/FlowFestival'>Flow Festival</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Contact me</h2>
                <Link to='/Contact'>How it works</Link>
                <Link to='/Tuska'>Tuska</Link>
                <Link to='/FlowFestival'>Flow Festival</Link>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer;
