'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import SectionHeading from './section-heading';

import useSectionInView from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('about');

  const t = useTranslations('About');

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <SectionHeading>{t('about')}</SectionHeading>
      <p className="mb-3">
        {t('info')}
        <span className="font-medium">{t('info2')}</span>
      </p>
      <p>
        <span className="italic">{t('info3')}</span>
        {t('info4')}
        <span className="font-medium">{t('info5')}</span>
        {t('info6')}
        <span className="font-medium">TypeScript</span>
        {t('info7')}
      </p>
      <p>
        {t('info8')}
        <span className="italic text-[#03A062]">{t('info9')}</span>
        {t('info10')}
      </p>
      <p>{t('info11')}</p>
    </motion.section>
  );
}
