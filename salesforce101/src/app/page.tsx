import { getAllPosts } from '@/lib/posts';
import MainFeed from '@/components/home/MainFeed';
import Sidebar from '@/components/home/Sidebar';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <section className="lg:col-span-8">
          <MainFeed posts={posts} />
        </section>
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <Sidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
