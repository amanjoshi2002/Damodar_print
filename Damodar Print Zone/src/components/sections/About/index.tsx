'use client';

import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 text-black"
        >
          About Us
        </motion.h2>

        {/* Text Content in a Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {/* Company History */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-black">Our Story</h3>
            <p className="text-gray-600">
              Damodar Print Zone started as a small printing shop in Goa. Over the years, we’ve grown into a trusted name in the printing industry, serving thousands of happy customers with high-quality prints and exceptional service.
            </p>
          </div>

          {/* Mission and Values */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-black">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to deliver premium-quality printing solutions that help businesses and individuals bring their ideas to life. We believe in innovation, sustainability, and customer satisfaction.
            </p>
          </div>

          {/* Achievements */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-black">Our Achievements</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>10,000+ Happy Customers</li>
              <li>500+ Successful Projects</li>
              <li>5-Star Rated Service</li>
            </ul>
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;