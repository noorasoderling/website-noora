import React from 'react';
import './SocialMediaSection.css';
import LinkedIn from './icons/LinkedIn';
import Github from './icons/Github';

function SocialMediaSection() {
  return (
    <section className='social-media-section'>
        <h4>Socials:</h4>
            <div className='social-media-icons'>
                <a href='https://github.com/noorasoderling'>
                    <Github color={'var(--hightlight2)'} />
                </a>
                <a href='https://www.linkedin.com/in/noora-s%C3%B6derling-39798b110/'>
                    <LinkedIn color={'var(--hightlight2)'}/>
                </a>
            </div>
    </section>
)}

export default SocialMediaSection;
