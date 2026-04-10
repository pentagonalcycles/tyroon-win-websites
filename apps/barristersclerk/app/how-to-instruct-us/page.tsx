import type { Metadata } from "next";
import { PageHero, Section, Container, CheckList } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "How to Instruct Us",
  description:
    "Guidance on how to instruct our barristers, including required information, compliance checks, fees, timescales, and terms of engagement.",
};

const initialReviewItems = [
  "Contact Details: Full name, telephone number, and email address.",
  "Opposing Party: The full name of the adversary (required for immediate conflict checks).",
  "Case Summary: A brief description of the legal issue, the current stage of proceedings, and your desired outcome.",
  "Key Deadlines: Any upcoming court dates or limitation periods.",
];

export default function HowToInstructUsPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="How to Instruct Us"
        subtitle="Guidance"
        description="A clear, structured process for instructing our barristers."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <p className="text-gray-700 leading-relaxed">
                The process for instructing our barristers is structured to
                ensure clarity and regulatory compliance from the outset.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Professional clients may submit instructions and supporting
                documentation via email or through the contact form on this
                website. For members of the public using the Public Access
                Scheme, we facilitate an initial assessment to determine if the
                matter is suitable for the Bar and how best to proceed.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                To Assist with Our Initial Review, Please Provide
              </h2>
              <CheckList items={initialReviewItems} />
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Compliance &amp; Identification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In accordance with professional regulations, all clients,
                including those instructed via professionals or through Public
                Access must provide formal identification and proof of address.
                These mandatory Know Your Customer (KYC) and Anti-Money
                Laundering checks must be completed before work can commence.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Fees &amp; Timescales
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Upon receipt of an enquiry and completion of conflict checks, we
                will provide a quotation (typically on a fixed-fee basis). We
                will also provide an estimated timescale for the work, which may
                be subject to change depending on the complexity of the matter
                or court availability.
              </p>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Terms of Engagement
              </h2>
              <p className="text-white/90 leading-relaxed mb-4">
                Instructions are accepted under the Standard Contractual Terms
                for professional clients, or a formal Letter of Engagement for
                Licensed and Public Access clients.
              </p>
              <p className="text-white/90 leading-relaxed">
                Your clerk remains your primary point of contact for fee
                negotiations, diary management, and case administration.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
