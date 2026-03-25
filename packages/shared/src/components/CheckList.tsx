import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface CheckListProps {
  items: string[];
  className?: string;
}

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start space-x-3">
          <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <span className="text-gray-700 leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  );
}
