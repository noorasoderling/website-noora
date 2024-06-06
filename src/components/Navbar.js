import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDove, faBars, faX} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
            <FontAwesomeIcon icon={faDove} />  TRVL
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faX : faBars} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/CV' className='nav-links' onClick={closeMobileMenu}>
                  CV
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
