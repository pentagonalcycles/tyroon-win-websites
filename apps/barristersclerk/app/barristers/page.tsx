import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Our Barristers",
  description:
    "Experienced barristers in partnership, LLP, and tax law. Simon Jelf and Stefano Mariani offer specialist expertise for your matter.",
};

const simonAreas = [
  "Drafting, reviewing, and interpreting bespoke partnership and LLP agreements",
  "Partner exits, expulsions, and retirements",
  "Restrictive covenants and post-termination arrangements",
  "Governance, decision-making, and internal processes",
  "Unfair prejudice and breach of good-faith claims",
  "NHS medical partnership governance and disputes",
];

const stefanoAreas = [
  "Cross-border tax planning and international structuring",
  "Tax disputes and litigation, including tribunal advocacy",
  "Judicial review in tax matters and challenges to revenue decisions",
  "Tax investigations, audits, and negotiated settlements",
  "Stamp duties, VAT, and corporate tax issues",
  "Trusts, estate planning, and related disputes",
];

export default function BarristersPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Our Barristers"
        subtitle="Specialist Counsel"
        description="A select group of experienced barristers in partnership, LLP, and tax matters."
      />

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                I work with a select group of experienced barristers who
                specialise in partnership and tax matters. Each barrister is
                chosen for their expertise, approachability, and track record of
                success.
              </p>
            </div>

            <div className="space-y-12 mb-16">
              {/* Simon Jelf */}
              <div className="bg-cream rounded-2xl p-8 border border-accent/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-primary mb-1">
                      Simon Jelf
                    </h2>
                    <p className="text-sm font-medium text-gray-600">
                      Partnership &amp; LLP Barrister
                    </p>
                  </div>
                  <div className="shrink-0 ml-4">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary/40">
                        SJ
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Simon Jelf is a leading barrister specialising in partnership
                  and LLP law, trusted by professional firms, high-value
                  partnerships, and individual partners for complex, high-stakes
                  matters. He advises a broad spectrum of clients, including
                  solicitors, accountants, medical professionals, and other
                  businesses operating through partnerships or LLPs. He is
                  particularly renowned for his work with NHS medical
                  partnerships, where governance, financial arrangements, and
                  partner relationships require specialist insight.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Called to the Bar in 1996, Simon spent two years at the Law
                  Commission reviewing partnership law, giving him an
                  exceptional technical foundation. He joined a leading
                  specialist chambers in 1999 and has devoted his career to
                  partnership law, combining deep expertise with strategic
                  insight. He is a member of the Association of Partnership
                  Practitioners.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  His practice combines advisory and contentious work. He
                  focuses on resolving matters efficiently through negotiation
                  or mediation wherever possible. When litigation is
                  unavoidable, he provides robust, clear, and strategic
                  representation. Clients value his ability to quickly identify
                  key issues and provide practical, outcome-driven advice.
                </p>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Areas of expertise include:
                </h3>
                <ul className="space-y-2">
                  {simonAreas.map((area, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{area}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Regulated by the Bar Standards Board.{" "}
                    <a
                      href="https://www.barstandardsboard.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Verify on the Barristers&apos; Register
                    </a>
                  </p>
                </div>
              </div>

              {/* Stefano Mariani */}
              <div className="bg-cream rounded-2xl p-8 border border-accent/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-primary mb-1">
                      Stefano Mariani
                    </h2>
                    <p className="text-sm font-medium text-gray-600">
                      Tax Barrister
                    </p>
                  </div>
                  <div className="shrink-0 ml-4">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary/40">
                        SM
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Stefano Mariani brings a combination of advocacy experience,
                  international insight, and technical depth that is
                  particularly valuable in contentious tax cases. He is
                  qualified as a barrister in England and Wales and also
                  practises as a solicitor-advocate in Hong Kong, giving him a
                  strong understanding of both UK and international tax
                  frameworks. He divides his practice between the UK and Asia,
                  advising clients on matters that often span multiple
                  jurisdictions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  His practice covers both advisory and contentious work. He is
                  regularly instructed on corporate and personal tax planning,
                  group restructurings, and international tax issues, as well as
                  disputes with revenue authorities. He has acted for clients at
                  all stages of tax litigation, including tribunal proceedings
                  and appeals before higher courts.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Alongside his practice, Stefano has a strong academic profile,
                  holding teaching positions in revenue law and contributing to
                  leading publications on tax and trusts. From a client
                  perspective, he is known for providing clear, decisive advice
                  and practical solutions.
                </p>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Areas of expertise include:
                </h3>
                <ul className="space-y-2">
                  {stefanoAreas.map((area, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{area}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Regulated by the Bar Standards Board.{" "}
                    <a
                      href="https://www.barstandardsboard.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Verify on the Barristers&apos; Register
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-2xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Discuss Which Barrister Is Right for Your Matter
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                I will match you with the most suitable barrister based on your
                specific matter, budget, and timeline. Contact me for a
                no-obligation initial discussion.
              </p>
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
