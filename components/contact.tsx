'use client';

import React, { useRef } from 'react';

import { motion } from 'framer-motion';

import SectionHeading from './section-heading';

import useSectionInView from '@/lib/hooks';
import { sendEmailHandler } from '@/actions/sendEmail';
import SubmitButton from './submit-button';
import toast from 'react-hot-toast';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const { ref } = useSectionInView('contact');
  const t = useTranslations('Contact');

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t('contact')}</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        {t('info1')}
        <a className="underline" href="mailto:danbohdan92@gmail.com">
          danbohdan92@gmail.com
        </a>
        {t('info2')}
      </p>
      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async formData => {
          const { error } = await sendEmailHandler(formData);
          if (error) {
            toast.error(error);
            return;
          }
          formRef.current?.reset();
          toast.success(t('email_success'));
        }}
      >
        <input
          className="borderBlack10 h-14 rounded-lg px-4 !outline-none transition-all focus:border-black focus:ring focus:ring-gray-400 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="email"
          type="email"
          placeholder={t('input_placeholder')}
          required
          maxLength={500}
        />
        <textarea
          className="borderBlack10 my-3 h-52 rounded-lg p-4 !outline-none transition-all focus:border-black focus:ring focus:ring-gray-400 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder={t('textarea_placeholder')}
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
