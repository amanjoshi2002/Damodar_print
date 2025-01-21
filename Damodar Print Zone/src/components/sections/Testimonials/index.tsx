"use client"; // Required for client-side interactivity

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image"; // Import the Image component from next/image

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Marketing Manager",
    image: "/images/sections/testinomial/1.jpg",
    rating: 5,
    review:
      "The printing quality is exceptional! Our business cards and brochures turned out exactly as we envisioned. Highly recommend their services.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Event Planner",
    image: "/images/sections/testinomial/2.jpg",
    rating: 4.5,
    review:
      "We used their services for event posters and customized mugs. The team was professional, and the delivery was on time. Great experience!",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Small Business Owner",
    image: "/images/sections/testinomial/1.jpg",
    rating: 5,
    review:
      "The panoramic prints we ordered were stunning. The colors were vibrant, and the quality was top-notch. Will definitely use them again.",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-m text-gray-600">
            Hear from our satisfied clients about their experience with our printing services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Client Image */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 overflow-hidden rounded-full border-4 border-blue-100 shadow-md">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role}`}
                  className="w-full h-full object-cover"
                  width={80}
                  height={80}
                />
              </div>

              {/* Rating */}
              <div className="flex justify-center items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 italic text-center">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Client Name and Role */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}