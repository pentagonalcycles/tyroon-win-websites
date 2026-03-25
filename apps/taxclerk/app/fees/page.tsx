import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { PageHero, Section, Container } from '@tyroon/shared';

export const metadata: Metadata = {
  title: 'Fees',
  description:
    'Transparent fee structures for tax barrister instruction. Written estimates provided upfront. Hourly and fixed fees available.',
};

const howFeesWork = [
  'Fees are typically based on barrister seniority and case complexity',
  'Hourly rates or fixed fees available depending on the work',
  'Written fee estimates provided before instruction',
  'Regular updates if circumstances change',
];

const whatAffectsFees = [
  'Complexity of the matter',
  'Seniority of barrister required',
  'Urgency and timeframes',
  'Amount of preparation needed',
  'Hearing length and location',
];

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fees"
        subtitle="Transparent Pricing"
        description="Clear, upfront information on tax barrister fees with no hidden charges."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Transparent Fee Structures
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe in complete transparency when it comes to fees. You will receive clear
                information about costs upfront, with no hidden charges.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                How Fees Work
              </h2>
              <ul className="space-y-3">
                {howFeesWork.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Typical Fee Range
              </h2>
              <p className="text-gray-600 mb-6">
                Specific fees depend on the barrister and matter. As a general guide:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { level: 'Junior Barristers', detail: 'Newer to the bar with focused expertise' },
                  { level: 'Experienced Barristers', detail: '5–10+ years in their specialism' },
                  { level: 'Leading Barristers', detail: 'QC/KC or highly senior barristers' },
                  { level: 'Fixed Fees', detail: 'Available for defined pieces of work' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center"
                  >
                    <p className="font-heading font-semibold text-primary mb-2">{item.level}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                * Specific fee quotes are provided before any instruction is confirmed.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                What Affects Fees
              </h2>
              <ul className="space-y-3">
                {whatAffectsFees.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent-light flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Get a Specific Fee Estimate
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Contact me with the details of your matter and I will provide a clear, written
                fee estimate before any work is undertaken.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-gray-900 font-semibold hover:bg-accent-dark transition-colors shadow-md"
              >
                Request a Fee Estimate
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
