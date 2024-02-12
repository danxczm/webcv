'use client';

import React, { useTransition, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { motion, useReducedMotion, MotionConfig } from 'framer-motion';

export default function LanguageSelector() {
  const localActive = useLocale();
  let language = localActive;

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const toggleLanguage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newLanguage = language === 'en' ? 'uk' : 'en';

    startTransition(() => {
      router.replace(`/${newLanguage}`);
    });
  };

  return (
    <MotionConfig reducedMotion="always">
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        type="button"
        onClick={toggleLanguage}
        className="flex items-center justify-center px-4 text-2xl"
      >
        <p>{language === 'en' ? '🇬🇧' : '🇺🇦'}</p>
      </motion.button>
    </MotionConfig>
  );
}
