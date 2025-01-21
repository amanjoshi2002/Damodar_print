"use client"; // Required for client-side interactivity

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Upload, Settings, Truck, CheckCircle } from "lucide-react";

// Steps data
const steps = [
  {
    id: 1,
    icon: <Upload size={48} className="text-blue-600" />,
    title: "Upload Your Design",
    description:
      "Easily upload your design files in any format. Our system supports PDF, PNG, JPEG, and more.",
  },
  {
    id: 2,
    icon: <Settings size={48} className="text-green-600" />,
    title: "Choose Your Options",
    description:
      "Select your preferred printing options, including paper type, size, finish, and quantity.",
  },
  {
    id: 3,
    icon: <Truck size={48} className="text-orange-600" />,
    title: "Get Your Prints ",
    description:
      "Sit back and relax! We’ll handle the printing and deliver your order right to your doorstep.",
  },
  {
    id: 4,
    icon: <CheckCircle size={48} className="text-purple-600" />,
    title: "Enjoy Your Prints",
    description:
      "Receive high-quality prints and enjoy the results of your creative work.",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorksSection() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-m text-gray-600">
            A simple and seamless process to get your prints delivered.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mx-auto mb-6 font-bold text-lg">
                {step.id}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">{step.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-s text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg text-m font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Order Now
          </motion.a>
        </div>
      </div>
    </section>
  );
}