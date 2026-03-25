import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../lib/utils';

interface HeroCta {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
}

interface HeroProps {
  headline: string;
  subheading: string;
  ctas: HeroCta[];
  image?: string;
  imageAlt?: string;
}

const ctaStyles = {
  primary:
    'bg-primary text-white hover:bg-primary-dark border-2 border-primary hover:border-primary-dark shadow-md',
  secondary: 'bg-accent text-gray-900 hover:bg-accent-dark border-2 border-accent shadow-md',
  outline:
    'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
};

export function Hero({ headline, subheading, ctas, image, imageAlt = 'Tyroon Win' }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-white via-cream to-accent-light/20 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/5" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-accent-light/50 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-primary">
                20+ Years of Legal Expertise
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-tight mb-6">
              {headline}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              {subheading}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {ctas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={cn(
                    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200',
                    ctaStyles[cta.variant]
                  )}
                >
                  {cta.label}
                </Link>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-medium">
                As featured in
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded">
                  Chambers UK
                </span>
                <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded">
                  Legal 500
                </span>
                <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded">
                  Chambers & Partners
                </span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                {image ? (
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-heading font-bold text-primary">TW</span>
                      </div>
                      <p className="text-primary font-medium">Tyroon Win</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
