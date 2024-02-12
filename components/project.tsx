'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';

import { projectsData } from '@/lib/data';
import { useTranslations } from 'next-intl';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  link,
  id,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const t = useTranslations('Projects');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/60">
            {t(`description${id}`)}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-2">
            <a
              className="rounded-full bg-gray-400 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white hover:bg-gray-500 dark:text-white/70"
              href={github}
              target="_blank"
            >
              github
            </a>
            <a
              className="rounded-full bg-gray-400 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white hover:bg-gray-500 dark:text-white/70"
              href={link}
              target="_blank"
            >
              {t('link')}
            </a>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt="My Project"
          quality={95}
          className="group-even:-right-[initial] absolute -right-40 top-8 hidden w-[28.25rem] rounded-lg border shadow-2xl transition group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2    group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
        />
      </section>
    </motion.div>
  );
}
