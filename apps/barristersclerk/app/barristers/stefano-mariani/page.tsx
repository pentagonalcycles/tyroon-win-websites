import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowLeft, Quote } from "lucide-react";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Stefano Mariani – Tax Barrister",
  description:
    "Stefano Mariani brings advocacy experience, international insight, and technical depth to contentious tax cases, practising in England & Wales and Hong Kong.",
};

const stefanoAreas = [
  "Cross-border tax planning and international structuring",
  "Tax disputes and litigation, including tribunal advocacy",
  "Judicial review in tax matters and challenges to revenue decisions",
  "Tax investigations, audits, and negotiated settlements",
  "Stamp duties, VAT, and corporate tax issues",
  "Trusts, estate planning, and related disputes",
];

export default function StefanoMarianiPage() {
  return (
    <>
      <PageHero
        title="Stefano Mariani"
        subtitle="Tax Barrister"
        description="Combining advocacy experience, international insight, and technical depth—particularly valuable in contentious tax cases."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/barristers"
              className="inline-flex items-center space-x-2 text-sm text-primary hover:text-primary-dark transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>All Barristers</span>
            </Link>

            <div className="bg-cream rounded-2xl p-8 border border-accent/20 mb-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-primary mb-1">
                    Stefano Mariani
                  </h2>
                  <p className="text-sm font-medium text-gray-600">
                    Tax Barrister
                  </p>
                </div>
                <div className="shrink-0 ml-4">
                  <Image
                    src="/StefanoMariani.png"
                    alt="Stefano Mariani"
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
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
                <p>
                  His practice covers both advisory and contentious work. He is
                  regularly instructed on corporate and personal tax planning,
                  group restructurings, and international tax issues, as well as
                  disputes with revenue authorities. He has acted for clients at
                  all stages of tax litigation, including tribunal proceedings
                  and appeals before higher courts.
                </p>
                <p>
                  Alongside his practice, Stefano has a strong academic profile,
                  holding teaching positions in revenue law and contributing to
                  leading publications on tax and trusts. From a client
                  perspective, he is known for providing clear, decisive advice
                  and practical solutions.
                </p>
              </div>

              <div className="mt-6">
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
              </div>

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

            {/* What the Directories Say */}
            <div className="space-y-6 mb-10">
              <h2 className="font-heading text-2xl font-bold text-gray-900">
                What the Directories Say
              </h2>

              {/* Chambers Greater China 2022 */}
              <div className="bg-cream rounded-2xl p-6 border border-accent/20">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">
                  Chambers Greater China Region (2022)
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Stefano is able to provide advice about complex points of law.
                  Stefano has both the academic knowledge and the ability to
                  provide real life solutions to legal issues.
                </p>
              </div>

              {/* Legal 500 Asia Pacific 2022 — HK IRD */}
              <div className="bg-cream rounded-2xl p-6 border border-accent/20">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">
                  Legal 500 Asia Pacific (2022)
                </p>
                <div className="space-y-3">
                  <blockquote className="relative pl-5 border-l-2 border-accent text-gray-700 italic leading-relaxed">
                    <Quote className="absolute -left-1.5 -top-1 h-3 w-3 text-accent" />
                    Stefano Mariani&apos;s grasp of Hong Kong Inland Revenue
                    Department practice, attitudes and priorities is immensely
                    helpful.
                  </blockquote>
                  <blockquote className="relative pl-5 border-l-2 border-accent text-gray-700 italic leading-relaxed">
                    <Quote className="absolute -left-1.5 -top-1 h-3 w-3 text-accent" />
                    Stefano Mariani is an excellent Tax lawyer: highly
                    knowledgeable, confident, clear in his advice and decisive.
                  </blockquote>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-2xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Instruct Stefano Mariani
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Contact me to discuss whether Stefano Mariani is the right
                barrister for your matter. I will provide a no-obligation
                initial assessment.
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
