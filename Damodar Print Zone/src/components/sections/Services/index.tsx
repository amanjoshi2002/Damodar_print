'use client';

import { motion } from 'framer-motion';
import { CreditCard, BookOpen, Image, FileText, Printer, Edit, Layers } from 'react-feather';
import { useState } from 'react';

// Service data
const services = [
  {
    id: 1,
    icon: <CreditCard size={32} aria-label="Smart ID Cards" />,
    title: 'Smart ID Cards',
    description: 'Durable and professional ID cards for your organization.',
    href: '#smart-id-cards',
  },
  {
    id: 3,
    icon: <BookOpen size={32} aria-label="Pamphlets/Magazine" />,
    title: 'Pamphlets/Magazine',
    description: 'Premium-quality magazines and booklets for your content.',
    href: '#pamphlets-magazine',
  },
  {
    id: 4,
    icon: <Image size={32} aria-label="Photo Prints/Drawings" />,
    title: 'Photo Prints/Drawings',
    description: 'High-resolution photo prints and artistic drawings.',
    href: '#photo-prints-drawings',
  },
  {
    id: 5,
    icon: <FileText size={32} aria-label="Panoramic Print" />,
    title: 'Panoramic Print',
    description: 'Stunning panoramic prints for wide-format displays.',
    href: '#panoramic-print',
  },
  {
    id: 6,
    icon: <Image size={32} aria-label="UV DTF Stickers" />,
    title: 'UV DTF Stickers',
    description: 'Durable and vibrant UV DTF stickers.',
    href: '#uv-dtf-stickers',
  },
  {
    id: 7,
    icon: <Image size={32} aria-label="Flex Banners / Vinyl / Canvas" />,
    title: 'Flex Banners / Vinyl / Canvas',
    description: 'Large-format banners and canvases for promotions.',
    href: '#flex-banners-vinyl-canvas',
  },
  {
    id: 8,
    icon: <Printer size={32} aria-label="Colour Digital Printing" />,
    title: 'Colour Digital Printing',
    description: 'High-quality digital printing for various needs.',
    href: '#colour-digital-printing',
  },
  {
    id: 9,
    icon: <Edit size={32} aria-label="Graphics Designing" />,
    title: 'Graphics Designing',
    description: 'Professional graphics designing services.',
    href: '#graphics-designing',
  },
  {
    id: 10,
    icon: <FileText size={32} aria-label="Multi Colour Offset Printing" />,
    title: 'Multi Colour Offset Printing',
    description: 'Premium multi-colour offset printing solutions.',
    href: '#multi-colour-offset-printing',
  },
  {
    id: 11,
    icon: <FileText size={32} aria-label="Rollup Standies/ Glow Sign Boards" />,
    title: 'Rollup Standies/ Glow Sign Boards',
    description: 'Rollup standies and glow sign boards for events.',
    href: '#rollup-standies-glow-sign-boards',
  },
  {
    id: 12,
    icon: <CreditCard size={32} aria-label="Visiting Cards / Invites" />,
    title: 'Visiting Cards / Invites',
    description: 'Stylish visiting cards and personalized invites.',
    href: '#visiting-cards-invites',
  },
  {
    id: 13,
    icon: <BookOpen size={32} aria-label="Pamphlets/ Brochures" />,
    title: 'Pamphlets/ Brochures',
    description: 'Eye-catching pamphlets and brochures.',
    href: '#pamphlets-brochures',
  },
  {
    id: 14,
    icon: <Image size={32} aria-label="Stickers / Tent Cards" />,
    title: 'Stickers / Tent Cards',
    description: 'Vibrant stickers and custom tent cards.',
    href: '#stickers-tent-cards',
  },
  {
    id: 15,
    icon: <Layers size={32} aria-label="Lamination / Cad Plotting" />,
    title: 'Lamination / Cad Plotting',
    description: 'Professional lamination and CAD plotting services.',
    href: '#lamination-cad-plotting',
  },
  {
    id: 16,
    icon: <Image size={32} aria-label="Photo Frames" />,
    title: 'Photo Frames',
    description: 'Elegant photo frames to showcase your memories.',
    href: '#photo-frames',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface ServicesSectionProps {
  id?: string; // Add the id prop to the component's props interface
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ id }) => {
  const [showAll, setShowAll] = useState(false); // State to control visibility

  // Function to toggle visibility of all services
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine the number of services to display
  const displayedServices = showAll ? services : services.slice(0, 8);

  return (
    <section className="py-16 bg-gray-50" id={id}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 text-black"
        >
          Our Printing Services
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          key={showAll ? 'all' : 'partial'} // Force re-render when showAll changes
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Ensure animation only triggers once
        >
          {displayedServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => {
                const message = `I want ${service.title}`;
                const whatsappUrl = `https://wa.me/+919623451932?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="text-4xl mb-4 text-blue-500"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleShowAll} // Toggle visibility on click
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all text-sm sm:text-base"
          >
            {showAll ? 'Show Less' : 'View More Services'}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;