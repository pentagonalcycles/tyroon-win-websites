import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowLeft, Quote } from "lucide-react";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Simon Jelf – Partnership & LLP Barrister",
  description:
    "Simon Jelf is a leading barrister specialising in partnership and LLP law, trusted by professional firms, high-value partnerships, and individual partners for complex, high-stakes matters.",
};

const simonAreas = [
  "Drafting, reviewing, and interpreting bespoke partnership and LLP agreements",
  "Partner exits, expulsions, and retirements",
  "Restrictive covenants and post-termination arrangements",
  "Governance, decision-making, and internal processes",
  "Unfair prejudice and breach of good-faith claims",
  "NHS medical partnership governance and disputes",
];

export default function SimonJelfPage() {
  return (
    <>
      <PageHero
        title="Simon Jelf"
        subtitle="Partnership & LLP Barrister"
        description="Leading barrister specialising in partnership and LLP law, trusted by professional firms, high-value partnerships, and individual partners."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/barristers"
              className="inline-flex items-center space-x-2 text-sm text-primary hover:text-primary-dark transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>All Barristers</span>
            </Link>

            <div className="bg-cream rounded-2xl p-8 border border-accent/20 mb-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-primary mb-1">
                    Simon Jelf
                  </h2>
                  <p className="text-sm font-medium text-gray-600">
                    Partnership &amp; LLP Barrister
                  </p>
                </div>
                <div className="shrink-0 ml-4">
                  <Image
                    src="/SimonJelf.jpg"
                    alt="Simon Jelf"
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Simon Jelf is a leading barrister specialising in partnership
                  and LLP law, trusted by professional firms, high-value
                  partnerships, and individual partners for complex, high-stakes
                  matters. He advises a broad spectrum of clients, including
                  solicitors, accountants, medical professionals, and other
                  businesses operating through partnerships or LLPs. He is
                  particularly renowned for his work with NHS medical
                  partnerships, where governance, financial arrangements, and
                  partner relationships require specialist insight.
                </p>
                <p>
                  Called to the Bar in 1996, Simon spent two years at the Law
                  Commission reviewing partnership law, giving him an
                  exceptional technical foundation. He joined a leading
                  specialist chambers in 1999 and has devoted his career to
                  partnership law, combining deep expertise with strategic
                  insight. He is a member of the Association of Partnership
                  Practitioners.
                </p>
                <p>
                  His practice combines advisory and contentious work. He
                  focuses on resolving matters efficiently through negotiation
                  or mediation wherever possible. When litigation is
                  unavoidable, he provides robust, clear, and strategic
                  representation. Clients value his ability to quickly identify
                  key issues and provide practical, outcome-driven advice.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Areas of expertise include:
                </h3>
                <ul className="space-y-2">
                  {simonAreas.map((area, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Regulated by the Bar Standards Board.{" "}
                  <a
                    href="https://www.barstandardsboard.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Verify on the Barristers&apos; Register
                  </a>
                </p>
              </div>
            </div>

            {/* What the Directories Say */}
            <div className="space-y-6 mb-10">
              <h2 className="font-heading text-2xl font-bold text-gray-900">
                What the Directories Say
              </h2>

              {/* Chambers and Partners 2026 */}
              <div className="bg-cream rounded-2xl p-6 border border-accent/20">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">
                  Chambers and Partners (2026)
                </p>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Simon Jelf is creative, extremely hard-working and someone
                    who knows the ins and outs of partnership law in a way few
                    people do.
                  </p>
                  <p>
                    Simon Jelf is an extremely pleasant man who can be tough
                    when necessary. He lives and breathes partnership law, and
                    is loved by clients as he can answer any partnership law
                    question put to him.
                  </p>
                  <p>
                    Simon Jelf is very responsive and simply top-drawer
                    technically. He fully understands the commerciality of the
                    dispute.
                  </p>
                </div>
              </div>

              {/* Legal 500 2026 */}
              <div className="bg-cream rounded-2xl p-6 border border-accent/20">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">
                  Legal 500 (2026)
                </p>
                <blockquote className="relative pl-5 border-l-2 border-accent text-gray-700 italic leading-relaxed">
                  <Quote className="absolute -left-1.5 -top-1 h-3 w-3 text-accent" />
                  Simon is a genuine expert, well known and respected in this
                  specialist area. He is elite.
                </blockquote>
              </div>

              {/* Chambers and Partners 2023 */}
              <div className="bg-cream rounded-2xl p-6 border border-accent/20">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">
                  Chambers and Partners (2023)
                </p>
                <div className="space-y-3">
                  <blockquote className="relative pl-5 border-l-2 border-accent text-gray-700 italic leading-relaxed">
                    <Quote className="absolute -left-1.5 -top-1 h-3 w-3 text-accent" />
                    Simon is a client-friendly, calm and poised advocate, who
                    always has an eye for the commercial and pragmatic solution.
                    &quot;&quot;He is a genuine expert.&quot;
                  </blockquote>
                </div>
              </div>

              {/* Chambers & Partners (earlier) */}
              <div className="bg-cream rounded-2xl p-6 border border-accent/20">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">
                  Chambers &amp; Partners
                </p>
                <div className="space-y-3">
                  <blockquote className="relative pl-5 border-l-2 border-accent text-gray-700 italic leading-relaxed">
                    <Quote className="absolute -left-1.5 -top-1 h-3 w-3 text-accent" />
                    &hellip; brimming with common-sense advice.
                  </blockquote>
                  <blockquote className="relative pl-5 border-l-2 border-accent text-gray-700 italic leading-relaxed">
                    <Quote className="absolute -left-1.5 -top-1 h-3 w-3 text-accent" />
                    &hellip; warmley endorsed by clients for his clear advice.
                  </blockquote>
                  <blockquote className="relative pl-5 border-l-2 border-accent text-gray-700 italic leading-relaxed">
                    <Quote className="absolute -left-1.5 -top-1 h-3 w-3 text-accent" />
                    &hellip; very much on the rise.
                  </blockquote>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-2xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Instruct Simon Jelf
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Contact me to discuss whether Simon Jelf is the right barrister
                for your matter. I will provide a no-obligation initial
                assessment.
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
