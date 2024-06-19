import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBattery3, faMobile} from '@fortawesome/free-solid-svg-icons';



function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-text-container'>
        <h1>Front End Developer</h1>
        <p>Crafting Digital Experiences, Driving Business Growth</p>
    </div>
    <img src="/images/IMG_9247.jpg" alt="Outoors author posing in autumn scenery"></img>
    <div className='hero-socials-container'>
    <section className='hero-social-media'>
        <div className='hero-social-media-wrap'>
            <div>
                <Link to='/' className='hero-social-logo'>
                Socials: 
                </Link>
                <small className='hero-social-icons'>
                    <Link 
                    className='hero-social-icon-link linkedin'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                        <FontAwesomeIcon icon={faBattery3} />
                    </Link>
                    <Link 
                    className='hero-social-icon-link github'
                    to='/'
                    target='_blank'
                    aria-label='Github'
                    >
                        <FontAwesomeIcon icon={faMobile} />
                    </Link>
                </small>
            </div>
        </div>
      </section>

    </div>
  </div>
  )
}

export default HeroSection;
