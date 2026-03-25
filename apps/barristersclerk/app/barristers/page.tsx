import type { Metadata } from 'next';
import Link from 'next/link';
import { User } from 'lucide-react';
import { PageHero, Section, Container } from '@tyroon/shared';

export const metadata: Metadata = {
  title: 'Our Barristers',
  description:
    'A select group of experienced barristers specialising in partnership, LLP, and tax matters. Contact Tyroon Win to discuss barrister availability and suitability for your matter.',
};

export default function BarristersPage() {
  return (
    <>
      <PageHero
        title="Our Barristers"
        subtitle="Specialist Counsel"
        description="A select group of experienced barristers in partnership and tax matters."
      />

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                I work with a select group of experienced barristers who specialise in partnership
                and tax matters. Each barrister is chosen for their expertise, approachability,
                and track record of success.
              </p>
            </div>

            {/* Placeholder grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-primary/40" />
                  </div>
                  <p className="text-gray-500 text-sm mb-3">Barrister profile coming soon</p>
                  <Link
                    href="/contact"
                    className="text-xs text-primary font-medium hover:text-primary-dark transition-colors underline underline-offset-2"
                  >
                    Contact me to discuss availability
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-cream rounded-2xl p-8 text-center border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Discuss Which Barrister Is Right for Your Matter
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                I will match you with the most suitable barrister based on your specific matter,
                budget, and timeline. Contact me for a no-obligation initial discussion.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-md"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
