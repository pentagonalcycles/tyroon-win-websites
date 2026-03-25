import React from 'react';
import Link from 'next/link';
import { Briefcase, Users, UserCheck, ArrowRight } from 'lucide-react';

interface ClientTypeItem {
  title: string;
  description: string;
  href: string;
  cta: string;
  iconName: 'briefcase' | 'users' | 'usercheck';
}

interface ClientTypeCTAProps {
  items?: ClientTypeItem[];
}

const defaultItems: ClientTypeItem[] = [
  {
    title: 'Lawyers & Law Firms',
    description:
      'Instruct counsel quickly. Get availability, fees, and turnaround upfront. I act as your first point of contact and make the process straightforward.',
    href: '/lawyers',
    cta: 'Check Availability',
    iconName: 'briefcase',
  },
  {
    title: 'Licensed Access Clients',
    description:
      'If you are an accountant or professional adviser, you can instruct counsel directly under the Licensed Access Scheme. This saves time and can reduce cost.',
    href: '/licensed-access',
    cta: 'Speak to a Clerk',
    iconName: 'usercheck',
  },
  {
    title: 'Members of the Public',
    description:
      'In many cases, you can instruct a barrister without going through a solicitor. This can be faster and more cost-effective for advice or discrete pieces of work.',
    href: '/public-access',
    cta: 'Get a Fee Estimate',
    iconName: 'users',
  },
];

const iconMap = {
  briefcase: Briefcase,
  users: Users,
  usercheck: UserCheck,
};

export function ClientTypeCTA({ items = defaultItems }: ClientTypeCTAProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {items.map((item) => {
        const Icon = iconMap[item.iconName];
        return (
          <div
            key={item.href}
            className="flex flex-col bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-5">
              {item.description}
            </p>
            <Link
              href={item.href}
              className="inline-flex items-center text-primary font-medium text-sm hover:text-primary-dark transition-colors group"
            >
              <span>{item.cta}</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
