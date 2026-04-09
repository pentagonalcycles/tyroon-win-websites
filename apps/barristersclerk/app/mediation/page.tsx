import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Scale, Clock, Lock, HandshakeIcon } from "lucide-react";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Mediation – Partnership & LLP Disputes",
  description:
    "Simon Jelf is a qualified mediator and specialist barrister in partnership and LLP disputes. He brings legal clarity and commercial focus to the mediation process.",
};

const disputeTypes = [
  "Professional partnerships, including solicitors, accountants, and medical practices",
  "Trading and family-run partnerships",
  "LLP member disputes",
];

const simonWillDo = [
  "Identify the key legal and commercial pressure points early",
  "Challenge unrealistic positions where needed",
  "Keep negotiations focused and efficient",
  "Help structure settlements that are practical and enforceable",
];

const expertise = [
  "Contested expulsions and retirements",
  "Profit share and capital disputes",
  "Fiduciary duties and misuse of partnership assets",
  "Restrictive covenants and post-exit competition",
];

const mediationAdvantages = [
  {
    icon: Scale,
    label: "Controlled costs",
    description: "compared to court proceedings",
  },
  {
    icon: Clock,
    label: "Faster resolution",
    description: "avoiding prolonged litigation timelines",
  },
  {
    icon: Lock,
    label: "Strict confidentiality",
    description: "protecting all parties throughout",
  },
  {
    icon: HandshakeIcon,
    label: "Greater control",
    description: "over the outcome and settlement terms",
  },
];

export default function MediationPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Mediation"
        subtitle="Dispute Resolution"
        description="A faster, confidential, and cost-effective route to resolving partnership and LLP disputes."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Intro */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Simon Jelf is a qualified mediator and a Specialist barrister in
                Partnership and LLP disputes. He has advised on partnership law
                since 1996 and previously worked with the Law Commission. This
                background combines technical depth with clear, practical
                judgement.
              </p>
            </div>

            {/* Dispute types */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Regularly Instructed In
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                He is regularly instructed in disputes involving:
              </p>
              <ul className="space-y-2">
                {disputeTypes.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                These disputes often involve breakdowns in trust, contested
                exits, financial disagreements, and reputational risk. As a
                Specialist barrister, Simon understands both the legal framework
                and the commercial drivers behind each position, and brings
                extensive experience representing parties in mediation.
              </p>
            </div>

            {/* Why instruct Simon */}
            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Why Instruct Simon as Mediator
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Simon acts as more than a neutral facilitator. As a Specialist
                barrister, he brings legal clarity and commercial focus to the
                mediation process.
              </p>
              <h3 className="font-semibold text-gray-900 mb-3">He will:</h3>
              <ul className="space-y-2 mb-6">
                {simonWillDo.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-gray-900 mb-3">
                His expertise includes:
              </h3>
              <ul className="space-y-2">
                {expertise.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* A better route */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                A Better Route Than Litigation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Mediation offers clear advantages:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {mediationAdvantages.map(
                  ({ icon: Icon, label, description }) => (
                    <div
                      key={label}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-cream border border-accent/20"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{label}</p>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                    </div>
                  ),
                )}
              </div>
              <p className="text-gray-700 leading-relaxed">
                It also allows parties to protect professional reputations and,
                where possible, preserve ongoing business relationships.
              </p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Approach
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Simon is calm, measured, and outcome-focused. As a Specialist
                barrister, he brings authority to the process while maintaining
                a constructive and pragmatic tone. His focus is on achieving
                resolutions that work in practice and stand up legally.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-2xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Next Steps
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                If you are facing a partnership or LLP dispute, early mediation
                can protect value and avoid escalation. To check availability or
                discuss your matter, get in touch.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-gray-900 font-semibold hover:bg-accent-dark transition-colors shadow-md"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
