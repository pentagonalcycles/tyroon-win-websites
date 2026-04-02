import React from "react";
import { Container } from "./Container";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white pt-28 pb-16 md:pt-32 md:pb-20">
      <Container>
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
              {subtitle}
            </p>
          )}
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight text-green-900">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
