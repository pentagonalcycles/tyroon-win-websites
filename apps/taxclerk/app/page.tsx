import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, Smartphone } from 'lucide-react';
import {
  Hero,
  Section,
  Container,
  PracticeAreaCard,
  ClientTypeCTA,
  TestimonialCarousel,
  featuredTestimonials,
} from '@tyroon/shared';

export const metadata: Metadata = {
  title: 'Tyroon Win | Tax Clerk | Tax Appeals & Tribunal',
  description:
    'Over 20 years\' experience guiding solicitors, professionals, and the public to the right specialist tax barrister for HMRC disputes and First-tier Tribunal appeals.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        headline="Connecting You with the Right Barrister for Tax Matters"
        subheading="Over 20 years' experience guiding solicitors, professionals, and the public to the right specialist tax counsel—efficiently, clearly, and cost-effectively."
        ctas={[
          { label: 'Check Availability', href: '/lawyers', variant: 'primary' },
          { label: 'Speak to a Clerk', href: '/licensed-access', variant: 'secondary' },
          { label: 'Get a Fee Estimate', href: '/public-access', variant: 'outline' },
        ]}
        image="/images/tyroon-win.jpg"
      />

      {/* Who I Help */}
      <Section background="cream">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who I Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I work with solicitors, professional advisers, and members of the public to find
              the right specialist tax barrister for their needs.
            </p>
          </div>
          <ClientTypeCTA />
        </Container>
      </Section>

      {/* Practice Areas */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tax Appeals & Tribunal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialist tax barristers for HMRC disputes and First-tier Tribunal appeals.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <PracticeAreaCard
              title="Tax Appeals & First-tier Tribunal"
              description="When challenging an HMRC decision, precision preparation and experienced advocacy can determine the entire outcome. I connect you with the right specialist tax barrister."
              href="/tax"
              iconName="calculator"
            />
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="cream">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What the Directories Say
            </h2>
            <p className="text-gray-600">
              Recognised by leading legal directories for responsiveness and expertise.
            </p>
          </div>
          <TestimonialCarousel testimonials={featuredTestimonials} />
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section background="dark">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Discuss Your Matter
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Whether you are a lawyer, professional, or member of the public, I am happy to
              have an initial conversation to discuss your options and guide you to the right
              tax counsel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="/lawyers"
                className="text-sm font-medium text-accent hover:text-accent-light transition-colors underline underline-offset-4"
              >
                For Lawyers & Law Firms
              </Link>
              <span className="hidden sm:block text-white/30">|</span>
              <Link
                href="/licensed-access"
                className="text-sm font-medium text-accent hover:text-accent-light transition-colors underline underline-offset-4"
              >
                For Licensed Access
              </Link>
              <span className="hidden sm:block text-white/30">|</span>
              <Link
                href="/public-access"
                className="text-sm font-medium text-accent hover:text-accent-light transition-colors underline underline-offset-4"
              >
                For Members of the Public
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:tyroon.win@taxclerk.co.uk"
                className="flex items-center space-x-2 text-white/90 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>tyroon.win@taxclerk.co.uk</span>
              </a>
              <a
                href="tel:02031500002"
                className="flex items-center space-x-2 text-white/90 hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>020 3150 0002</span>
              </a>
              <a
                href="tel:07891929988"
                className="flex items-center space-x-2 text-white/90 hover:text-accent transition-colors"
              >
                <Smartphone className="h-5 w-5" />
                <span>07891 929988</span>
              </a>
            </div>
            <div className="mt-8">
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
