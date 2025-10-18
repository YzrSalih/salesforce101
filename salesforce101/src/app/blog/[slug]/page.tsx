import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { FiCalendar, FiUser, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Salesforce 101`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const shareUrl = `https://salesforce101.com/blog/${post.slug}`;
  const shareText = encodeURIComponent(post.title);

  return (
    <article className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-semibold bg-salesforce-blue/10 text-salesforce-blue dark:bg-salesforce-blue/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <FiUser size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar size={18} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <span className="text-sm font-semibold">Share:</span>
              <div className="flex gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <FiTwitter size={20} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <FiFacebook size={20} />
                </a>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote source={post.content} />
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-salesforce-blue hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
