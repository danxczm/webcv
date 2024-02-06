import React from 'react';

import { MdWorkOutline } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';

import skyLang from '@/public/skyLang.png';
import invoicer from '@/public/invoicer.png';
import todo from '@/public/todo.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Junior Front-End Developer in TRUSTEE GLOBAL',
    location: 'Vinnytsia, Ukraine 🇺🇦',
    description:
      'Creating a sleek and dynamic web version for main product! Collaborating on both enhancing the current project and crafting exciting new components. Also turbocharging the existing project with optimization and refactoring magic. Tools of the trade: JS, React, React Native, Apollo GraphQl, GitLab.',
    icon: React.createElement(FaReact),
    date: '2023',
  },
  {
    title: 'Sales manager in BRIGHTERLY',
    location: 'Las Vegas, USA 🇺🇸',
    description: 'Ensure effective communication between team members and clients.',
    icon: React.createElement(MdWorkOutline),
    date: '2022 - 2023',
  },
  {
    title: 'Sales manager in ENGLISHDOM',
    location: 'Dnipro, Ukraine 🇺🇦',
    description:
      'I`ve excel in fostering client relationships, identifying opportunities, and ensuring effective communication to drive business growth',
    icon: React.createElement(MdWorkOutline),
    date: '2020-2022',
  },
] as const;

export const projectsData = [
  {
    title: 'SkyLang',
    description:
      'My language learning pet project is an innovative platform designed to make vocabulary acquisition engaging and efficient.',
    tags: ['React', 'Tailwind', 'RTK Query (Redux)', 'Cloud Firestore'],
    imageUrl: skyLang,
  },
  {
    title: 'The Crypto Invoicer',
    description:
      'My pet project, the Crypto Invoicer App, was conceived to redefine the invoicing experience in the realm of cryptocurrency transactions.',
    tags: ['React', 'Tailwind', 'Redux'],
    imageUrl: invoicer,
  },
  {
    title: 'Just a simple Todo App',
    description: 'This is the beginning of my TS journey which I recently started.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    imageUrl: todo,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'Tailwind',
  'Redux',
  'Figma',
  'Ableton Live',
] as const;
