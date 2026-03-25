import React from 'react';
import { cn } from '../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'dark';
  id?: string;
}

const bgMap = {
  white: 'bg-white',
  cream: 'bg-cream',
  dark: 'bg-primary',
};

export function Section({ children, className, background = 'white', id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-20 lg:py-24', bgMap[background], className)}
    >
      {children}
    </section>
  );
}
