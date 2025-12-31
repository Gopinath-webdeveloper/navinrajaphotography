import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import NavinRajaImg from '../assets/navinraja.jpg';

const About = () => {
    return (
        <div className="about-page section mobile-padding">
            <div className="container">
                <div className="about-content">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={NavinRajaImg} alt="Navin Raja" className="about-image" />
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>About Me</h1>
                        <h3>navinrajaphotography</h3>
                        <p className="bio">
                            I am a professional photographer based in madurai, specializing in portrait, landscape, and wedding photography.
                            With over 10 years of experience behind the lens, I have learned that the best photos are the ones that are honest.
                        </p>

                        <div className="philosophy">
                            <h4>My Philosophy</h4>
                            <p>
                                "To capture the essence of a moment is to freeze time." I believe in the power of visual storytelling.
                                My goal is to create images that evoke emotion and stand the test of time. Minimalism allows the
                                subject to breathe, while light and shadow create the drama.
                            </p>
                        </div>

                        <div className="experience">
                            <h4>Experience</h4>
                            <ul>
                                <li><strong>2019 - Present:</strong> Freelance Photographer</li>
                                {/* <li><strong>2012 - 2015:</strong> Lead Photographer at gopinath photography</li> */}
                                {/* <li><strong>Awards:</strong> Best Portrait 2018 (LensCulture), Nature Photographer of the Year Finalist 2020</li> */}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
