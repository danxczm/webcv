'use client';
import { motion } from 'framer-motion';

import SectionHeading from './section-heading';

import useSectionInView from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Law grad turned coding maestro, I dove into the world of programming via an online school
        "GOIT," mastering <span className="font-medium">front-end web development</span>.{' '}
      </p>
      <p>
        <span className="italic">Solving coding puzzles</span> gives me an unbeatable high. Armed
        with <span className="font-medium">React, Next.js</span>, and a touch of{' '}
        <span className="font-medium">TypeScript</span>, I'm on the lookout for a full-time software
        developer role. I am always looking to learn new technologies.
      </p>
      <p>
        Outside the coding <span className="italic text-[#03A062]">matrix</span>, catch me making
        music, watching movies, or playing with my dog.
      </p>
      <p>Ready to bring my problem-solving prowess to your team!🚀</p>
    </motion.section>
  );
}
