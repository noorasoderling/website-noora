import React from 'react';
import '../App.css';
import './HeroSection.css';
import SocialMediaSection from './SocialMediaSection.js';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-text-container'>
        <span className='divider'></span>
          <h1>Front End Developer</h1>
          <p>Crafting Digital Experiences, Driving Business Growth</p>
      </div>
      <SocialMediaSection />
      <img src="/images/IMG_9247.jpg" alt="Outoors author posing in autumn scenery"></img>
    </div>
  )
}

export default HeroSection;
