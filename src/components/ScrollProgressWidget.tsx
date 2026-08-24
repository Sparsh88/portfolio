import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollProgressWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  const progressPercent = useTransform(smoothProgress, p => Math.round(p * 100));
  const [percentText, setPercentText] = useState(0);

  useEffect(() => {
    return progressPercent.on('change', v => setPercentText(v));
  }, [progressPercent]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 18; // radius 18 => ~113.1

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-center"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.92 }}
            className="group relative w-12 h-12 rounded-full bg-white dark:bg-[#111111] border-2 border-neutral-300 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-400 shadow-lg hover:shadow-2xl flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Scroll back to top"
            title={`Scroll to top (${percentText}%)`}
          >
            {/* SVG Circular Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 44 44"
            >
              {/* Background Ring */}
              <circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-neutral-200 dark:text-neutral-800"
              />
              {/* Animated Progress Ring */}
              <motion.circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="text-sky-500 dark:text-sky-400"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: useTransform(smoothProgress, p => circumference * (1 - p))
                }}
              />
            </svg>

            {/* Inner Arrow Icon */}
            <ArrowUp className="w-4 h-4 text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200 z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
