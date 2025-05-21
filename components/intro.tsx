'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { useActiveSectionContext } from '@/context/active-section-context';

import useSectionInView from '@/lib/hooks';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Intro() {
  const { ref } = useSectionInView('home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const t = useTranslations('Intro');

  return (
    <section
      id="home"
      ref={ref}
      className="mb-2 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
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
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 2 }}
      >
        <span className="block italic">{t('name')}</span>
        <span className="font-bold">{t('skill')}</span>
        <span>{t('separate')}</span>
        <span className="font-bold italic">{t('location')}</span>
        <span className="block">{t('enjoy')} 💻</span>
        <span className="italic">
          {t('focus')}
          <span className="font-bold italic underline">React/Next.js</span>
        </span>{' '}
        👨‍🚀
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 2, delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          {t('contact')}
          <BsArrowRight
            className="opacity-70 transition group-hover:translate-x-1"
            onClick={() => {
              setActiveSection('contact');
              setTimeOfLastClick(Date.now());
            }}
          />
        </Link>

        <a
          className="borderBlack10 group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href={'Front_End_Developer_Borodavko_Bohdan.pdf'}
          download
        >
          {t('cv')}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            className="borderBlack10 cursor-pointer rounded-full bg-white  p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/bohdan-borodavko-615796173/"
            target="_blank"
          >
            <BsLinkedin className="p-0" />
          </a>

          <a
            className="borderBlack10 cursor-pointer rounded-full  bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/danxczm"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
