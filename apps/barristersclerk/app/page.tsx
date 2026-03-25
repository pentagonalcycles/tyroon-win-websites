import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Smartphone } from "lucide-react";
import {
  HeroVideo,
  IconGrid,
  Newsroom,
  TestimonialCarousel,
  featuredTestimonials,
} from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Tyroon Win | Barristers Clerk | Partnership & Tax",
  description:
    "Over 20 years' experience guiding solicitors, professionals, and the public to the right specialist counsel for partnership and tax matters—efficiently, clearly, and cost-effectively.",
};

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <IconGrid />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Who I Help
            </h2>
            <p className="text-lg text-gray-600">
              I work with solicitors, professional advisers, and members of the
              public to find the right specialist barrister for their needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/lawyers"
              className="group text-center p-6 bg-cream hover:bg-primary transition-colors rounded-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-primary group-hover:text-white mb-2">
                Lawyers & Law Firms
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">
                Expert counsel for your clients
              </p>
            </Link>
            <Link
              href="/licensed-access"
              className="group text-center p-6 bg-cream hover:bg-primary transition-colors rounded-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-primary group-hover:text-white mb-2">
                Licensed Access
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">
                Direct instruction support
              </p>
            </Link>
            <Link
              href="/public-access"
              className="group text-center p-6 bg-cream hover:bg-primary transition-colors rounded-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-primary group-hover:text-white mb-2">
                Members of the Public
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80">
                Expert guidance on your matter
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Newsroom />

      <section className="py-16 md:py-20 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              What the Directories Say
            </h2>
            <p className="text-gray-600">
              Recognised by leading legal directories for responsiveness and
              expertise.
            </p>
          </div>
          <TestimonialCarousel testimonials={featuredTestimonials} />
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Discuss Your Matter
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Whether you are a lawyer, professional, or member of the public, I
              am happy to have an initial conversation to discuss your options
              and guide you to the right counsel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="/lawyers"
                className="text-sm font-medium text-accent hover:text-white transition-colors underline underline-offset-4"
              >
                For Lawyers & Law Firms
              </Link>
              <span className="hidden sm:block text-white/30">|</span>
              <Link
                href="/licensed-access"
                className="text-sm font-medium text-accent hover:text-white transition-colors underline underline-offset-4"
              >
                For Licensed Access
              </Link>
              <span className="hidden sm:block text-white/30">|</span>
              <Link
                href="/public-access"
                className="text-sm font-medium text-accent hover:text-white transition-colors underline underline-offset-4"
              >
                For Members of the Public
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a
                href="mailto:tyroon.win@barristersclerk.co.uk"
                className="flex items-center space-x-2 text-white/90 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>tyroon.win@barristersclerk.co.uk</span>
              </a>
              <a
                href="tel:02074302005"
                className="flex items-center space-x-2 text-white/90 hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>020 7430 2005</span>
              </a>
              <a
                href="tel:07751022914"
                className="flex items-center space-x-2 text-white/90 hover:text-accent transition-colors"
              >
                <Smartphone className="h-5 w-5" />
                <span>07751 022914</span>
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-primary font-semibold hover:bg-white transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
