import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

// Placeholder or generated assets
// Dynamically import images
const heroGlob = import.meta.glob('../assets/herosection/*.{jpg,jpeg,png,webp}', { eager: true });
const heroImages = Object.values(heroGlob).map(mod => mod.default);

const carouselGlob = import.meta.glob('../assets/homecarousel/*.{jpg,jpeg,png,webp}', { eager: true });
const carouselImages = Object.values(carouselGlob).map(mod => mod.default);

const Home = () => {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${heroImages[currentBgIndex]})` }}>
                <div className="hero-overlay"></div>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className="hero-title">navinraja photography</h1>
                    <p className="hero-tagline">Visual Storyteller & Professional Photographer</p>
                    <Link to="/portfolio" className="cta-button">View Gallery</Link>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="section intro-section">
                <div className="container">
                    <motion.div
                        className="intro-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Capturing the Essence of Life</h2>
                        <p>
                            I believe that every image tells a story. My approach is minimalist, cinematic,
                            and focused on genuine emotion. Whether it's a quiet landscape or a vibrant wedding,
                            I strive to create timeless art that you will cherish forever.
                        </p>
                        <div className="signature">navinraja</div>
                        <div className="signature">photography</div>
                    </motion.div>
                </div>
            </section>

            {/* Video Section */}
            <section className="section video-section">
                <div className="container">
                    <h2 className="video-title">Stories by navinrajaphotography</h2>
                </div>
                <motion.div
                    className="video-wrapper full-width"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/o3dVYoX1e8s"
                        title="Stories by navinrajaphotography"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </section>

            {/* Carousel Section */}
            <section className="section carousel-section">
                <div className="carousel-track">
                    <motion.div
                        className="carousel-inner"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20
                        }}
                    >
                        {/* Duplicate images to create infinite loop illusion */}
                        {[...carouselImages, ...carouselImages].map((img, index) => (
                            <div key={index} className="carousel-item">
                                <img src={img} alt={`Carousel ${index}`} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Booking CTA Section */}
            <section className="section booking-section">
                <div className="container">
                    <motion.div
                        className="booking-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Ready to Create Magic?</h2>
                        <p>Let's capture your special moments and turn them into timeless memories.</p>
                        <Link to="/contact" className="cta-button">Book an Event</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
