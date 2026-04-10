import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, Container, CheckList } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Hong Kong Tax & Trusts",
  description:
    "Specialist advice on Hong Kong tax, trusts, estate planning, and cross-border disputes.",
};

const hongKongPersonal = [
  "Hong Kong personal tax planning for residents and expatriates",
  "Estate planning and succession advice within Hong Kong law",
  "Cross-border personal tax structuring and compliance",
  "Tax-efficient management of family wealth and trusts",
];

const hongKongCorporate = [
  "Corporate tax advisory, profit allocation, and director/shareholder remuneration",
  "Structuring and taxation of investment vehicles, funds, and LLPs operating across jurisdictions",
  "Cross-border tax planning integrating Hong Kong, UK, and other jurisdictions",
];

const hongKongTrusts = [
  "Advising on the creation, administration, and governance of trusts",
  "International and family trust structuring",
  "Tax-efficient estate planning for high-net-worth clients",
  "Trust-related succession and compliance matters",
];

const hongKongDisputes = [
  "Representation before the Hong Kong Inland Revenue Department and tax tribunals",
  "Handling complex cross-border disputes and tax investigations",
  "Strategic advice to minimise risk and protect assets",
];

export default function HongKongTaxTrustsPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Hong Kong Tax & Trusts"
        subtitle="Practice Area"
        description="Specialist advice for complex Hong Kong and cross-border tax and trust matters."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our barristers provide expert advice on complex Hong Kong and
                cross-border tax matters, trusts, and estate planning. They are
                regularly instructed by high-net-worth individuals,
                international businesses, and professional advisers requiring
                authoritative guidance on Hong Kong tax law and trust
                structures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-heading font-semibold text-primary mb-3">
                  Personal &amp; Private Client Tax
                </h3>
                <CheckList items={hongKongPersonal} />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-heading font-semibold text-primary mb-3">
                  Corporate &amp; Business Tax
                </h3>
                <CheckList items={hongKongCorporate} />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-heading font-semibold text-primary mb-3">
                  Trusts &amp; Estate Planning
                </h3>
                <CheckList items={hongKongTrusts} />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-heading font-semibold text-primary mb-3">
                  Dispute Resolution
                </h3>
                <CheckList items={hongKongDisputes} />
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed italic">
              Our barristers combine technical expertise with a practical,
              commercially focused approach, ensuring that transactions,
              structures, and dispute strategies are carefully tailored to your
              objectives.
            </p>

            <div className="bg-primary text-white rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Discuss a Hong Kong Tax or Trust Matter
              </h2>
              <p className="text-white/90 leading-relaxed mb-6">
                Contact us for an initial discussion and we will help identify
                the right barrister for your matter.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-gray-900 font-semibold hover:bg-accent-dark transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/tax"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Back to Tax
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
