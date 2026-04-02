import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageHero, Section, Container, CheckList } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "For Lawyers and Law Firms",
  description:
    "Instruct the right counsel quickly and with certainty. Fast responses on availability, transparent fees, and seamless integration with your team.",
};

const expectations = [
  "Fast response on availability and turnaround",
  "Clear and transparent fee structures",
  "Guidance on the most suitable barrister for your matter",
  "Efficient fixing of hearings and case coordination",
  "Seamless integration with your team",
];

export default function LawyersPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="For Lawyers and Law Firms"
        subtitle="Professional Instruction"
        description="Instruct the right counsel. Quickly and with certainty."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  You need clear answers on availability, fees, and suitability.
                  You also need confidence that counsel understands the
                  commercial context, not just the law. I act as your first
                  point of contact and make the process straightforward.
                </p>

                <h2 className="font-heading text-2xl font-semibold text-gray-900">
                  What You Can Expect
                </h2>
                <CheckList items={expectations} />

                <div className="pt-4">
                  <p className="text-gray-700 leading-relaxed">
                    I understand the pressures you are under. Deadlines move.
                    Clients expect clarity. My role is to remove friction and
                    keep things moving.
                  </p>
                </div>

                <div className="pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    Get in touch to discuss your matter or check availability.
                  </p>
                </div>

                <div className="rounded-xl bg-cream border border-accent/20 p-6 space-y-3">
                  <h3 className="font-heading text-base font-semibold text-gray-900">
                    Standard Documents
                  </h3>
                  <p className="text-sm text-gray-700">
                    The following documents govern the terms on which barristers
                    provide legal services to authorised persons:
                  </p>
                  <div className="space-y-2">
                    <a
                      href="/Standard-Contractual-Terms-2020.pdf"
                      download
                      className="flex items-center space-x-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors"
                    >
                      <span>
                        The Standard Contractual Terms for the Supply of Legal
                        Services by Barristers to Authorised Persons 2020 (PDF)
                      </span>
                    </a>
                    <a
                      href="/Contractual-Terms-Explanation.pdf"
                      download
                      className="flex items-center space-x-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors"
                    >
                      <span>
                        Guide to Standard Conditions of Contract — Explanation
                        (PDF)
                      </span>
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-md"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-cream rounded-2xl p-6 lg:p-8 border border-accent/20">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Email</p>
                      <a
                        href="mailto:tyroon.win@barristersclerk.co.uk"
                        className="text-primary hover:text-primary-dark transition-colors break-all"
                      >
                        tyroon.win@barristersclerk.co.uk
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Phone</p>
                      <a
                        href="tel:02074302005"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        020 7430 2005
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Mobile</p>
                      <a
                        href="tel:07751022914"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        07751 022914
                      </a>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="font-medium text-gray-700 mb-1">
                        Office Hours
                      </p>
                      <p className="text-gray-600">Monday – Friday</p>
                      <p className="text-gray-600">9:00 AM – 6:00 PM</p>
                    </div>
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
