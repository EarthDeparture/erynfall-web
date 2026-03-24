import ParchmentWrapper from '@/components/ParchmentWrapper';
import { supabase } from '@/utils/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const revalidate = 60;

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post = null;
  
  try {
    const { data } = await supabase
      .from('erynfall_news')
      .select('*')
      .eq('slug', slug)
      .single();
      
    if (data) post = data;
  } catch (e) {
    console.error(e);
  }

  if (!post) {
    notFound();
  }

  return (
    <ParchmentWrapper>
      <main className="w-full markdown-content px-4 md:px-10">
        <div className="mb-6 flex items-center gap-4">
          <Link href="/news" className="text-sm font-bold opacity-70 hover:opacity-100">&larr; Back to News</Link>
          <span className={`post-category ${post.category.toLowerCase().replace(' ', '')} ml-auto`}>
            {post.category}
          </span>
        </div>
        
        <h2 className="section-title">{post.title}</h2>
        
        <p className="text-sm opacity-60 font-bold mb-8">
          Published {new Date(post.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
        </p>

        <div className="post-content bg-[#d5ccb0] border border-[#a88d67] p-6 shadow-inner" dangerouslySetInnerHTML={{ __html: post.content }}>
        </div>
      </main>
    </ParchmentWrapper>
  );
}
