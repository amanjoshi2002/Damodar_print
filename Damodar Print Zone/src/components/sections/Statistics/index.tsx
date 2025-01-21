"use client"; // Required for client-side interactivity

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Check, Smile, Truck, Printer } from "lucide-react";

// Statistics data
const statistics = [
  {
    id: 1,
    icon: <Printer size={48} className="text-blue-600" />,
    value: 10000,
    label: "Prints Delivered",
    suffix: "+",
  },
  {
    id: 2,
    icon: <Smile size={48} className="text-green-600" />,
    value: 98,
    label: "Customer Satisfaction",
    suffix: "%",
  },
  {
    id: 3,
    icon: <Truck size={48} className="text-orange-600" />,
    value: 5000,
    label: "Orders Shipped",
    suffix: "+",
  },
  {
    id: 4,
    icon: <Check size={48} className="text-purple-600" />,
    value: 99,
    label: "On-Time Delivery",
    suffix: "%",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StatisticsBanner() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-m text-gray-600">
            Numbers that speak for our expertise and commitment.
          </p>
        </div>

        {/* Statistics Grid */}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {statistics.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">{stat.icon}</div>

              {/* Animated Counter */}
              <div className="text-2xl sm:text-5xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-m text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Animated Counter Component
const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const increment = Math.ceil(value / (duration / 16)); // 60fps

    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.span>
      {count}
      {suffix}
    </motion.span>
  );
};