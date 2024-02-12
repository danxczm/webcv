'use client';

import React, { useContext } from 'react';
import SectionHeading from './section-heading';

import { experiencesData } from '@/lib/data';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useSectionInView from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';
import { useTranslations } from 'next-intl';

export default function Experience() {
  const { ref } = useSectionInView('experience', 0.5);
  const t = useTranslations('Experience');
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="mb-28 scroll-mt-28">
      <SectionHeading>{t('experience')}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map(({ title, location, description, icon, date, id }, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.5)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={date}
              icon={icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className="font-semibold">{t(`title${id}`)}</h3>
              <p className="!mt-0 font-normal">{t(`location${id}`)}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {t(`description${id}`)}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
