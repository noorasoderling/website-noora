import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBattery3, faMobile} from '@fortawesome/free-solid-svg-icons';

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
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                SOCIALS 
                </Link>
                <small className='social-icons'>
                    <Link 
                    className='social-icon-link linkedin'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                        <FontAwesomeIcon icon={faBattery3} />
                    </Link>
                    <Link 
                    className='social-icon-link github'
                    to='/'
                    target='_blank'
                    aria-label='Github'
                    >
                        <FontAwesomeIcon icon={faBattery3} />
                    </Link>
                    <Link 
                    className='social-icon-link mobile'
                    to='/'
                    target='_blank'
                    aria-label='mobile'
                    >
                        <FontAwesomeIcon icon={faMobile} />
                    </Link>
                </small>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Footer;
