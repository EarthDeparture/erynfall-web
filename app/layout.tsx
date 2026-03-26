import type { Metadata } from 'next';
import { Cinzel_Decorative, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const cinzelDecorative = Cinzel_Decorative({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Erynfall | Coming Soon',
  description: 'A new adventure is approaching. Follow Erynfall updates and launch news.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cinzelDecorative.variable} ${cormorantGaramond.variable}`}>
        {children}
      </body>
    </html>
  );
}
