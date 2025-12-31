import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Portfolio.css';

// Dynamically import all images
const portraitImages = import.meta.glob('../assets/portfolio/portrait/*.{jpg,jpeg,png,webp}', { eager: true });
const landscapeImages = import.meta.glob('../assets/portfolio/landscape/*.{jpg,jpeg,png,webp}', { eager: true });
const weddingImages = import.meta.glob('../assets/portfolio/wedding/*.{jpg,jpeg,png,webp}', { eager: true });
const streetImages = import.meta.glob('../assets/portfolio/street/*.{jpg,jpeg,png,webp}', { eager: true });
const babyImages = import.meta.glob('../assets/portfolio/baby/*.{jpg,jpeg,png,webp}', { eager: true });
const outdoorImages = import.meta.glob('../assets/portfolio/outdoor/*.{jpg,jpeg,png,webp}', { eager: true });

const generatePortfolioData = (images, category) => {
    return Object.values(images).map((mod, index) => ({
        id: `${category}-${index}`,
        src: mod.default,
        category: category,
        title: `${category} Shot ${index + 1}`
    }));
};

const portfolioData = [
    ...generatePortfolioData(portraitImages, 'Portrait'),
    ...generatePortfolioData(landscapeImages, 'Landscape'),
    ...generatePortfolioData(weddingImages, 'Wedding'),
    ...generatePortfolioData(streetImages, 'Street'),
    ...generatePortfolioData(babyImages, 'Baby'),
    ...generatePortfolioData(outdoorImages, 'Outdoor')
];

const categories = ['All', 'Portrait', 'Landscape', 'Wedding', 'Street', 'Baby', 'Outdoor'];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [selectedImg, setSelectedImg] = useState(null);

    const filteredImages = filter === 'All'
        ? portfolioData
        : portfolioData.filter(img => img.category === filter);

    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImg.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImg(filteredImages[nextIndex]);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImg.id);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImg(filteredImages[prevIndex]);
    };

    return (
        <div className="portfolio-page section mobile-padding">
            <div className="container">
                <header className="portfolio-header">
                    <h1>Portfolio</h1>
                    <div className="filter-buttons">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                <motion.div layout className="portfolio-grid">
                    <AnimatePresence>
                        {filteredImages.map((img) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={img.id}
                                className="portfolio-item"
                                onClick={() => setSelectedImg(img)}
                            >
                                <img src={img.src} alt={img.title} />
                                <div className="portfolio-overlay">
                                    <h3>{img.title}</h3>
                                    <span>{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="close-btn" onClick={() => setSelectedImg(null)}>
                            <FiX size={30} />
                        </button>

                        <button className="nav-btn prev-btn" onClick={handlePrev}>
                            <FiChevronLeft size={40} />
                        </button>

                        <motion.img
                            key={selectedImg.id} // Add key to trigger animation on change
                            src={selectedImg.src}
                            alt={selectedImg.title}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button className="nav-btn next-btn" onClick={handleNext}>
                            <FiChevronRight size={40} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;
