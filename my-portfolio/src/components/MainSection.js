// src/components/MainSection.jsx
import React from 'react';
import '../styles/MainSection.css';
import '../App.css'; 
import image from '../images/image.jpg'; 

const MainSection = () => {
  return (
    <section className="main-section" id="main">
      <div className="intro-text">
        <h1>Hi, I’m Harun</h1>
        <p>  A Jr. Software Developer based in Turkey, dedicated to creating accessible, efficient, and user-centric applications. </p>

      </div>
      <div className="main-image">
        <img  src={image} alt="Main" className="spinning-image" />
      </div>

    </section>
  );
};

export default MainSection;
