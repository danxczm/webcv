import React from 'react';

type SectionHeading = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeading) {
  return <h2 className="mb-8 text-center text-3xl font-medium capitalize">{children}</h2>;
}
