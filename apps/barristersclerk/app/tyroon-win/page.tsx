import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PageHero,
  Section,
  Container,
  TestimonialCarousel,
  testimonials,
} from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Tyroon Win",
  description:
    "With over 20 years' experience in the legal sector, Tyroon Win connects solicitors, law firms, accountants, and members of the public with the right barrister.",
};

const timeline = [
  {
    role: "Practice Manager",
    org: "Partnership Counsel",
    description:
      "Supporting specialist barristers in partnership, LLP, and limited partnership matters.",
  },
  {
    role: "Head of Tax",
    org: "The Barrister Group",
    description:
      "Leading the tax practice and managing complex HMRC dispute and appeals work.",
  },
  {
    role: "Senior Clerk",
    org: "Exchequer Chambers",
    description:
      "Senior clerking responsibilities across a specialist tax and public law chambers.",
  },
];

export default function TyroonWinPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="About Me"
        subtitle="Tyroon Win"
        description="Over 20 years' experience in the legal sector, connecting clients with the right specialist counsel."
      />

      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-xs mx-auto lg:mx-0">
                  <Image
                    src="/images/tyroon-win.jpg"
                    alt="Tyroon Win – Barristers Clerk"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 300px, 400px"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 prose prose-lg max-w-none">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6 not-prose">
                My Background
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With over 20 years&apos; experience in the legal sector, I
                  work closely with solicitors, law firms, accountants, and
                  members of the public to connect them with the right barrister
                  for their needs. I have extensive experience across both the
                  Licensed Access Scheme and Public Access Scheme, giving me a
                  clear understanding of how to support a wide range of clients
                  efficiently and effectively.
                </p>
                <p>
                  My background includes senior roles across leading sets. I
                  have acted as Practice Manager at Partnership Counsel,
                  supporting specialist barristers in partnership, LLP, and
                  limited partnership matters. I also served as Head of Tax at
                  The Barrister Group and as Senior Clerk at Exchequer Chambers.
                </p>
                <p>
                  Legal directories have described me as an
                  &ldquo;excellent&rdquo; clerk who is &ldquo;exceptionally easy
                  to work with and efficient,&rdquo; reflecting my focus on
                  responsiveness and delivering practical solutions.
                </p>
                <p>
                  I manage the day-to-day running of barristers&apos; practices,
                  including diary management, fixing hearings, and case
                  coordination. I act as a first point of contact for clients,
                  guiding you to the most suitable barrister for your matter,
                  with clear advice on availability, turnaround times, and fee
                  structures from the outset.
                </p>
                <p>
                  I take a proactive and flexible approach. I do not just
                  identify the right counsel—I work with you to ensure the most
                  cost-effective and efficient use of their time. This includes
                  helping you scope work appropriately and avoid unnecessary
                  cost.
                </p>
                <p>
                  I am used to dealing with urgent and time-sensitive matters
                  and can move quickly when needed. Where appropriate, I can
                  also recommend experienced solicitors who are well suited to
                  supporting professional clients.
                </p>
                <p>
                  You can expect a responsive, straightforward, and commercially
                  focused approach. I understand that partnership and tax
                  matters are often complex and sensitive, particularly where
                  disputes arise. My role is to make the process easier for you
                  by providing clarity, speed, and access to the right
                  expertise.
                </p>
                <p>
                  If you are looking for guidance on instructing counsel, or
                  want to explore your options, I am always happy to have an
                  initial conversation at short notice.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 not-prose">
                <Link
                  href="/lawyers"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors"
                >
                  For Lawyers
                </Link>
                <Link
                  href="/licensed-access"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-primary text-primary font-medium text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  Licensed Access
                </Link>
                <Link
                  href="/public-access"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg border-2 border-primary text-primary font-medium text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  Public Access
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="cream">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">
              Career Highlights
            </h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={i} className="relative pl-20">
                    <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-accent border-4 border-white shadow" />
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <p className="font-semibold text-primary text-lg">
                        {item.role}
                      </p>
                      <p className="text-accent font-medium mb-2">{item.org}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What the Directories Say
            </h2>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </Container>
      </Section>
    </>
  );
}
