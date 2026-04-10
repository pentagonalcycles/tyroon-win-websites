import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import {
  PageHero,
  Section,
  Container,
  CheckList,
  taxAppealsContent,
} from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Tax",
  description:
    "Specialist tax barristers for UK and international tax matters — advisory, disputes, HMRC investigations, and tribunal advocacy.",
};

const privateClientTax = [
  "Personal tax planning and structuring for high-net-worth individuals",
  "Inheritance tax planning and estate optimisation",
  "Capital gains tax planning and disputes",
  "Tax-efficient investment structures, including EIS and VCT",
  "Residence, domicile, and cross-border personal tax issues",
];

const corporateTax = [
  "Corporation tax advisory and disputes",
  "Profit extraction and director/shareholder remuneration planning",
  "Employment-related tax matters, including IR35 compliance",
  "Research & Development tax relief",
  "Capital allowances and other business tax reliefs",
  "VAT and indirect taxation",
];

const partnershipTax = [
  "Tax treatment of partnerships, LLPs, and limited partnerships",
  "Partner and member taxation, including profit allocation and drawings",
  "Admission, retirement, and exit of partners or members",
  "Disguised remuneration and mixed membership rules",
  "Structuring and taxation of investment and fund vehicles",
  "Carried interest and performance-based returns",
  "Cross-border partnership and LLP tax issues",
];

const propertyTax = [
  "Stamp Duty Land Tax and other stamp duties",
  "Structuring high-value property transactions",
  "Business rates and property-related tax planning",
];

const internationalTax = [
  "International tax structuring and advisory",
  "Cross-border transactions and tax risk management",
  "Offshore structures and multi-jurisdictional tax issues",
];

const disputeTax = [
  "HMRC enquiries and investigations",
  "Tax appeals before the First-tier and Upper Tribunal",
  "Judicial review in tax matters",
  "High Court and appellate litigation",
  "Restitution claims against HMRC",
  "Disputes arising from failed or challenged tax schemes",
];

const specialistTax = [
  "Chancery-related tax matters, including insolvency, rectification, and mistake claims",
  "Professional negligence claims relating to tax advice",
  "Customs and excise duties",
];

export default function TaxPage() {
  const tc = taxAppealsContent;

  return (
    <>
      <PageHero
        darkHeading
        title={tc.title}
        subtitle="Practice Area"
        description="Specialist tax barristers for complex UK and international tax matters."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Intro */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                My tax barristers are instructed on complex and high-value tax
                matters, often where significant financial exposure or
                reputational risk is involved. I work with individuals,
                businesses, and professional advisers to ensure the right
                barrister is identified quickly and instructed efficiently.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                They provide clear, strategic advice across both advisory and
                contentious matters, including disputes with HMRC, tax
                investigations, and tribunal or court proceedings. Early advice
                is often critical — proper structuring and careful analysis at
                the outset can prevent issues escalating into disputes or
                falling within anti-avoidance regimes.
              </p>
            </div>

            {/* How barristers help */}
            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                How My Tax Barristers Can Support You
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                When disputes arise with HMRC, having specialist guidance can
                make a real difference to the outcome. My barristers provide
                expert advice at every stage of the appeal process, working with
                individuals, businesses, and professional advisers to manage the
                matter efficiently and effectively.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I can connect you with a barrister who will guide your appeal
                from start to finish, providing clear advice, practical support,
                and confidence throughout the process — whether you are
                instructing via Direct/Public Access, Licensed Access, or
                through a solicitor.
              </p>
            </div>

            {/* Why work with us */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Why Work with My Barristers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                My barristers combine technical expertise with practical advice.
                They focus on helping clients understand the process, evaluate
                options, and act confidently at each stage. Whether you are a
                professional adviser, solicitor, or a member of the public, I
                can guide you to the barrister best suited to your needs and
                make the instruction process straightforward.
              </p>
            </div>

            {/* Tax Specialist Areas */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Tax Specialist Areas
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-heading font-semibold text-primary mb-3">
                    Private Client &amp; Personal Tax
                  </h3>
                  <CheckList items={privateClientTax} />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-heading font-semibold text-primary mb-3">
                    Corporate &amp; Business Tax
                  </h3>
                  <CheckList items={corporateTax} />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-heading font-semibold text-primary mb-3">
                    Partnership, LLP &amp; Fund Tax
                  </h3>
                  <CheckList items={partnershipTax} />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-heading font-semibold text-primary mb-3">
                    Property &amp; Transactional Taxes
                  </h3>
                  <CheckList items={propertyTax} />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-heading font-semibold text-primary mb-3">
                    International &amp; Cross-Border Tax
                  </h3>
                  <CheckList items={internationalTax} />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-heading font-semibold text-primary mb-3">
                    Tax Disputes &amp; Investigations
                  </h3>
                  <CheckList items={disputeTax} />
                </div>
              </div>

              <div className="bg-accent-light/30 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-primary mb-3">
                  Specialist &amp; Related Areas
                </h3>
                <CheckList items={specialistTax} />
              </div>
            </div>

            {/* UK Tax Appeals */}
            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                UK Tax Appeals &amp; Tribunal
              </h2>
              {tc.howBarristersHelp.body.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-gray-700 leading-relaxed mb-3 last:mb-0"
                >
                  {para}
                </p>
              ))}
              <div className="mt-4">
                <CheckList items={tc.keyServices.items} />
              </div>
              <div className="mt-4 flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">
                  {tc.keyServices.lateAppeals}
                </span>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Hong Kong Tax &amp; Trusts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For Hong Kong tax and trusts matters, including cross-border
                structuring and disputes, see our dedicated page.
              </p>
              <Link
                href="/hong-kong-tax-trusts"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
              >
                View Hong Kong Tax &amp; Trusts
              </Link>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Ready to Discuss Your Tax Matter?
              </h2>
              <p className="text-white/90 leading-relaxed mb-6">
                I can help you identify the right barrister for your matter,
                provide clarity on fees, and ensure the instruction process is
                smooth and efficient. Get in touch to discuss your matter.
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
