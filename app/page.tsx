import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <div className="page-shell">
      <header className="hero" role="banner">
        <div className="hero-inner">
          <span className="shooting-star" aria-hidden="true" />
          <span className="moon" aria-hidden="true" />
          <span className="watcher" aria-hidden="true" />

          <p className="kicker">MEDIEVAL FANTASY MMORPG</p>
          <h1 className="brand">ERYNFALL</h1>
          <p className="tagline">A faithful recreation of classic MMORPG combat and progression.</p>
          <p className="subline">Medieval fantasy adventure built with server-first architecture and authentic mechanics.</p>

          <WaitlistForm />

          <div className="cta-row">
            <a href="https://discord.gg/WNeMywCP" target="_blank" rel="noreferrer" className="cta-btn is-secondary">
              Join Discord
            </a>
          </div>
        </div>
      </header>

      <main className="content-wrap">
        <section className="panel info-panel" aria-labelledby="launch-heading">
          <h2 id="launch-heading">Development Progress</h2>
          <p>Combat, skills, account systems, and persistence complete. Polish phase in progress.</p>
          <p>Join the newsletter for alpha test invites, soundtrack previews, and milestone updates.</p>
        </section>

        <section className="panel features-panel" aria-label="development features">
          <div className="feature-card">
            <h3 className="feature-title">Combat System</h3>
            <p className="feature-desc">Authentic hit/miss formulas, damage calculations, and equipment bonuses</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Skills Progression</h3>
            <p className="feature-desc">Six trainable skills (Attack, Strength, Defence, Hitpoints, Ranged, Magic) with traditional XP curves</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Account System</h3>
            <p className="feature-desc">Secure authentication with automatic registration and persistent saves</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Equipment & Inventory</h3>
            <p className="feature-desc">Full equipment slots with stat bonuses, 20-slot inventory, and item pickup mechanics</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="https://x.com/ErynFallGame" target="_blank" rel="noreferrer">X / @ErynFallGame</a>
        <a href="mailto:support@erynfall.com">support@erynfall.com</a>
        <small>© 2026 Erynfall Studio</small>
      </footer>
    </div>
  );
}
