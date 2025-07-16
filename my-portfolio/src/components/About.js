import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className='about-me'>
                <h1>About Me</h1>
                {/*<p>I'm a passionate software developer with a focus on creating accessible and user-friendly applications. My journey in tech has been driven by a desire to solve real-world problems and enhance user experiences. I believe in the power of technology to make a positive impact on people's lives.</p>*/}
                <p>I'm Harun, a junior software developer based in Turkey with a strong passion for web technologies and clean, accessible design.
                    
                    My journey in tech began with curiosity what started as simple HTML and CSS experiments has evolved into a deep interest in full-stack development. Over time, I’ve built projects using React, Node.js, and modern tools, always striving to make my code readable, reusable, and user-friendly.
                    <br/>
                    I enjoy the process of turning ideas into digital products, and I value simplicity, performance, and user experience in everything I create. Beyond code, I’m a lifelong learner who thrives on challenges and enjoys collaborating with others to solve real-world problems.
                    <br/>
                    Whether I’m debugging a tricky issue or designing an intuitive UI, I bring a mindset of growth, focus, and craftsmanship to the table.
                    <br/>
                    My goal is to become a developer who not only writes good code but also understands users, communicates clearly, and contributes meaningfully to projects and teams.</p>

            </div>

        </section>
    );
};

export default About;
