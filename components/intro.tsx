'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="mb-2 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', duration: 1 }}
          >
            <Image
              src="/me.jpeg"
              alt="Front-End Developer Dan"
              width="192"
              height="192"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
            <motion.span
              animate={{
                rotate: [0, 60, 10, 50, 10],
              }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="absolute bottom-0 right-0 text-4xl"
            >
              👋🏻
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 2 }}
      >
        <span className="font-bold">Hello, I`m Dan.</span> A passionate{' '}
        <span className="font-bold">front-end developer</span> based in{' '}
        <span className="italic font-bold">Ukraine, Kyiv. 🇺🇦</span>
      </motion.p>
    </section>
  );
}
