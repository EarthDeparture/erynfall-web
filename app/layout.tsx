import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Erynfall | Old School MMORPG',
  description: 'Forge your path in a world left in ruin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Metamorphous&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {/* OSRS Style Top Nav */}
        <nav className="os-nav">
          <div className="nav-inner">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/news" className="nav-link">News</Link>
            <Link href="/guide" className="nav-link">Game Guide</Link>
            <Link href="/hiscores" className="nav-link">Hiscores</Link>
            <Link href="/status" className="nav-link">Status</Link>
            <a href="https://discord.gg/WNeMywCP" target="_blank" rel="noreferrer" className="nav-link">Community</a>
            <Link href="/membership" className="nav-link">Membership</Link>
            <a href="https://wiki.erynfall.com" target="_blank" rel="noreferrer" className="nav-link">Wiki</a>
          </div>
        </nav>

        {/* Central wrapper */}
        <div className="site-wrapper">
          
          {/* Logo area */}
          <header className="header-area text-center">
            <h1 className="erynfall-logo">ERYNFALL</h1>
            <p className="erynfall-slogan">Forge your path in a world left in ruin</p>
          </header>

          {children}

          <footer className="site-footer text-center">
            <p>This website and its contents are copyright &copy; 2026 Erynfall.</p>
            <p>Use of this website is subject to our <Link href="#">Terms &amp; Conditions</Link> and <Link href="#">Privacy Policy</Link>.</p>
          </footer>

        </div>
      </body>
    </html>
  );
}
