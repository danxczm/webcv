'use client';

import React from 'react';

import SectionHeading from './section-heading';
import Project from './project';

import { projectsData } from '@/lib/data';
import useSectionInView from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('projects', 0.5);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
