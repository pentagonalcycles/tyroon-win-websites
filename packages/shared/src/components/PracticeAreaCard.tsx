import React from 'react';
import Link from 'next/link';
import { Scale, Calculator, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface PracticeAreaCardProps {
  title: string;
  description: string;
  href: string;
  iconName: 'scale' | 'calculator';
  className?: string;
}

const iconMap = {
  scale: Scale,
  calculator: Calculator,
};

export function PracticeAreaCard({
  title,
  description,
  href,
  iconName,
  className,
}: PracticeAreaCardProps) {
  const Icon = iconMap[iconName] ?? Scale;

  return (
    <Link
      href={href}
      className={cn(
        'group block bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100',
        'hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
        <div className="mt-5 flex items-center text-primary font-medium text-sm group-hover:text-primary-dark transition-colors">
          <span>Learn more</span>
          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
