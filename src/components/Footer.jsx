import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { SiThreads, SiX } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">NAVINRAJA PHOTOGRAPHY</div>
                    <p className="copyright">&copy; {new Date().getFullYear()} navinrajaphotography.<br />All rights reserved.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-social-section">
                    <h3>Follow Me</h3>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/navinrajaphotography/" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                        <a href="https://www.threads.com/@navinrajaphotography?xmt=AQF0sDHE5BMedbjikiQimZO_BhvOsqvuB0OWPN0woXiIDyI" target="_blank" rel="noopener noreferrer"><SiThreads /></a>
                        <a href="https://x.com/NavinRa07938227?t=Eu4Q97l-5ChV1LkoaqotKQ&s=08" target="_blank" rel="noopener noreferrer"><SiX /></a>
                        <a href="https://www.facebook.com/nagarajanmech.be/" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
