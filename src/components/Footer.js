import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-col-1'>
          <p className='footer-col-1-text'>
              Want to contact me?
          </p>
          <div className='input-areas'>
              <form>
                  <input type="email" name="email" placeholder="Your Email" className='footer-input'></input>
                  <Button buttonstyle="btn--outline">Contact</Button>
              </form>
          </div>
        </div>
        <div className='footer-col-2'>
          <div className='footer-link-items'>
            <p>Also visit:</p>
              <Link to='/Contact'>LinkedIn</Link>
              <Link to='/Tuska'>Github</Link>
              <Link to='/FlowFestival'>Résumé</Link>
          </div>
        </div>
      </div>
      <div className='copywright'>
        <p>EN, FI, FR</p>
        <p>© Noora Söderling</p>
      </div>
    </div>
    
    
    
    
  )
}

export default Footer;
