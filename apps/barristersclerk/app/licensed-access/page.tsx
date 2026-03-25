import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { PageHero, Section, Container, CheckList } from '@tyroon/shared';

export const metadata: Metadata = {
  title: 'For Licensed Access Clients',
  description:
    'Direct access to specialist barristers for accountants and professional advisers under the Licensed Access Scheme—without unnecessary layers.',
};

const howIHelp = [
  'Match you with the right barrister for your issue',
  'Agree scope of work so you stay in control of cost',
  'Provide clear fee estimates upfront',
  'Coordinate timelines and deliverables',
  'Step in quickly for urgent matters',
];

export default function LicensedAccessPage() {
  return (
    <>
      <PageHero
        title="For Licensed Access Clients"
        subtitle="Accountants and Professionals"
        description="Direct access to specialist barristers, without unnecessary layers."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you are an accountant or professional adviser, you can instruct counsel
                  directly under the Licensed Access Scheme. This saves time and can reduce cost.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I will guide you through the process and ensure you get the right level of
                  support.
                </p>

                <h2 className="font-heading text-2xl font-semibold text-gray-900">How I Help</h2>
                <CheckList items={howIHelp} />

                <p className="text-gray-700 leading-relaxed">
                  If a solicitor is needed at any stage, I can recommend one suited to your
                  client and the issue.
                </p>

                <div className="rounded-xl bg-cream border border-accent/20 p-6">
                  <p className="text-sm text-gray-700 mb-3">
                    Please see the Bar Council information about Licensed Access here:
                  </p>
                  <a
                    href="https://www.barstandardsboard.org.uk/for-barristers/bsb-handbook-and-code-guidance/the-bsb-handbook/the-bsb-handbook-part-vb-responsibilities-of-bsb-regulated-persons-who-are-not-barristers/guidance-on-the-licensed-access-recognition-regulations.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors"
                  >
                    <span>Licensed Access Recognition Regulations</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <p className="text-gray-700 leading-relaxed font-medium">
                  Speak to me to explore whether Licensed Access is right for your matter.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-md"
                  >
                    Speak to Me
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-cream rounded-2xl p-6 lg:p-8 border border-accent/20">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Email</p>
                      <a
                        href="mailto:tyroon.win@barristersclerk.co.uk"
                        className="text-primary hover:text-primary-dark transition-colors break-all"
                      >
                        tyroon.win@barristersclerk.co.uk
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Phone</p>
                      <a
                        href="tel:02074302005"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        020 7430 2005
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Mobile</p>
                      <a
                        href="tel:07751022914"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        07751 022914
                      </a>
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
