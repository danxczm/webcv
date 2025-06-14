import React from 'react';

import { MdWorkOutline } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';

import skyLang from '@/public/skyLang.png';
import invoicer from '@/public/invoicer.png';
import todo from '@/public/todo.png';

export const links = [
  {
    name: 'home',
    hash: '#home',
  },
  {
    name: 'about',
    hash: '#about',
  },
  {
    name: 'projects',
    hash: '#projects',
  },
  {
    name: 'skills',
    hash: '#skills',
  },
  {
    name: 'experience',
    hash: '#experience',
  },
  {
    name: 'contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    id: 1,
    title: 'Front-End Developer - NDA',
    location: 'Kyiv, Ukraine 🇺🇦',
    description:
      'Implemented new features, fixed critical bugs, maintained and improved existing functionality, proposed technical enhancements, integrated third-party services, and refactored code for performance and readability.',
    icon: React.createElement(FaReact),
    date: '2024 - now',
  },
  {
    id: 2,
    title: 'Front-End Developer in Talent Bay',
    location: 'Kyiv, Ukraine 🇺🇦',
    description:
      'Built a scalable, SEO-friendly CRM with reusable components using Styled Components and Ant Design. Focused on performance, responsive design, and clean, maintainable code with TypeScript and Next.js. Tools of the trade: NextJS, TypeScript, AntDesign, Zustand, StyledComponents.',
    icon: React.createElement(FaReact),
    date: '2023-2024',
  },
  {
    id: 3,
    title: 'Front-End Developer in TRUSTEE GLOBAL',
    location: 'Vinnytsia, Ukraine 🇺🇦',
    description:
      'Creating a sleek and dynamic web version for main product! Collaborating on both enhancing the current project and crafting exciting new components. Also turbocharging the existing project with optimization and refactoring magic. Tools of the trade: JS, React, React Native, Apollo GraphQl, GitLab.',
    icon: React.createElement(FaReact),
    date: '2023',
  }
] as const;

export const projectsData = [
  {
    id: 1,
    title: 'SkyLang',
    description:
      'Is an innovative platform designed to make vocabulary acquisition engaging and efficient.',
    tags: ['React', 'Tailwind', 'RTK Query', 'Cloud Firestore'],
    imageUrl: skyLang,
    github: 'https://github.com/danxczm/translationAppVikki',
    link: 'https://danxczm.github.io/translationAppVikki/',
  },
  {
    id: 2,
    title: 'The Crypto Invoicer',
    description: 'Designed to redefine the billing experience for cryptocurrency transactions.',
    tags: ['React', 'Tailwind', 'Redux'],
    imageUrl: invoicer,
    github: 'https://github.com/danxczm/trustvoice',
    link: 'https://danxczm.github.io/trustvoice/',
  },
  {
    id: 3,
    title: 'Just a simple Todo App',
    description: 'This is the beginning of my TS journey which I recently started.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Zustand'],
    imageUrl: todo,
    github: 'https://github.com/danxczm/learningTS',
    link: 'https://danxczm.github.io/learningTS/',
  },
] as const;

export const skillsData = [
  'https://skillicons.dev/icons?i=html',
  'https://skillicons.dev/icons?i=css',
  'https://skillicons.dev/icons?i=js',
  'https://skillicons.dev/icons?i=ts',
  'https://skillicons.dev/icons?i=react',
  'https://skillicons.dev/icons?i=next',
  'https://skillicons.dev/icons?i=tailwind',
  'https://skillicons.dev/icons?i=redux',
] as const;
