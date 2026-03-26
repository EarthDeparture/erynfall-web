import type { Metadata } from 'next';
import { Alegreya_SC, Crimson_Text } from 'next/font/google';
import './globals.css';

const alegreyaSc = Alegreya_SC({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
});

const crimsonText = Crimson_Text({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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
      <body className={`${alegreyaSc.variable} ${crimsonText.variable}`}>
        {children}
      </body>
    </html>
  );
}
