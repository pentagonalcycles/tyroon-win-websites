import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Our Barristers",
  description:
    "Experienced barristers in partnership, LLP, and tax law. Simon Jelf and Stefano Mariani offer specialist expertise for your matter.",
};

const barristers = [
  {
    name: "Simon Jelf",
    role: "Partnership & LLP Barrister",
    href: "/barristers/simon-jelf",
    image: "/SimonJelf.jpg",
    summary:
      "Leading barrister specialising in partnership and LLP law. Trusted by professional firms, high-value partnerships, and individual partners for complex, high-stakes matters including NHS medical partnerships.",
  },
  {
    name: "Stefano Mariani",
    role: "Tax Barrister",
    href: "/barristers/stefano-mariani",
    image: "/StefanoMariani.png",
    summary:
      "Barrister qualified in England and Wales, also practising as a solicitor-advocate in Hong Kong. Combines advocacy experience, international insight, and technical depth in contentious tax cases.",
  },
];

export default function BarristersPage() {
  return (
    <>
      <PageHero
        title="Our Barristers"
        subtitle="Specialist Counsel"
        description="A select group of experienced barristers in partnership, LLP, and tax matters."
      />

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                I work with a select group of experienced barristers who
                specialise in partnership and tax matters. Each barrister is
                chosen for their expertise, approachability, and track record of
                success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {barristers.map((barrister) => (
                <Link
                  key={barrister.href}
                  href={barrister.href}
                  className="group bg-cream rounded-2xl p-8 border border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-primary mb-1 group-hover:text-primary-dark transition-colors">
                        {barrister.name}
                      </h2>
                      <p className="text-sm font-medium text-gray-600">
                        {barrister.role}
                      </p>
                    </div>
                    <div className="shrink-0 ml-4">
                      <Image
                        src={barrister.image}
                        alt={barrister.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {barrister.summary}
                  </p>
                  <span className="inline-flex items-center space-x-1 text-primary font-medium text-sm group-hover:text-accent transition-colors">
                    <span>View Profile</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-primary text-white rounded-2xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Discuss Which Barrister Is Right for Your Matter
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                I will match you with the most suitable barrister based on your
                specific matter, budget, and timeline. Contact me for a
                no-obligation initial discussion.
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
