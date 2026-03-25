import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';
import { PageHero, Section, Container, ContactForm } from '@tyroon/shared';

export const metadata: Metadata = {
  title: 'Work With Us',
  description:
    'Are you a tax barrister looking for professional clerking? Tyroon Win offers comprehensive practice management support for barristers specialising in tax.',
};

const benefits = [
  'Professional practice management',
  'Diary and hearing management',
  'Client relationship management',
  'Fee negotiation and billing',
  'Business development support',
  '20+ years of sector experience',
  'Extensive solicitor and professional network',
];

const whatIOffer = [
  {
    title: 'Full Practice Management',
    description:
      'Complete support including diary management, fixing hearings, and case coordination.',
  },
  {
    title: 'Flexible Arrangements',
    description: 'Arrangements tailored to your needs, whether full-time or on a consultancy basis.',
  },
  {
    title: 'Established Client Relationships',
    description: 'Access to an established network of solicitors, law firms, and professional advisers.',
  },
  {
    title: 'Strategic Business Development',
    description: 'Proactive marketing and client development support to grow your tax practice.',
  },
];

export default function WorkWithUsPage() {
  return (
    <>
      <PageHero
        title="Work With Us"
        subtitle="For Tax Barristers"
        description="Are you a tax barrister looking for professional clerking?"
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Professional Clerking for Tax Barristers
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I provide comprehensive clerking services for barristers specialising in tax
                law and HMRC disputes. My approach is proactive, responsive, and commercially
                focused.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                What I Offer
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whatIOffer.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                  >
                    <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Current Opportunities
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I am currently looking to work with tax barristers at all levels of seniority.
                If you specialise in HMRC disputes, tax tribunal work, or advisory tax matters
                and are looking for more effective representation, I would be delighted to
                discuss how we might work together.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                To discuss working together, please complete the form below or contact me directly.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-3">
                  <ContactForm site="taxclerk" />
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-cream rounded-2xl p-6 border border-accent/20">
                    <h3 className="font-heading font-semibold text-primary mb-4">Direct Contact</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Email: </span>
                        <a
                          href="mailto:tyroon.win@taxclerk.co.uk"
                          className="text-primary hover:text-primary-dark break-all"
                        >
                          tyroon.win@taxclerk.co.uk
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">Phone: </span>
                        <a href="tel:02031500002" className="text-primary hover:text-primary-dark">
                          020 3150 0002
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">Mobile: </span>
                        <a href="tel:07891929988" className="text-primary hover:text-primary-dark">
                          07891 929988
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
