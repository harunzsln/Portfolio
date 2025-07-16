import React from "react";
import '../styles/Social.css';
import { FaEnvelope, FaMedium, FaGithub, FaLinkedin } from 'react-icons/fa';

const Social = () => {
    return (
        <section className="social-section" id="social">
            <div className="social-cards">
                <div className="card">
                    <div className="icon"></div>
                    <h3>Full Name</h3>
                    <p>Harun Genel</p>
                </div>
                <div className="card clickable">
                    <div className="icon"><FaEnvelope /></div>
                    <h3>Email Address</h3>
                    <p><a href="mailto:harunzsln0@gmail.com">Send email</a></p>
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
                    <div className="icon"><FaLinkedin/></div>
                    <h3>Linkedin</h3>
                    <p>Lets Connect</p>
                </div>
                
            </div>

        </section>

    );
};
export default Social;
