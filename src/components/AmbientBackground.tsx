import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AmbientBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Subtle vertical parallax movement on scroll
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top Right Sky / Indigo Glow */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -top-32 -right-32 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-sky-400/15 to-indigo-500/10 dark:from-sky-600/10 dark:to-indigo-600/10 blur-[120px] will-change-transform"
      />

      {/* Middle Left Purple / Violet Glow */}
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-1/3 -left-36 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-tr from-purple-400/15 to-violet-500/10 dark:from-purple-600/10 dark:to-violet-700/10 blur-[140px] will-change-transform"
      />

      {/* Lower Right Emerald / Teal Glow */}
      <motion.div
        style={{ y: orb3Y }}
        className="absolute top-2/3 -right-36 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tl from-emerald-400/15 to-teal-500/10 dark:from-emerald-600/10 dark:to-teal-700/10 blur-[130px] will-change-transform"
      />
    </div>
  );
};
