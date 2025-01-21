'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Background images for the slider
const backgroundImages = [
  '/images/hero/slider1.png', // Replace with your image paths
  '/images/hero/slider2.png',
  '/images/hero/slider3.png',
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Text animation on load
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index === 0 ? 0 : '100%' }} // Start from the right
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              x: index === currentImageIndex ? 0 : index < currentImageIndex ? '-100%' : '100%', // Slide out left or right
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={`Printing Service Background ${index + 1}`}
              fill
              className="object-cover"
              priority // Ensures the image loads first for better SEO
            />
            <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for better text contrast */}
          </motion.div>
        ))}
      </div>

      {/* Content - Slogan on the Left */}
      <div className="relative z-10 text-left px-4 sm:px-8 lg:px-16 max-w-2xl">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6"
        >
          Transform Your Ideas into{' '}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1, type: 'spring', stiffness: 90 }}
            className="text-blue-400 inline-block"
          >
            Stunning Prints
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100 }}
          className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8"
        >
          From business cards to large-format banners, we deliver premium quality prints with fast turnaround times. Your vision, our expertise.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 100 }}
          className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Link
              href="https://wa.me/+919623451932?text=I%20want%20a%20quote%20for"
              className="bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Link
              href="#services"
              className="bg-transparent border-2 border-white text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Indicator (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, type: 'spring', stiffness: 100 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-6 border-2 border-white rounded-full"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;