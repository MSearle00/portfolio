import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbarContainer'>
          <Link to='/' className='navbarLogo' onClick={closeMobileMenu}>
            HOME
          </Link>
          <div className='menuIcon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'NavigationMenu active' : 'NavigationMenu'}>
            <li className='NavigationOption'>
              <Link to='/' className='NavigationLinks' onClick={closeMobileMenu}>
              </Link>
            </li>
            <li className='NavigationOption'>
              <Link
                to='/aboutMe'
                className='NavigationLinks'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className='NavigationOption'>
              <Link
                to='/projects'
                className='NavigationLinks'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to='/contactMe'
                className='NavigationLinks'
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
