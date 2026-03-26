import type { Metadata } from 'next';
import { Silkscreen, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const silkscreen = Silkscreen({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const notoSansJp = Noto_Sans_JP({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '700'],
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
      <body className={`${silkscreen.variable} ${notoSansJp.variable}`}>
        {children}
      </body>
    </html>
  );
}
