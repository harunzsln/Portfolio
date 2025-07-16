import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className='about-me'>
                <h1>About Me</h1>
                <p>I'm a passionate software developer with a focus on creating accessible and user-friendly applications. My journey in tech has been driven by a desire to solve real-world problems and enhance user experiences. I believe in the power of technology to make a positive impact on people's lives.</p>

            </div>
            <div className="about-cards">
                <div className="card">
                    <div className="icon"></div>
                    <h3>Full Name</h3>
                    <p>Harun Genel</p>
                </div>
                <div className="card">
                    <div className="icon"></div>
                    <h3>Email Address</h3>
                    <p>harun@example.com</p>
                </div>
                <div
                    className="card clickable"
                    onClick={() => window.open('https://twitter.com/harunbilmemne', '_blank')}
                >
                    <div className="icon"></div>
                    <h3>Twitter</h3>
                    <p>@harun</p>
                </div>
                <div className="card">
                    <div className="icon"></div>
                    <h3>Phone</h3>
                    <p>+90 5XX XXX XX XX</p>
                </div>
            </div>
        </section>
    );
};

export default About;
