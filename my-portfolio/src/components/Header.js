import React from 'react';
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
