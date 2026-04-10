import type { Metadata } from "next";
import { Mail, Phone, Smartphone, Clock, MapPin } from "lucide-react";
import { PageHero, Section, Container, ContactForm } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tyroon Win to discuss your matter, check barrister availability, or request a fee estimate. I aim to respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Contact"
        subtitle="Get in Touch"
        description="I am happy to have an initial conversation to discuss your options."
      />

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                  Send a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Whether you are a lawyer, professional, or member of the
                  public, I am happy to discuss your options.
                </p>
                <ContactForm site="barristersclerk" />
              </div>

              {/* Contact Details */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                    Contact Details
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">
                          Email
                        </p>
                        <a
                          href="mailto:tyroon.win@thebarristersclerk.com"
                          className="text-primary hover:text-primary-dark transition-colors text-sm break-all"
                        >
                          tyroon.win@thebarristersclerk.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">
                          Phone
                        </p>
                        <a
                          href="tel:02074302005"
                          className="text-primary hover:text-primary-dark transition-colors text-sm"
                        >
                          020 7430 2005
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                        <Smartphone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">
                          Mobile
                        </p>
                        <a
                          href="tel:07751022914"
                          className="text-primary hover:text-primary-dark transition-colors text-sm"
                        >
                          07751 022914
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-0.5">
                          Office Hours
                        </p>
                        <p className="text-gray-700 text-sm">Monday – Friday</p>
                        <p className="text-gray-700 text-sm">
                          9:00 AM – 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-cream rounded-2xl p-6 border border-accent/20">
                  <p className="text-sm text-gray-700 font-medium mb-1">
                    Response Time
                  </p>
                  <p className="text-sm text-gray-600">
                    I aim to respond to all enquiries within 24 hours during
                    business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
