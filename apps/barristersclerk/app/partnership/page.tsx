import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, Container, CheckList } from '@tyroon/shared';

export const metadata: Metadata = {
  title: 'Partnership & LLP Expertise',
  description:
    'Expert barristers specialising in partnership and LLP law—disputes, agreements, governance, exits, and more. All access routes: solicitor, licensed access, and public access.',
};

const keyAreas = [
  'Partner and member exits, including voluntary departures, forced removals, and compulsory retirements',
  'Team moves, lateral hires, and the transfer of key individuals between firms',
  'Valuation and distribution of partnership assets, including goodwill and property',
  'Drafting, reviewing, and interpreting partnership and LLP agreements, focusing on governance, commercial terms, and operational clarity',
  'Clarifying partner, member, or employee status where roles or rights are uncertain',
  'Governance and internal decision-making, including duties, approvals, and operational processes',
  'Claims of unfair prejudice or breaches of good-faith obligations',
  'Restrictive covenants, non-compete clauses, and garden leave arrangements',
  'Firm mergers, restructurings, and integration of partnerships',
  'Dissolution, winding-up, and preparation of accounts',
  'Insolvency matters affecting partnerships or LLPs',
  'Discrimination claims involving partners or members',
  'Regulatory compliance and representation, including SRA, Legal Ombudsman, and SDT matters',
];

const disputeAreas = [
  'Good-faith obligations and fiduciary duties',
  'Partner or member removals',
  'Restrictions on withdrawals and profit sharing',
  'Dissolution and winding-up matters',
  'Garden leave and post-termination restrictions',
  'Enforcement and defence of restrictive covenants',
];

const agreementHelp = [
  'Drafting new partnership agreements and retirement or exit agreements',
  'Preparing dissolution agreements',
  'Advising on salaried and fixed-share arrangements',
  'Updating existing agreements to reflect changing operational or legal requirements',
];

const llpSupport = [
  'Conversion from a traditional partnership to LLP status, including enabling provisions and members\' agreements',
  'Dispute resolution and governance within LLPs',
  'Profit extraction, restrictive covenants, and garden leave',
  'Ongoing review and updating of LLP agreements to meet regulatory and business needs',
];

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Partnership & LLP Expertise"
        subtitle="Practice Area"
        description="Connecting clients with barristers specialising in partnership and LLP law."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Intro */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tyroon Win works with clients to connect them with barristers specialising in
                partnership and LLP law. My barristers advise firms, partners, and members on
                governance, structural matters, and disputes, providing clear, practical guidance
                tailored to each client&apos;s needs.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Whether you are a solicitor, professional adviser, or member of the public using
                Public Access or Licensed Access, I can help you find the right barrister for your
                matter, explain their expertise, and guide you through the instruction process.
              </p>
            </div>

            {/* Key Areas */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Key Areas of Expertise
              </h2>
              <p className="text-gray-600 mb-6">My barristers regularly advise on:</p>
              <CheckList items={keyAreas} />
            </div>

            {/* Dispute Resolution */}
            <div className="bg-cream rounded-2xl p-8 border border-accent/20">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                My barristers aim to resolve disputes efficiently and constructively, helping
                clients avoid unnecessary litigation. When formal proceedings are required, they
                are experienced in court, arbitration, and mediation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                They take a hands-on approach, working with clients to understand both the legal
                and strategic issues behind a dispute. Acting for both firms and individual
                partners, they provide advice designed to prevent escalation, protect business
                operations, and deliver practical outcomes.
              </p>
              <h3 className="font-semibold text-gray-900 mb-4">Typical areas include:</h3>
              <CheckList items={disputeAreas} />
            </div>

            {/* Partnership Agreements */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Partnership and LLP Agreements
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                My barristers draft, review, and update agreements to reflect both the commercial
                realities of running a firm and the practical needs of partners and members.
                They can assist with:
              </p>
              <CheckList items={agreementHelp} className="mb-6" />

              <h3 className="font-semibold text-gray-900 mb-4">
                For LLPs specifically, my barristers support:
              </h3>
              <CheckList items={llpSupport} />
            </div>

            {/* How I Can Help */}
            <div className="bg-primary text-white rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold mb-4">How I Can Help You</h2>
              <p className="text-white/90 leading-relaxed mb-6">
                I guide clients through every step of the process, whether instructing via Public
                Access, Licensed Access, or through a solicitor. I ensure you are matched with the
                right barrister for your matter, provide clarity on fees and timing, and make the
                instruction process straightforward and efficient.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-gray-900 font-semibold hover:bg-accent-dark transition-colors shadow-md"
              >
                Contact Me to Discuss Your Matter
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
