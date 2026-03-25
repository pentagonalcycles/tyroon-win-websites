import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Navbar } from '@tyroon/shared';
import { Footer } from '@tyroon/shared';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://taxclerk.co.uk'),
  title: {
    default: 'Tyroon Win | Tax Clerk | Tax Appeals & Tribunal',
    template: '%s | Tyroon Win Tax Clerk',
  },
  description:
    'Over 20 years\' experience connecting solicitors, professionals, and the public with specialist tax barristers for HMRC disputes and First-tier Tribunal appeals.',
  keywords: [
    'tax clerk',
    'tax barrister',
    'tax appeals',
    'HMRC disputes',
    'First-tier Tribunal',
    'VAT appeals',
    'corporation tax',
    'licensed access',
    'public access',
    'Tyroon Win',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://taxclerk.co.uk',
    siteName: 'Tyroon Win Tax Clerk',
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
        <Navbar site="taxclerk" />
        <main className="min-h-screen">{children}</main>
        <Footer site="taxclerk" />
      </body>
    </html>
  );
}
