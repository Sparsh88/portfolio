import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const CIRCUMFERENCE = 2 * Math.PI * 18; // radius 18 => ~113.1

export const ScrollProgressWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [percentText, setPercentText] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  const strokeDashoffset = useTransform(smoothProgress, p => CIRCUMFERENCE * (1 - p));

  useMotionValueEvent(smoothProgress, 'change', latest => {
    setPercentText(Math.round(latest * 100));
  });

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
                className="text-black dark:text-white"
                style={{
                  strokeDasharray: CIRCUMFERENCE,
                  strokeDashoffset
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
