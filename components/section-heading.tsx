import React from 'react';

type SectionHeading = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeading) {
  return <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>;
}
