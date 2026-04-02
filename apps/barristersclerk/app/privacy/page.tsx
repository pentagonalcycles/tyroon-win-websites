import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy notice for barristersclerk.co.uk — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Privacy Policy"
        subtitle="Legal"
        description="How we collect, use, and protect your personal information."
      />

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                1. Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This notice explains how the Barrister&apos;s Clerk handles your
                personal data. We take your privacy seriously and apply
                appropriate safeguards to protect the information you provide.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                This notice applies when you contact us, instruct us, or use our
                website. By doing so, you accept how we process your data as set
                out below.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                2. What Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We only collect personal data that you choose to provide. This
                usually arises when you make an enquiry or communicate with us.
                The information may include your full name, email address, and
                telephone number. We do not collect unnecessary data.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use your data for clear and limited purposes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold">—</span>
                  <span className="text-gray-700">
                    <strong>Managing enquiries and instructions:</strong> to
                    respond to your queries and facilitate legal services.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold">—</span>
                  <span className="text-gray-700">
                    <strong>Client communication:</strong> to send updates
                    relevant to your matter or our services.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold">—</span>
                  <span className="text-gray-700">
                    <strong>Improving our website and services:</strong> to
                    understand how users interact with our website and improve
                    performance.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                We do not use your data for unrelated purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                4. Use of External Service Providers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may rely on third-party providers to support our website and
                marketing activities. These may include analytics providers to
                assess website usage and advertising platforms to manage
                campaigns. These providers act under their own privacy terms.
                You should review their policies to understand how they handle
                your data.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                5. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We retain personal data only for as long as necessary.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold">—</span>
                  <span className="text-gray-700">
                    Enquiry data is typically held for up to 30 days.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold">—</span>
                  <span className="text-gray-700">
                    We may retain data for longer where required for legal,
                    regulatory, or professional obligations.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                We review retention regularly and delete data when no longer
                needed.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                6. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We apply appropriate technical and organisational measures to
                protect your data, including safeguards against unauthorised
                access, loss, or misuse. However, internet transmissions carry
                inherent risks and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                7. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Under UK data protection law, including the UK GDPR, you have
                the right to:
              </p>
              <ul className="space-y-2 mb-3">
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold">—</span>
                  <span className="text-gray-700">
                    Request access to your personal data
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold">—</span>
                  <span className="text-gray-700">
                    Request correction of inaccurate information
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold">—</span>
                  <span className="text-gray-700">
                    Request deletion of your data where appropriate
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold">—</span>
                  <span className="text-gray-700">
                    Object to or restrict processing in certain circumstances
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent font-bold">—</span>
                  <span className="text-gray-700">
                    Withdraw consent where processing relies on consent
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                8. Children&apos;s Data
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed at children. We do not knowingly
                collect data from individuals under 13.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                9. Changes to This Notice
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this notice from time to time to reflect changes
                in law or practice. The latest version will always be available
                on our website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                10. Contact Details
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                If you have any questions or wish to exercise your rights,
                please contact:
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
                  href="/terms"
                  className="text-primary hover:underline font-medium"
                >
                  Terms &amp; Conditions
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
