/*import React from 'react';
import '../styles/Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">Harunzsln</div>
      <nav className="nav">
        <a href="#main">Home</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
*/

import React, { useState } from 'react';
import '../styles/Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">Harunzsln</div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#main" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#blog" onClick={closeMenu}>Blog</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
