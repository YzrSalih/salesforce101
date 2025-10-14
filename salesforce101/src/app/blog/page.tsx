import { getAllPosts } from '@/lib/posts';
import { BlogCard } from '@/components/BlogCard';

export const metadata = {
  title: 'Blog - Salesforce 101',
  description: 'Read our latest articles about Salesforce, CRM, and career development.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore articles, tutorials, and insights about Salesforce ecosystem, career tips, and best practices.
          </p>
        </div>

        {/* Blog Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
