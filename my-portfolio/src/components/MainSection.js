import React from 'react';
import '../styles/MainSection.css';
import '../App.css'; 
import image from '../images/image.jpg'; 

const MainSection = () => {
  return (
    <section className="main-section" id="main">
      <div className="main-image">
        <img  src={image} alt="Main" className="spinning-image" />
      </div>
      <div className="intro-text">
        <h1>Hi, I’m Harun</h1>
        <p>  A Jr. Software Developer based in Turkey, dedicated to creating accessible, efficient and user-centric applications. </p>

      </div>
      

    </section>
  );
};

export default MainSection;
