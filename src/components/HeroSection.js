import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';


function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/img-3.jpg' alt="Long sea with tiny human" />
      <h1>Noora Söderling</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >
            Contact Here
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >
            Watch my Video <FontAwesomeIcon icon={faPlay} />
        </Button>
        
      </div>
    </div>
  )
}

export default HeroSection
