"use client"; // Required for client-side interactivity

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define TypeScript types
type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  rates: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Rollup Standies",
    category: "Rollup Standies/ Glow Sign Boards",
    image: "/images/sections/portfolio/rollup-standee.webp",
    description: "Professional rollup standies for events and exhibitions.",
    rates: "$100 per standee",
  },
  {
    id: 2,
    title: "Glow Sign Boards",
    category: "Rollup Standies/ Glow Sign Boards",
    image: "/images/sections/portfolio/standee2.jpg",
    description: "Custom glow sign boards for businesses and events.",
    rates: "$200 per sign board",
  },
  {
    id: 3,
    title: "Elegant Photo Frames",
    category: "Photo Frames",
    image: "/images/sections/portfolio/photoframe1.jpg",
    description: "Stylish photo frames to showcase your memories.",
    rates: "$25 per frame",
  },
  {
    id: 4,
    title: "Custom Photo Frames",
    category: "Photo Frames",
    image: "/images/sections/portfolio/photoframe.webp",
    description: "Custom-designed photo frames for special occasions.",
    rates: "$30 per frame",
  },
  {
    id: 5,
    title: "Logo Design",
    category: "Graphics Designing",
    image: "/images/sections/portfolio/graphic design.jpeg",
    description: "Professional logo design for your brand.",
    rates: "$150 per logo",
  },
  {
    id: 6,
    title: "Brochure Design",
    category: "Graphics Designing",
    image: "/images/sections/portfolio/graphic 2.webp",
    description: "Creative brochure designs for marketing campaigns.",
    rates: "$100 per design",
  },
  {
    id: 7,
    title: "Pamphlets",
    category: "Pamphlets/ Brochures",
    image: "/images/sections/portfolio/brocher.jpeg",
    description: "Eye-catching pamphlets for promotions.",
    rates: "$50 for 100 pamphlets",
  },
  {
    id: 8,
    title: "Brochures",
    category: "Pamphlets/ Brochures",
    image: "/images/sections/portfolio/brocher2.jpeg",
    description: "High-quality brochures for your business.",
    rates: "$70 for 50 brochures",
  },
  {
    id: 9,
    title: "Visiting Cards",
    category: "Visiting Cards / Invites",
    image: "/images/sections/portfolio/visitingcard.jpeg",
    description: "Elegant visiting cards for professionals.",
    rates: "$30 for 100 cards",
  },
  {
    id: 10,
    title: "Wedding Invites",
    category: "Visiting Cards / Invites",
    image: "/images/sections/portfolio/wedding card.jpg",
    description: "Custom wedding invites for your special day.",
    rates: "$50 for 50 invites",
  },
];
// Animation variants for Framer Motion
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function PortfolioSection(): JSX.Element {
  const [filter, setFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Categories for filtering
  const categories: string[] = [
    "All",
    "Rollup Standies/ Glow Sign Boards",
    "Photo Frames",
    "Graphics Designing",
    "Pamphlets/ Brochures",
    "Visiting Cards / Invites",
  ];

  // Filtered portfolio items
  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="py-16 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-black">
          Our Portfolio
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-lg font-semibold">
                  View Details
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-2xl w-full p-4 sm:p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                onClick={() => setSelectedItem(null)}
              >
                &times;
              </button>

              {/* Modal Content */}
              <div className="relative h-48 sm:h-64 mb-4 sm:mb-6">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">
                {selectedItem.title}
              </h3>
              <p className="text-black text-sm sm:text-base mb-4">
                {selectedItem.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
