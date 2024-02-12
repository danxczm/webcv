'use client';

import React, { useTransition, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function LanguageSelector() {
  const localActive = useLocale();
  let language = localActive;

  const { activeSection } = useActiveSectionContext();

  const [_, startTransition] = useTransition();
  const router = useRouter();

  const toggleLanguage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newLanguage = language === 'en' ? 'uk' : 'en';

    startTransition(() => {
      //   router.replace(`/${newLanguage}/${activeSection}`);
      router.replace(`/${newLanguage}#${activeSection}`);
    });
  };

  return (
    <motion.button
      type="button"
      onClick={toggleLanguage}
      className="fixed bottom-20 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 text-2xl shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 md:bottom-10 md:right-36"
    >
      <p>{language === 'en' ? '🇬🇧' : '🇺🇦'}</p>
    </motion.button>
  );
}
