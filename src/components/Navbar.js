import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faX} from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

useEffect(() => {
  showButton();
}, []);

window.addEventListener('resize', showButton)

  return (
    <>
    <nav className="navbar">
        <div className='navbar-container'>
            <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            NOORA SÖDERLING
            </NavLink>
            <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faX : faBars} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/CompetenceView' className='nav-links' onClick={closeMobileMenu}>
                  Competence
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/ProjectsPage' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/Contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Contact Me</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
