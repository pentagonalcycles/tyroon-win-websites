import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageHero, Section, Container, CheckList } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "For Members of the Public",
  description:
    "You may be able to instruct a tax barrister directly without a solicitor under the Public Access Scheme. Faster, more cost-effective, and straightforward.",
};

const whatIWillDo = [
  "Explain how Public Access works in simple terms",
  "Help you identify the right barrister for your situation",
  "Provide clear information on fees and next steps",
  "Ensure the process is straightforward and manageable",
];

export default function PublicAccessPage() {
  return (
    <>
      <PageHero
        title="For Members of the Public"
        subtitle="Public Access Scheme"
        description="Speak directly to a tax barrister where appropriate."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  In many cases, you can instruct a barrister without going
                  through a solicitor. This can be faster and more
                  cost-effective, particularly for advice or discrete pieces of
                  work.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I will guide you through whether this route is suitable for
                  you.
                </p>

                <h2 className="font-heading text-2xl font-semibold text-gray-900">
                  What I Will Do
                </h2>
                <CheckList items={whatIWillDo} />

                <div className="rounded-xl bg-cream border border-accent/20 p-6">
                  <p className="text-sm text-gray-700 mb-3">
                    Please see the following guidance on Public Access for lay
                    clients on the Bar Standards Board website:
                  </p>
                  <a
                    href="https://www.barstandardsboard.org.uk/for-the-public/going-to-court/public-access-guidance-for-lay-clients.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors"
                  >
                    <span>
                      Bar Standards Board Public Access Guidance for Lay Clients
                    </span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="rounded-xl bg-amber-50 border border-amber-200 p-5">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-amber-800">
                      Please note:{" "}
                    </span>
                    If your matter requires a solicitor, I will tell you early
                    and can suggest suitable options.
                  </p>
                </div>

                <p className="text-gray-700 font-medium">
                  Contact me for an initial discussion and next steps.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-md"
                  >
                    Get in Touch
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
                        href="mailto:tyroon.win@taxclerk.co.uk"
                        className="text-primary hover:text-primary-dark transition-colors break-all"
                      >
                        tyroon.win@taxclerk.co.uk
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Phone</p>
                      <a
                        href="tel:02031500002"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        020 3150 0002
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-1">Mobile</p>
                      <a
                        href="tel:07891929988"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        07891 929988
                      </a>
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
