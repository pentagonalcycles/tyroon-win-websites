import type { Metadata } from 'next';
import { PageHero, Section, Container } from '@tyroon/shared';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for barristersclerk.co.uk — how we collect, use, and protect your personal data under GDPR.',
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
          <div className="max-w-3xl mx-auto prose prose-gray prose-headings:font-heading prose-a:text-primary">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Last Updated:</strong> March 2026
            </p>

            <h2>1. Data Controller</h2>
            <p>
              The data controller for this website is Tyroon Win, operating as a barristers&apos;
              clerk.
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:tyroon.win@barristersclerk.co.uk">
                tyroon.win@barristersclerk.co.uk
              </a>
            </p>

            <h2>2. What Data We Collect</h2>
            <p>We may collect the following personal information:</p>
            <ul>
              <li>Name and contact details (email address, phone number)</li>
              <li>Information about your legal matter provided in contact forms</li>
              <li>Technical data such as IP address and browser information (via server logs)</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Respond to your enquiries about barrister instruction</li>
              <li>Provide information about our services</li>
              <li>Fulfil any contractual obligations where instruction proceeds</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data under the following legal bases:</p>
            <ul>
              <li>
                <strong>Legitimate interests</strong> – to respond to enquiries and manage our
                business relationships
              </li>
              <li>
                <strong>Contract performance</strong> – when instructed, to deliver clerking
                services
              </li>
              <li>
                <strong>Legal obligation</strong> – where required by law or regulatory bodies
              </li>
              <li>
                <strong>Consent</strong> – where you have provided explicit consent
              </li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary for the purposes described
              above:
            </p>
            <ul>
              <li>
                Enquiry data where no instruction follows: deleted after 12 months unless you
                have consented to ongoing contact
              </li>
              <li>
                Client matter data: retained for 6 years from the end of the matter, in line
                with legal professional obligations
              </li>
            </ul>

            <h2>6. Your Rights Under GDPR</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>
                <strong>Access</strong> the personal data we hold about you
              </li>
              <li>
                <strong>Rectification</strong> of inaccurate data
              </li>
              <li>
                <strong>Erasure</strong> (&ldquo;right to be forgotten&rdquo;) in certain
                circumstances
              </li>
              <li>
                <strong>Restriction</strong> of processing in certain circumstances
              </li>
              <li>
                <strong>Data portability</strong> for data you have provided
              </li>
              <li>
                <strong>Object</strong> to processing based on legitimate interests
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:tyroon.win@barristersclerk.co.uk">
                tyroon.win@barristersclerk.co.uk
              </a>
              .
            </p>

            <h2>7. Cookies</h2>
            <p>
              This website uses minimal cookies necessary for the website to function correctly.
              We do not use tracking or advertising cookies. If this changes, we will update
              this policy and seek your consent where required.
            </p>

            <h2>8. Third Parties</h2>
            <p>
              We do not sell your personal data to third parties. We may share data with service
              providers who assist in operating this website (such as hosting providers), under
              strict data processing agreements.
            </p>

            <h2>9. Security</h2>
            <p>
              We take appropriate technical and organisational measures to protect your personal
              data against unauthorised access, alteration, disclosure, or destruction.
            </p>

            <h2>10. Complaints</h2>
            <p>
              If you have concerns about how we handle your personal data, you have the right
              to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>
              .
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted
              on this page with an updated revision date.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
