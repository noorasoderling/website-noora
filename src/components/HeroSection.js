import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {faBattery3, faMobile} from '@fortawesome/free-solid-svg-icons';


function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img src='/images/cropped.jpg' alt='Horizontal pose of Noora'></img>
      <div className='hero-text-container'>
        <h1>Front-End Development & Digital Marketing</h1>
        <p>Crafting Digital Experiences that Drive Success and Growth</p>
      </div>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >
            Contact Here
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >
            Watch my Video <FontAwesomeIcon icon={faPlay} />
        </Button>
        
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

export default HeroSection;
