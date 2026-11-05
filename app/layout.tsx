import type { Metadata } from 'next';
import { Oswald, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quality Fence Works LLC | Professional Fencing & Decks in Northern VA',
  description:
    'Quality Fence Works LLC specializes in premium PVC/vinyl, wood, aluminum, chain link fencing, custom decks and patios across Northern Virginia. Call (703) 856-5215 for a free estimate.',
  openGraph: {
    title: 'Quality Fence Works LLC | Fence & Deck Contractors Northern Virginia',
    description:
      'Locally owned & operated fence experts. PVC, Wood, Aluminum, Chain Link & Decks. Free On-Site Estimates: (703) 856-5215.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quality Fence Works LLC | Northern VA Fence Contractor',
    description: 'Premier fence and deck installation and repair. Call (703) 856-5215 today.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
