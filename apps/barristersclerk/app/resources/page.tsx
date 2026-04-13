import type { Metadata } from "next";
import { PageHero, Section, Container } from "@tyroon/shared";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical reference materials, including a concise guide to key UK tax acronyms used in advisory work, compliance, and disputes.",
};

type AcronymItem = {
  term: string;
  meaning: string;
};

type AcronymSection = {
  title: string;
  items: AcronymItem[];
};

const acronymSections: AcronymSection[] = [
  {
    title: "Most Common Tax Acronyms",
    items: [
      {
        term: "HMRC",
        meaning: "His Majesty's Revenue and Customs. The UK tax authority.",
      },
      { term: "IT", meaning: "Income Tax. Tax on individual earnings." },
      { term: "CT", meaning: "Corporation Tax. Tax on company profits." },
      {
        term: "VAT",
        meaning: "Value Added Tax. A consumption tax on goods and services.",
      },
      {
        term: "CGT",
        meaning: "Capital Gains Tax. Tax on gains from disposal of assets.",
      },
      {
        term: "IHT",
        meaning:
          "Inheritance Tax. Tax on estates and certain lifetime transfers.",
      },
      {
        term: "PAYE",
        meaning:
          "Pay As You Earn. System for collecting tax from employment income.",
      },
      {
        term: "NICs",
        meaning:
          "National Insurance Contributions. Social security contributions linked to earnings.",
      },
      {
        term: "SDLT",
        meaning:
          "Stamp Duty Land Tax. Tax on property transactions in England and Northern Ireland.",
      },
    ],
  },
  {
    title: "General and Administrative",
    items: [
      {
        term: "UTR",
        meaning:
          "Unique Taxpayer Reference. A 10-digit identifier issued by HMRC.",
      },
      {
        term: "SA",
        meaning:
          "Self Assessment. System for reporting personal and partnership income.",
      },
      {
        term: "MTD",
        meaning:
          "Making Tax Digital. Digital reporting framework for tax compliance.",
      },
      {
        term: "P11D",
        meaning: "Form used to report benefits in kind provided to employees.",
      },
      {
        term: "RTI",
        meaning: "Real Time Information. PAYE reporting system for employers.",
      },
    ],
  },
  {
    title: "Corporate and Business Tax",
    items: [
      {
        term: "CIS",
        meaning:
          "Construction Industry Scheme. Tax deduction regime for subcontractors.",
      },
      {
        term: "IR35",
        meaning:
          "Off-payroll working rules governing employment status for tax purposes.",
      },
      {
        term: "RDEC",
        meaning: "R&D Expenditure Credit. Primary R&D tax relief regime.",
      },
      {
        term: "ATED",
        meaning:
          "Annual Tax on Enveloped Dwellings. Applies to high-value residential property held by companies.",
      },
      {
        term: "AIA",
        meaning:
          "Annual Investment Allowance. Capital allowance for qualifying expenditure.",
      },
      {
        term: "WDA",
        meaning: "Writing Down Allowance. Ongoing capital allowance on assets.",
      },
      {
        term: "QIP",
        meaning:
          "Quarterly Instalment Payments. Corporation Tax payments for large companies.",
      },
    ],
  },
  {
    title: "Wealth and Transactional Taxes",
    items: [
      { term: "NRB", meaning: "Nil-Rate Band. GBP 325,000 IHT threshold." },
      {
        term: "RNRB",
        meaning:
          "Residence Nil-Rate Band. Additional IHT relief for main residence.",
      },
      {
        term: "LBTT",
        meaning: "Land and Buildings Transaction Tax. Scottish property tax.",
      },
      { term: "LTT", meaning: "Land Transaction Tax. Welsh property tax." },
    ],
  },
  {
    title: "VAT",
    items: [
      {
        term: "VATA 1994",
        meaning: "Value Added Tax Act 1994. Primary VAT legislation.",
      },
      {
        term: "MTD for VAT",
        meaning:
          "Digital reporting requirements for VAT-registered businesses.",
      },
      {
        term: "OSS / IOSS",
        meaning:
          "One Stop Shop / Import One Stop Shop. VAT regimes for cross-border sales.",
      },
    ],
  },
  {
    title: "Anti-Avoidance and Litigation",
    items: [
      {
        term: "GAAR",
        meaning: "General Anti-Abuse Rule. Targets abusive tax arrangements.",
      },
      {
        term: "DOTAS",
        meaning:
          "Disclosure of Tax Avoidance Schemes. Requires disclosure of certain tax arrangements.",
      },
      {
        term: "APN",
        meaning:
          "Accelerated Payment Notice. Requires upfront payment of disputed tax.",
      },
      {
        term: "PPN",
        meaning: "Partner Payment Notice. Applies APN regime to partnerships.",
      },
      {
        term: "ADR",
        meaning: "Alternative Dispute Resolution. Mediation process with HMRC.",
      },
      {
        term: "FTT / UT",
        meaning: "First-tier Tribunal / Upper Tribunal. Tax appeal courts.",
      },
      {
        term: "TMA 1970",
        meaning: "Taxes Management Act 1970. Core procedural legislation.",
      },
      { term: "FA", meaning: "Finance Act. Annual tax legislation." },
    ],
  },
  {
    title: "International Tax",
    items: [
      {
        term: "BEPS",
        meaning:
          "Base Erosion and Profit Shifting. Framework addressing profit shifting.",
      },
      {
        term: "CRS",
        meaning:
          "Common Reporting Standard. Automatic exchange of financial information.",
      },
      {
        term: "DTT",
        meaning:
          "Double Taxation Treaty. Agreement preventing double taxation.",
      },
      {
        term: "CFC",
        meaning:
          "Controlled Foreign Company rules. Anti-avoidance regime for offshore profits.",
      },
      {
        term: "TP",
        meaning: "Transfer Pricing. Rules governing intra-group transactions.",
      },
    ],
  },
  {
    title: "Trusts and Estates",
    items: [
      {
        term: "TRS",
        meaning: "Trust Registration Service. HMRC register for trusts.",
      },
      {
        term: "PET",
        meaning:
          "Potentially Exempt Transfer. Lifetime gift potentially exempt from IHT.",
      },
      {
        term: "CLT",
        meaning:
          "Chargeable Lifetime Transfer. Transfer subject to lifetime IHT charge.",
      },
      {
        term: "10-Year Charge",
        meaning: "Periodic IHT charge on certain trusts.",
      },
    ],
  },
];

