'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="my-14 h-16 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 sm:my-24"
    ></motion.div>
  );
}
