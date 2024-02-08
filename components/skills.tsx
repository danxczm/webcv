'use client';

import React from 'react';

import { motion } from 'framer-motion';

import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import useSectionInView from '@/lib/hooks';
import Image from 'next/image';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="grid grid-cols-4 gap-2 sm:gap-6">
        {skillsData.map((item, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={'animate'}
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="bg-white cursor-pointer borderBlack10 rounded-3xl sm:rounded-[35px] p-2 sm:p-3 dark:bg-white/10"
          >
            <Image
              className="hover:scale-125 transition duration-500 sm:w-24 sm:h-24"
              src={item}
              width={100}
              height={100}
              alt="skill-icon"
              loading="lazy"
            ></Image>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
