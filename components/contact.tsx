'use client';

import React from 'react';

import { motion } from 'framer-motion';

import SectionHeading from './section-heading';

import useSectionInView from '@/lib/hooks';
import { sendEmailHandler } from '@/actions/sendEmail';
import SubmitButton from './submit-button';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:danbohdan92@gmail.com">
          danbohdan92@gmail.com
        </a>{' '}
        or through form below.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async formData => {
          const { info, error } = await sendEmailHandler(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent!');
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack10 !outline-none focus:border-black focus:ring focus:ring-gray-400 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="email"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack10 !outline-none focus:border-black focus:ring focus:ring-gray-400 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}