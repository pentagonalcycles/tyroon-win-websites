import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { PageHero, Section, Container, ContactForm } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Collaboration opportunities for freelance clerks and barristers. Professional clerking for specialist barristers in partnership and tax law.",
};

const clerkPoints = [
  "Retain full control: you remain the primary point of contact for your barristers, managing all fee negotiations, diary commitments, and professional undertakings",
  "Regulatory compliance: our flat-fee structure is designed to be fully compliant with BSB Rule rC10 — payments are for marketing and administrative services only",
  "Direct instruction: all enquiries generated via the platform are directed to you, ensuring your established relationship with the barrister remains the foundation of the instruction",
];

const barristerPoints = [
  "Instruction management: facilitating the path from initial enquiry to formal instruction",
  "Fee administration: assisting with quotes and invoicing in accordance with BSB-compliant payment protocols",
  "Client liaison: assisting with client contact, allowing you to remain focused on your advisory and advocacy work",
];

const benefits = [
  "Professional practice management",
  "Diary and hearing management",
  "Client relationship management",
  "Fee negotiation and billing",
  "Business development support",
  "20+ years of sector experience",
  "Extensive solicitor and professional network",
];

export default function WorkWithUsPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Work With Us"
        subtitle="Collaboration"
        description="Professional clerking for specialist barristers, and partnership opportunities for freelance clerks."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* For Freelance Clerks */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                For Freelance Clerks
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a freelance clerk looking to expand visibility for
                your specialist sole practitioner barristers, this platform
                provides an additional route to market.
              </p>
              <p className="font-semibold text-gray-900 mb-4">
                Our Collaboration Model:
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We operate on a transparent, flat-fee service basis. This
                ensures that you maintain full professional autonomy while your
                barristers benefit from increased digital reach.
              </p>
              <ul className="space-y-3 mb-6">
                {clerkPoints.map((point, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Inquire about collaboration and arrange a call to explore how
                this can work for you.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* For Barristers & Sole Practitioners */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                For Barristers &amp; Sole Practitioners
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a specialist barrister and a sole practitioner
                seeking market exposure and an additional route to instructions,
                I provide bespoke practice management and clerical support.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I assist in promoting your expertise and managing initial
                enquiries, ensuring that potential clients are directed
                appropriately and that the onboarding process is handled
                efficiently.
              </p>
              <ul className="space-y-3 mb-6">
                {barristerPoints.map((point, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Independence & Compliance */}
            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Independence &amp; Compliance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any arrangement will be documented under a clear written
                agreement, setting out the scope of services and fee structure.
                This ensures full transparency and maintains the professional
                independence of your practice in compliance with the BSB
                Handbook and the Legal Services Act.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Inquire about collaboration and arrange a call to explore how
                this can work for you.
              </p>
            </div>

            {/* Benefits for Barristers */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Benefits of Working Together
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-primary text-white rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-white/80 mb-6">
                To discuss working together, please complete the form below or
                contact me directly.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ContactForm site="barristersclerk" />
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="font-heading font-semibold mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-3 text-sm">
                    <p>
                      <span className="font-medium">Email: </span>
                      <a
                        href="mailto:tyroon.win@barristersclerk.co.uk"
                        className="text-accent hover:text-white"
                      >
                        tyroon.win@barristersclerk.co.uk
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Phone: </span>
                      <a
                        href="tel:02074302005"
                        className="text-accent hover:text-white"
                      >
                        020 7430 2005
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Mobile: </span>
                      <a
                        href="tel:07751022914"
                        className="text-accent hover:text-white"
                      >
                        07751 022914
                      </a>
                    </p>
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
