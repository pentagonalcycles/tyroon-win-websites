import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { PageHero, Section, Container, CheckList, taxAppealsContent } from '@tyroon/shared';

export const metadata: Metadata = {
  title: 'Tax Appeals & Tribunal',
  description:
    'Specialist tax barrister representation in First-tier Tribunal appeals and HMRC disputes. Precision preparation and experienced advocacy for individuals, businesses, and advisers.',
};

export default function TaxPage() {
  const tc = taxAppealsContent;

  return (
    <>
      <PageHero
        darkHeading
        title={tc.title}
        subtitle="Practice Area"
        description="When challenging an HMRC decision, experienced representation makes all the difference."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              {tc.intro.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* How barristers help */}
            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                {tc.howBarristersHelp.heading}
              </h2>
              {tc.howBarristersHelp.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Services */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                {tc.keyServices.heading}
              </h2>
              <p className="text-gray-600 mb-6">{tc.keyServices.intro}</p>
              <CheckList items={tc.keyServices.items} className="mb-6" />

              {/* Tax types */}
              <div className="bg-accent-light/30 rounded-xl p-6 mb-4">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {tc.keyServices.taxTypes.heading}
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {tc.keyServices.taxTypes.items.map((tax, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm text-gray-700">{tax}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-700">{tc.keyServices.lateAppeals}</span>
              </div>
            </div>

            {/* Why work with us */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                {tc.whyChoose.heading}
              </h2>
              {tc.whyChoose.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold mb-4">Ready to Discuss Your Appeal?</h2>
              <p className="text-white/90 leading-relaxed mb-6">{tc.cta}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-gray-900 font-semibold hover:bg-accent-dark transition-colors shadow-md"
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
