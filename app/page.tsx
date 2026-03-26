import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <div className="page-shell">
      <header className="hero" role="banner">
        <div className="hero-inner">
          <span className="shooting-star" aria-hidden="true" />
          <span className="moon" aria-hidden="true" />
          <span className="watcher" aria-hidden="true" />

          <p className="kicker">UPCOMING GAME</p>
          <h1 className="brand">ERYNFALL</h1>
          <p className="tagline">Beyond the city walls, an untamed realm waits to be discovered.</p>
          <p className="subline">A medieval fantasy adventure is nearing launch.</p>

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
          <h2 id="launch-heading">Launch Window</h2>
          <p>Targeting Q4 2026 on PC first, with console plans to follow.</p>
          <p>Join the newsletter for test build invites, soundtrack previews, and milestone updates.</p>
        </section>

        <section className="panel media-panel" aria-label="teaser stills">
          <div className="shot is-1" />
          <div className="shot is-2" />
          <div className="shot is-3" />
          <div className="shot is-4" />
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
