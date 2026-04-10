import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Clerks & Practice Managers",
  description:
    "Browse clerks and practice managers. Tyroon Win is currently listed, with further profiles to be added.",
};

const clerks = [
  {
    name: "Tyroon Win",
    role: "Barrister's Clerk & Practice Manager",
    href: "/tyroon-win",
    image: "/images/tyroon-win.jpg",
    summary:
      "Over 20 years' experience connecting solicitors, accountants, businesses, and individuals with specialist barristers in partnership and tax matters.",
  },
];

export default function ClerksPage() {
  return (
    <>
      <PageHero
        title="Clerks & Practice Managers"
        subtitle="Our Team"
        description="A growing listing of clerks and practice managers supporting specialist barristers."
      />

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                This page lists clerks and practice managers available through
                this website. Additional profiles can be added as the team
                grows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {clerks.map((clerk) => (
                <Link
                  key={clerk.href}
                  href={clerk.href}
                  className="group bg-cream rounded-2xl p-8 border border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-primary mb-1 group-hover:text-primary-dark transition-colors">
                        {clerk.name}
                      </h2>
                      <p className="text-sm font-medium text-gray-600">
                        {clerk.role}
                      </p>
                    </div>
                    <div className="shrink-0 ml-4">
                      <Image
                        src={clerk.image}
                        alt={clerk.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {clerk.summary}
                  </p>
                  <span className="inline-flex items-center space-x-1 text-primary font-medium text-sm group-hover:text-accent transition-colors">
                    <span>View Profile</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="bg-primary text-white rounded-2xl p-8 text-center">
              <h2 className="font-heading text-2xl font-bold mb-4">
                Need to Speak with a Clerk?
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Contact us and we will direct your enquiry to the right clerk or
                practice manager.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-gray-900 font-semibold hover:bg-accent-dark transition-colors shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
