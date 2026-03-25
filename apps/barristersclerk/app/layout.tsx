import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { TopBar } from "@tyroon/shared";
import { Footer } from "@tyroon/shared";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barristersclerk.co.uk"),
  title: {
    default: "Tyroon Win | Barristers Clerk | Partnership & Tax",
    template: "%s | Tyroon Win Barristers Clerk",
  },
  description:
    "Over 20 years' experience connecting solicitors, professionals, and the public with the right specialist barrister for partnership and tax matters.",
  keywords: [
    "barristers clerk",
    "partnership barrister",
    "tax barrister",
    "LLP disputes",
    "tax appeals",
    "HMRC appeals",
    "licensed access",
    "public access",
    "Tyroon Win",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://barristersclerk.co.uk",
    siteName: "Tyroon Win Barristers Clerk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body">
        <TopBar />
        <main className="min-h-screen">{children}</main>
        <Footer site="barristersclerk" />
      </body>
    </html>
  );
}
