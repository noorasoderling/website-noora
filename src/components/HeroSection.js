import React from 'react';
import '../App.css';
import './HeroSection.css';
import SocialMediaSection from './SocialMediaSection.js';
import Divider from './Divider.js';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-text-container'>
        <Divider color ={'var(--dark)'}/>
          <h1>Front End Developer</h1>
          <h4>Crafting Digital Experiences, Driving Business Growth</h4>
      </div>
      <SocialMediaSection />
      <img src="/images/IMG_9247.jpg" alt="Outoors author posing in autumn scenery"></img>
    </div>
  )
}

export default HeroSection;
