'use client';

import Link from 'next/link';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';
import LanguageSelector from './language-selector';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const t = useTranslations('Header');

  return (
    <header className="relative z-50">
      <div className="flex">
        <motion.div
          className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[34rem] sm:rounded-full"
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
        ></motion.div>
        <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[27rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3">
            {links.map(link => (
              <motion.li
                key={link.hash}
                className="relative flex h-3/4 items-center justify-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    'flex w-full items-center justify-center p-3 capitalize transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300',
                    { 'text-gray-950 dark:text-gray-200': activeSection === link.name }
                  )}
                >
                  {t(`${link.name}`)}
                </Link>
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100  dark:bg-gray-800 "
                  ></motion.span>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
}
