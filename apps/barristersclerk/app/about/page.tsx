import type { Metadata } from "next";
import { PageHero, Section, Container, CheckList } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "About - The Barrister's Clerk",
  description:
    "The Barrister's Clerk is a dedicated clerical and practice management service supporting specialist barristers and clients.",
};

const services = [
  "Guidance and support: We help you understand how to instruct a barrister, making the process clear and manageable from your very first enquiry.",
  "Instruction management: We facilitate the path from initial contact to formal instruction, which includes performing necessary conflict checks to ensure the barrister is able to act for you.",
  "Fee administration: We provide transparent quotations, usually on a fixed-fee or hourly basis. We do not charge clients a fee for our services, and all payments for legal work are made directly to the barrister. We do not hold client money or accept payments for legal services on their behalf.",
  "Diary and case coordination: We oversee the barrister's schedule, coordinate court availability, and provide updates on timescales for your work.",
  "Compliance and identity checks: We assist barristers with the mandatory Know Your Customer (KYC) and identity, including Anti-Money Laundering checks that are required by law before work on a matter can begin.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="About"
        subtitle="The Barrister's Clerk"
        description="A dedicated clerical and practice management service for specialist barristers and their clients."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                About - The Barrister&apos;s Clerk
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Barrister&apos;s Clerk is a dedicated clerical and practice
                management service designed to support both specialist
                barristers and the clients who need them. We act as a
                professional bridge, helping solicitors, accountants,
                businesses, and members of the public connect with expert legal
                advocates and advisors.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our role is to manage the business and administrative side of
                the Bar. By handling these practical details, we allow
                barristers to focus entirely on their advisory and advocacy
                work. As a clerical consultancy, rather than a chambers or a law
                firm, we offer a flexible and modern way to access legal
                expertise that benefits the barrister, the professional, and
                ultimately, you the client.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                What We Do
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We provide the essential support that keeps a barrister&apos;s
                work moving forward, acting as your main point of contact for
                the administration of your case. Our services include:
              </p>
              <CheckList items={services} />
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Our Approach
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We understand that navigating these matters can sometimes feel
                overwhelming, so we aim to make our services as straightforward
                as possible. Whether you are a professional, such as a solicitor
                or an accountant seeking a specialist barrister for a client, or
                a member of the public looking for help through the Public
                Access Scheme, we provide a reliable, friendly, and professional
                service.
              </p>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold mb-4">
                A Note on Our Role
              </h2>
              <p className="text-white/90 leading-relaxed">
                The Barrister&apos;s Clerk provides administrative, marketing,
                and clerical support services. We are not barristers, a
                barrister&apos;s chambers or law firm and do not provide legal
                advice, and do not conduct litigation. We help you connect with
                a specialist barrister. The barristers featured on this site are
                independent, self-employed practitioners who are regulated by
                the Bar Standards Board.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