const expandedNotes: AcronymItem[] = [
  {
    term: "IR35",
    meaning:
      "The off-payroll rules assess whether a contractor is effectively working as an employee for tax purposes. If IR35 applies, PAYE and NICs treatment is generally required.",
  },
  {
    term: "GAAR",
    meaning:
      "A statutory anti-abuse rule used to counter tax arrangements considered abusive, even where they may follow a literal reading of legislation.",
  },
  {
    term: "DOTAS",
    meaning:
      "A disclosure regime requiring certain promoters and users of tax arrangements to notify HMRC, helping early identification of potential avoidance schemes.",
  },
  {
    term: "APN",
    meaning:
      "A notice requiring payment of disputed tax before the final outcome of litigation in specified circumstances, including many DOTAS-related disputes.",
  },
  {
    term: "FTT / UT",
    meaning:
      "The First-tier Tribunal hears most tax appeals at first instance. Decisions can be appealed to the Upper Tribunal on points of law.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        darkHeading
        title="Guide to UK Tax Acronyms"
        subtitle="Resources"
        description="Clear reference for clients and professionals."
      />

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This guide provides a clear and practical overview of key UK tax
                acronyms. It is designed for clients and professionals working
                with specialist barristers in tax, partnership, and trust
                matters.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It focuses on commonly used terms in advisory work, compliance,
                and tax disputes.
              </p>
            </div>

            {acronymSections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
                  {section.title}
                </h3>
                <div className="rounded-2xl border border-gray-200 bg-cream/60 divide-y divide-gray-200">
                  {section.items.map((item) => (
                    <article
                      key={`${section.title}-${item.term}`}
                      className="p-4 md:p-5"
                    >
                      <p className="text-gray-900 leading-relaxed">
                        <span className="font-semibold text-primary">
                          {item.term}
                        </span>
                        <span className="font-semibold"> - </span>
                        <span>{item.meaning}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}

            <section className="space-y-4">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-primary">
                Expanded Notes on Key Terms
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {expandedNotes.map((item) => (
                  <article
                    key={item.term}
                    className="rounded-2xl border border-gray-200 bg-white p-5"
                  >
                    <h4 className="font-heading text-lg font-bold text-primary mb-2">
                      {item.term}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.meaning}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                Final Note
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This guide is intended as a practical reference. Tax law is
                complex and fact-specific. You should seek advice from a
                specialist barrister where required.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
