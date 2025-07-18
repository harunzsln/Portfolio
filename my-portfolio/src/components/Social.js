import React from "react";
import '../styles/Social.css';
import { FaEnvelope, FaMedium, FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';

const Social = () => {

    const handleEmailClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth'})
        }
  };

    return (
        <section className="social-section" id="social">
            <div className="social-cards">

                <div className="card clickable" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                    <div className="icon"><FaEnvelope /></div>
                    <h3>Email</h3>
                    <p>Send email</p>
                </div>
                <div
                    className="card clickable"
                    onClick={() => window.open('https://medium.com/@harunzsln0', '_blank')}
                >
                    <div className="icon"><FaMedium /></div>
                    <h3>Medium</h3>
                    <p>@harunzsln0</p>
                </div>
                <div
                    className="card clickable"
                    onClick={() => window.open('https://github.com/harunzsln', '_blank')}
                >
                    <div className="icon"><FaGithub /></div>
                    <h3>Github</h3>
                    <p>@harunzsln</p>
                </div>
                <div
                    className="card clickable"
                    onClick={() => window.open('https://www.linkedin.com/in/harun-ozaslan', '_blank')}
                >
                    <div className="icon"><FaLinkedin /></div>
                    <h3>Linkedin</h3>
                    <p>Let's Connect</p>
                </div>
                <div className="card clickable">
                    <div className="icon"><FaSpotify /></div>
                    <h3>Spotify</h3>
                    <p><a href="https://open.spotify.com/user/ig4jea9ln2nz9ppx3qzlshqrh?si=70b0bfddb3674166">Let's Listen</a></p>
                </div>
            </div>

        </section>

    );
};
export default Social;
