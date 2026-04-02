import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing all enquiries and instructions managed by the Barrister's Clerk.",
};

const sections = [
  {
    title: "1. Overview",
    items: [
      "All work is subject to these terms unless alternative arrangements are agreed in writing.",
      "Before work begins, you will receive a client care letter outlining the scope, fees, and terms.",
      "A binding contract is formed once you accept the client care letter and payment is received.",
    ],
  },
  {
    title: "2. Information Requirements",
    items: [
      "To process your enquiry, you must provide accurate and complete information, including full name and contact details, details of your matter, and relevant documents.",
      "We only collect necessary information. Insufficient information may prevent the enquiry from progressing.",
      "All personal data is handled in accordance with our Privacy Policy.",
    ],
  },
  {
    title: "3. Scope of Work",
    items: [
      "Work is limited to what is agreed in the client care letter.",
      "Additional work requires a new written agreement.",
      "No ongoing obligations exist after the agreed work is completed.",
    ],
  },
  {
    title: "4. Fees and Payment",
    items: [
      "Fees are clearly set out in the client care letter.",
      "Payment is required before work begins, unless otherwise agreed.",
      "Fees apply only to the agreed scope; extra work is charged separately.",
      "Work may be suspended if payment is not received.",
      "Interest may be charged at up to 4% above the Bank of England base rate on late payments.",
    ],
  },
  {
    title: "5. Cancellation and Refunds",
    items: [
      "Fees may still be payable for work already completed.",
      "A reasonable fee may apply for preparatory work or time reserved.",
      "Refunds are at the barrister's discretion; once work is completed, fees are non-refundable.",
    ],
  },
  {
    title: "6. Hearings",
    items: [
      "You must provide the court with the correct contact details for your barrister.",
      "You remain responsible for complying with court deadlines unless agreed otherwise.",
    ],
  },
  {
    title: "7. Further Work",
    items: [
      "A new client care letter will be issued for additional work.",
      "The barrister's availability cannot be guaranteed.",
    ],
  },
  {
    title: "8. Limitation of Role",
    items: [
      "The Barrister's Clerk provides administrative and coordination support only.",
      "Legal advice and representation are provided by the barrister.",
      "The barrister is solely responsible for the legal services delivered.",
    ],
  },
  {
    title: "9. Liability",
    items: [
      "Professional indemnity insurance is maintained in line with regulatory requirements.",
      "Liability is limited to the level of cover in place at the time of instruction.",
      "No liability is accepted for indirect or consequential losses, including loss of profits or opportunity.",
    ],
  },
  {
    title: "10. Regulatory Position",
    items: [
      "Barristers are regulated by the Bar Standards Board.",
      "Public or Direct Access instructions do not include legal aid. Raise any legal aid queries at the outset.",
    ],
  },
  {
    title: "11. Data Protection",
    items: [
      "Personal data is handled in accordance with our Privacy Policy.",
      "Data is used only to manage enquiries, provide legal services, and meet legal or regulatory obligations.",
    ],
  },
  {
    title: "12. Complaints",
    content:
      "If you are dissatisfied with any aspect of the service, please consult our Complaints Information page or raise a concern by contacting us directly.",
  },
  {
    title: "13. Changes to These Terms",
    items: [
      "Terms may be updated periodically.",
      "The version in effect at the time of your instruction applies to your matter.",
    ],
  },
  {
    title: "14. Governing Law and Jurisdiction",
    items: [
      "England and Wales matters: governed by the laws of England and Wales.",
      "Hong Kong matters: governed by the laws of the Hong Kong Special Administrative Region.",
      "Hong Kong disputes: subject to the rules and procedures of the Hong Kong International Arbitration Centre (HKIAC).",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Terms & Conditions"
        subtitle="Legal"
        description="These Terms and Conditions apply to all enquiries and instructions managed by the Barrister's Clerk."
      />

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Welcome to the Barrister&apos;s Clerk website. These Terms and
                Conditions apply to all enquiries and instructions managed by
                the Barrister&apos;s Clerk. They should be read alongside our
                Privacy Policy.
              </p>
            </div>

            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                )}
                {section.items && (
                  <ul className="mt-2 space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <span className="text-accent font-bold mt-0.5">—</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="font-heading text-lg font-bold text-gray-900 mb-3">
                15. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Questions about these terms can be directed to:
              </p>
              <div className="text-gray-700 text-sm space-y-1">
                <p>Email: tyroon.win@barristersclerk.co.uk</p>
                <p>Phone: 020 7430 2005</p>
              </div>
            </div>

            {/* Related links */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-heading font-semibold text-gray-900 mb-3">
                Related Documents
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/privacy"
                  className="text-primary hover:underline font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-primary hover:underline font-medium"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/complaints"
                  className="text-primary hover:underline font-medium"
                >
                  Complaints Information
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
