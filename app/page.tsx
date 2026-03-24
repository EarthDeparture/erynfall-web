import Link from 'next/link';
import { supabase } from '@/utils/supabase';

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  // Fetch latest 3 news items. If no env vars, fallback gracefully.
  let recentNews = [];
  try {
    const { data } = await supabase.from('erynfall_news').select('*').order('created_at', { ascending: false }).limit(3);
    if (data) recentNews = data;
  } catch (e) {
    console.error('Supabase fetch failed (likely no config)', e);
  }

  return (
    <>
      <div className="cta-banner">
        <div className="cta-inner">
          <Link href="#" className="btn-osrs btn-create">
            <span className="btn-text">NEW USER</span>
            <span className="btn-sub">Create Account</span>
          </Link>
          <Link href="#" className="btn-osrs btn-play">
            <span className="btn-text">PLAY NOW</span>
            <span className="btn-sub">Existing User</span>
          </Link>
        </div>
      </div>

      <div className="main-content">
        <div className="deco-separator"></div>
        <div className="content-grid border-container">
          
          <main className="news-column">
            <h2 className="section-title">Latest News</h2>

            {recentNews.length > 0 ? (
              recentNews.map((news: any, index: number) => (
                <article className="news-post" key={news.id}>
                  <div className="post-header">
                    <span className={`post-category ${news.category.toLowerCase().replace(' ', '')}`}>
                      {news.category}
                    </span>
                    <h3 className="post-title"><Link href={`/news/${news.slug}`}>{news.title}</Link></h3>
                    <span className="post-date">
                      {new Date(news.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="post-body">
                    <div className={`post-thumbnail thumbnail-${(index % 3) + 1}`}></div>
                    <div className="post-text">
                      <p>{news.content.substring(0, 180)}...</p>
                      <Link href={`/news/${news.slug}`} className="read-more">Read More &raquo;</Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p>No news available. Please configure your Supabase variables and run the schema script.</p>
            )}

            <div className="archive-link-container text-right">
              <Link href="/news" className="archive-btn">Browse News Archive</Link>
            </div>
          </main>

          <aside className="sidebar-column">
            <div className="sidebar-box">
              <h3 className="sidebar-title">Tech &amp; Features</h3>
              <ul className="feature-list">
                <li><span className="feature-icon">⚡</span><div className="feature-detail"><strong>256-Tick Architecture</strong>Custom Netty 4.1 server running a 256 Hz tick loop for ultra-smooth state synchronization.</div></li>
                <li><span className="feature-icon">⚔️</span><div className="feature-detail"><strong>Authentic Combat</strong>OSRS combat style XP systems, including walk+3-tick animation logic and accurate pathing.</div></li>
                <li><span className="feature-icon">🎒</span><div className="feature-detail"><strong>Expanded Inventory</strong>Full 28-slot tracking, flexible equipment management, and comprehensive loot table generation.</div></li>
                <li><span className="feature-icon">🎮</span><div className="feature-detail"><strong>Custom Flat Engine</strong>Client rendered via LibGDX 1.13 featuring 2D isometric environments and dynamic UI panels.</div></li>
              </ul>
            </div>
            
            <div className="sidebar-box mt-20">
              <h3 className="sidebar-title text-center">A True OSRS Framework</h3>
              <p className="about-snippit">
                Erynfall is a massive Java 21 MMORPG project built from the ground up, combining standard Netty networking with LibGDX graphics to accurately replicate Old School mechanics and gameplay loops.
              </p>
            </div>

            <div className="sidebar-box support-box mt-20">
              <h3>Player Support</h3>
              <p>Need help with your account? Visit our support centre for assistance.</p>
              <Link href="/status" className="support-btn">System Status</Link>
            </div>
          </aside>

        </div>
        <div className="deco-separator bottom-sep"></div>
      </div>
    </>
  );
}
