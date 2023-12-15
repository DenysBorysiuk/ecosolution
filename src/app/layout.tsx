import type { Metadata } from 'next';
import { Oswald, Fira_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

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
  openGraph: {
    title: 'Ecosolution',
    description: 'Renewable energy for any task',
    images: [
      {
        url: '/images/og-image.jpg',
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
