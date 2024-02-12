'use client';

import React, { useTransition, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { motion } from 'framer-motion';

export default function LanguageSelector() {
  const localActive = useLocale();
  let language = localActive;

  const [_, startTransition] = useTransition();
  const router = useRouter();

  const toggleLanguage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newLanguage = language === 'en' ? 'uk' : 'en';

    startTransition(() => {
      router.replace(`/${newLanguage}`);
    });
  };

  return (
    <motion.button
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      type="button"
      onClick={toggleLanguage}
      className="flex items-center justify-center px-4 text-2xl"
    >
      <p>{language === 'en' ? '🇬🇧' : '🇺🇦'}</p>
    </motion.button>
  );
}
