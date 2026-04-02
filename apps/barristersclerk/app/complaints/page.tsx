import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Complaints Information",
  description:
    "How to raise a complaint about our service. Step-by-step complaints procedure in line with BSB and Bar Council guidance.",
};

const steps = [
  {
    step: 1,
    title: "Raise Your Complaint",
    content:
      "If you are unhappy with any aspect of our service, raise your complaint as soon as possible. You may do this by telephone or in writing. You do not need to instruct a solicitor.",
  },
  {
    step: 2,
    title: "Informal Complaint (Telephone)",
    content:
      "You may call the barrister if the complaint is about Tyroon Win, or Tyroon Win if the complaint is about a barrister. We will record the details of your complaint, ask what outcome you want, and try to resolve the issue immediately.",
  },
  {
    step: 3,
    title: "Submit a Formal Written Complaint",
    content:
      "Provide your name and contact details, who you are complaining about, full details of the complaint, and the outcome you are seeking. Send to: tyroon.win@barristersclerk.co.uk",
  },
  {
    step: 4,
    title: "Acknowledgement",
    content:
      "Within 2 working days, where possible, we will acknowledge your complaint and confirm how it will be handled.",
  },
  {
    step: 5,
    title: "Allocation of Complaint",
    content:
      "Your complaint will be handled by the barrister or the Clerk / Practice Manager. The person complained about will not handle the complaint.",
  },
  {
    step: 6,
    title: "Investigation",
    content:
      "The person handling your complaint will confirm they are dealing with it, investigate the issues raised, and consider the outcome you are seeking. If any part of your complaint falls outside our process, you will be told in writing and directed to the appropriate body.",
  },
  {
    step: 7,
    title: "Response",
    content:
      "Within 14 days, you will receive a written response setting out the scope of the investigation, findings on each issue, reasons for those findings, and any proposed resolution. If more time is needed, you will be informed with a new deadline given.",
  },
  {
    step: 8,
    title: "Record Keeping and Confidentiality",
    content:
      "We will keep your complaint confidential, only disclosing information where necessary, and retain records for 6 years. We review anonymised complaints to improve services.",
  },
];

export default function ComplaintsPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Complaints Information"
        subtitle="Our Procedure"
        description="We follow the BSB and Bar Council's Complaints Procedures."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Intro */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take all complaints seriously and aim to resolve them quickly
                and fairly. Our complaints procedure follows the guidance issued
                by the Bar Standards Board and the Bar Council.
              </p>
              <a
                href="/First-tier-complaints-handling-guidance.pdf"
                download
                className="inline-flex items-center space-x-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors"
              >
                <span>
                  Download: First-Tier Complaints Handling Guidance (PDF, BSB)
                </span>
              </a>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.step} className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <span className="text-sm font-bold text-white">
                      {s.step}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-gray-900 mb-1">
                      Step {s.step}: {s.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{s.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* If not satisfied */}
            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">
                If You Are Not Satisfied
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you remain dissatisfied, you may refer your complaint to the
                Legal Ombudsman, if you are eligible. You must do so within 1
                year of the issue (or when you became aware of it), and within 6
                months of receiving our final response.
              </p>
              <h3 className="font-semibold text-gray-900 mb-2">
                Who can complain to the Legal Ombudsman?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Legal Ombudsman generally accepts complaints from
                individuals, small businesses (micro-enterprises), charities
                (income under £1 million), clubs or associations (income under
                £1 million), trustees of small trusts, and certain estate
                representatives or beneficiaries.
              </p>
              <h3 className="font-semibold text-gray-900 mb-2">
                Legal Ombudsman Contact
              </h3>
              <div className="text-gray-700 text-sm space-y-1">
                <p>PO Box 6167, Slough, SL1 0EH</p>
                <p>Telephone: 0300 555 0333</p>
                <p>Email: enquiries@legalombudsman.org.uk</p>
              </div>
            </div>

            {/* Non-client complaints */}
            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4">
                Non-Client Complaints
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                If you are not a client, you may not be eligible for the Legal
                Ombudsman. In that case, you should contact the Bar Standards
                Board.
              </p>
              <div className="text-gray-700 text-sm space-y-1">
                <p>Bar Standards Board</p>
                <p>289–293 High Holborn, London WC1V 7JZ</p>
                <p>Telephone: 020 7611 1444</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-2xl p-8">
              <h2 className="font-heading text-xl font-bold mb-4">
                Raise a Complaint
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                To raise a formal complaint, please contact us using the details
                below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-gray-900 font-semibold hover:bg-accent-dark transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:tyroon.win@barristersclerk.co.uk"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
