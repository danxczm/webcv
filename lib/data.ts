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
      'Is an innovative platform designed to make vocabulary acquisition engaging and efficient.',
    tags: ['React', 'Tailwind', 'RTK Query', 'Cloud Firestore'],
    imageUrl: skyLang,
    github: 'https://github.com/danxczm/translationAppVikki',
    link: 'https://danxczm.github.io/translationAppVikki/',
  },
  {
    title: 'The Crypto Invoicer',
    description: 'Designed to redefine the billing experience for cryptocurrency transactions.',
    tags: ['React', 'Tailwind', 'Redux'],
    imageUrl: invoicer,
    github: 'https://github.com/danxczm/trustvoice',
    link: 'https://danxczm.github.io/trustvoice/',
  },
  {
    title: 'Just a simple Todo App',
    description: 'This is the beginning of my TS journey which I recently started.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    imageUrl: todo,
    github: 'https://github.com/danxczm/learningTS',
    link: 'https://danxczm.github.io/learningTS/',
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
