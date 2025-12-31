import React from 'react';
import { motion } from 'framer-motion';
import { FiCamera, FiUsers, FiMap, FiHeart, FiSun } from 'react-icons/fi';
import './Services.css';

const services = [
    {
        icon: <FiUsers />,
        title: 'Portrait Photography',
        desc: 'Professional headshots, family portraits, and creative modeling portfolios. We focus on bringing out the unique personality of every subject.'
    },
    {
        icon: <FiCamera />,
        title: 'Events & Weddings',
        desc: 'Capture the magic of your special day. Full coverage for weddings, corporate events, and parties with a candid, documentary style.'
    },
    {
        icon: <FiMap />,
        title: 'Landscape & Commercial',
        desc: 'Breathtaking imagery for travel brands, real estate, and editorial use. High-resolution photos that tell a story of place.'
    },
    {
        icon: <FiHeart />,
        title: 'Baby Shoot',
        desc: 'Adorable and safe newborn and baby photography. We capture those precious early moments with tenderness and care.'
    },
    {
        icon: <FiSun />,
        title: 'Outdoor Shoot',
        desc: 'Natural light photography in beautiful outdoor settings. Perfect for couples, families, or solo portraits in nature.'
    }
];

const Services = () => {
    return (
        <div className="services-page section mobile-padding">
            <div className="container">
                <div className="section-header">
                    <h1>Services</h1>
                    <p>Professional quality for every occasion</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
