// src/components/MainSection.jsx
import React from 'react';
import '../styles/MainSection.css';
import image from '../images/image.jpg'; // Örnek görsel ekleyebilirsin

const MainSection = () => {
  return (
    <section className="main-section" id="main">
      <div className="intro-text">
        <h1>Hi, I’m Harun</h1>
        <p>  A Jr. Software Developer based in Turkey, dedicated to creating accessible, efficient, and user-centric applications. </p>

      </div>
      <div className="main-image">
        <img src={image} alt="Main" />
      </div>

    </section>
  );
};

export default MainSection;
