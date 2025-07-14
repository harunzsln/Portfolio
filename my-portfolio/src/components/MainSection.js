// src/components/MainSection.jsx
import React from 'react';
import '../styles/MainSection.css';
import image from '../images/image.jpg'; // Örnek görsel ekleyebilirsin

const MainSection = () => {
  return (
    <section className="main-section" id="main">
      <div className="intro-text">
        <h1>Hi, I’m Harun</h1>
        <p> A Turkey based Jr. Developer passionate about building
        accessible and user friendly apps. </p>
       
      </div>
       <div className="main-image">
        <img src={image}  alt="Main" />
      </div>

    </section>
  );
};

export default MainSection;
