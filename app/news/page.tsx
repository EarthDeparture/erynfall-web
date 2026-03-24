import ParchmentWrapper from '@/components/ParchmentWrapper';
import { supabase } from '@/utils/supabase';
import Link from 'next/link';

export const revalidate = 60;

export default async function NewsArchive() {
  let allNews = [];
  try {
    const { data } = await supabase.from('erynfall_news').select('*').order('created_at', { ascending: false });
    if (data) allNews = data;
  } catch (e) {
    console.error(e);
  }

  return (
    <ParchmentWrapper>
      <main className="news-column w-full">
        <h2 className="section-title">News Archive</h2>
        
        {allNews.length > 0 ? (
          <div className="flex flex-col gap-6">
            {allNews.map((news: any) => (
              <article className="news-post m-0" key={news.id}>
                <div className="post-header">
                  <span className={`post-category ${news.category.toLowerCase().replace(' ', '')}`}>
                    {news.category}
                  </span>
                  <h3 className="post-title"><Link href={`/news/${news.slug}`}>{news.title}</Link></h3>
                  <span className="post-date">
                    {new Date(news.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>The archive is currently empty or database is not connected.</p>
        )}
      </main>
    </ParchmentWrapper>
  );
}
