'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '../lib/utils';
import type { Testimonial } from '../types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  interval = 6000,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  const t = testimonials[current];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="text-center px-8 md:px-12">
        {/* Large decorative quote mark */}
        <Quote className="h-12 w-12 text-accent mx-auto mb-6 opacity-60" />

        <blockquote className="text-xl md:text-2xl font-heading text-gray-800 leading-relaxed mb-6 italic">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <div className="flex items-center justify-center space-x-3">
          <div className="h-px w-12 bg-accent" />
          <div className="text-center">
            <p className="font-semibold text-primary">{t.source}</p>
            <p className="text-sm text-gray-500">{t.year}</p>
          </div>
          <div className="h-px w-12 bg-accent" />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center space-x-4 mt-8">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'transition-all duration-300 rounded-full',
                i === current
                  ? 'w-6 h-2 bg-primary'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
