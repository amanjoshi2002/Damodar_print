"use client"; // Required for client-side interactivity

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CTABanner() {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the target date for the countdown (e.g., 24 hours from now)
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 24);

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-navy-900"> {/* Reduced height and navy blue background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Bold Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-bold text-white mb-4"
          >
            Ready to Transform Your Ideas into Prints?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-100 mb-6"
          >
            Experience premium printing services with fast delivery and exceptional quality.
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.a
            href="/print"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </motion.a>

          {/* Optional: Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6"
          >
            <p className="text-sm text-blue-100 mb-2">Limited-time offer ends in:</p>
            <div className="flex justify-center gap-2 sm:gap-4">
              <div className="bg-white/10 p-2 sm:p-3 rounded-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">{timeLeft.hours}</span>
                <span className="text-xs sm:text-sm text-blue-100">Hours</span>
              </div>
              <div className="bg-white/10 p-2 sm:p-3 rounded-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">{timeLeft.minutes}</span>
                <span className="text-xs sm:text-sm text-blue-100">Minutes</span>
              </div>
              <div className="bg-white/10 p-2 sm:p-3 rounded-lg">
                <span className="text-xl sm:text-2xl font-bold text-white">{timeLeft.seconds}</span>
                <span className="text-xs sm:text-sm text-blue-100">Seconds</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}