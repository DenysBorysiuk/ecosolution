import type { Metadata } from 'next';
import { Oswald, Fira_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import './globals.css';

import { Header, Footer } from '@/sections';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-fira-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ecosolution',
  description: 'Renewable energy for any task',
  metadataBase: new URL('https://ecosolution-ten.vercel.app/'),

  openGraph: {
    url: 'https://ecosolution-ten.vercel.app/',
    title: 'Ecosolution',
    description: 'Renewable energy for any task',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wind turbine',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${firaSans.variable}`}>
        <Header />

        <main>{children}</main>

        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
