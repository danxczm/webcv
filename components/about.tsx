'use client';
import { motion } from 'framer-motion';

import SectionHeading from './section-heading';

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <span className="font-medium">Law</span>, I decided to
        pursue my passion for programming. I enrolled in an online school "GO IT" and learned{' '}
        <span className="font-medium">front-end web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the problem-solving
        aspect. I <span className="underline">love</span> the feeling of finally figuring out a
        solution to a problem. My core stack is{' '}
        <span className="font-medium">React and Next.js</span>. I am also familiar with{' '}
        <span className="font-medium">TypeScript</span>. I am always looking to learn new
        technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy making music, watching movies,
        and playing with my dog.
      </p>
    </motion.section>
  );
}
