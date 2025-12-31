import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiInstagram, FiFacebook } from 'react-icons/fi';
import { SiThreads, SiX } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page section mobile-padding">
            <div className="container">
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Get in Touch</h1>
                        <p className="contact-desc">
                            Interested in working together? Fill out the form or reach out directly via email or social media.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <FiMail /> <span>navinrajaphotography@gmail.com</span>
                            </div>
                            <div className="detail-item">
                                <FiPhone /> <span>+91 81445 75573</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://www.instagram.com/navinrajaphotography/" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                            <a href="https://www.threads.com/@navinrajaphotography?xmt=AQF0sDHE5BMedbjikiQimZO_BhvOsqvuB0OWPN0woXiIDyI" target="_blank" rel="noopener noreferrer"><SiThreads /></a>
                            <a href="https://x.com/NavinRa07938227?t=Eu4Q97l-5ChV1LkoaqotKQ&s=08" target="_blank" rel="noopener noreferrer"><SiX /></a>
                            <a href="https://www.facebook.com/nagarajanmech.be/" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <select>
                                <option>General Inquiry</option>
                                <option>Portrait Session</option>
                                <option>Wedding Photography</option>
                                <option>Commercial</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Tell me about your project" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
