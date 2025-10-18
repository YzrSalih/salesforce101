'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiClock, FiUser, FiCalendar } from 'react-icons/fi';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  readTime?: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="h-full p-6 rounded-xl glass-effect hover:shadow-xl transition-all">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold bg-salesforce-blue/10 text-salesforce-blue dark:bg-salesforce-blue/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-3 group-hover:text-salesforce-blue transition-colors line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <FiUser size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiCalendar size={16} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-1">
                <FiClock size={16} />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
