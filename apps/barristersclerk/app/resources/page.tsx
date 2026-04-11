import type { Metadata } from "next";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Reference materials and practical information, including legal terminology, court details, and guidance notes.",
};

const plannedResources = [
  {
    title: "Tax Terminology",
    description:
      "Plain-English definitions for commonly used tax terms and procedural language.",
  },
  {
    title: "Court Addresses",
    description:
      "Court and tribunal locations, contact details, and filing information for quick reference.",
  },
  {
    title: "Client Guidance Notes",
    description:
      "Useful guidance documents and practical checklists for solicitors, professionals, and lay clients.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Resources"
        subtitle="Reference Library"
        description="A dedicated space for practical legal reference materials."
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-gray-700 leading-relaxed">
              This page is set up as a central resource hub. Additional
              materials can be added here over time, including terminology
              glossaries, court information, and supporting reference documents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plannedResources.map((resource) => (
                <article
                  key={resource.title}
                  className="rounded-2xl border border-gray-200 bg-cream p-6"
                >
                  <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {resource.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
