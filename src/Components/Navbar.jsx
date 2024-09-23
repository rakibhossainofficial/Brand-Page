import React from 'react'
import "./Navbar.css"
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button>Login</button>

        {/* Hamburger menu */}
      <div className={menuOpen ? 'hamburger open' : 'hamburger'} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
       

      </nav>
    </>
  );
}

export default Navbar