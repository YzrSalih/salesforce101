'use client';

import Link from 'next/link';
import { FiClock, FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
}

const popularPosts: Post[] = [
  {
    title: "Top 10 Salesforce Certifications: Your Complete Guide",
    slug: "top-salesforce-certifications",
    excerpt: "Comprehensive guide to the top 10 Salesforce certifications, including preparation tips, exam details, and career benefits.",
    date: "2025-10-14",
    author: "Salih Yazar",
    tags: ["certification", "career", "learning"]
  },
  {
    title: "Salesforce Trailhead Guide for Beginners: Your Learning Journey",
    slug: "trailhead-guide-beginners",
    excerpt: "Master Salesforce Trailhead with our comprehensive beginner's guide. Learn how to navigate the platform and maximize your learning experience.",
    date: "2025-10-13",
    author: "Salih Yazar",
    tags: ["trailhead", "learning", "beginners"]
  },
  {
    title: "How to Start Your Salesforce Career: Complete Roadmap",
    slug: "start-salesforce-career",
    excerpt: "A comprehensive guide to launching your career in the Salesforce ecosystem, from learning paths to certifications and job hunting.",
    date: "2025-10-12",
    author: "Salih Yazar",
    tags: ["career", "certification", "learning"]
  },
  {
    title: "Salesforce Lightning Experience: A Complete Visual Guide",
    slug: "salesforce-lightning-experience-guide",
    excerpt: "Discover everything you need to know about Salesforce Lightning Experience, from key features to best practices.",
    date: "2025-10-11",
    author: "Salih Yazar",
    tags: ["lightning", "salesforce", "ui"]
  },
  {
    title: "Salesforce Products Overview: Complete Guide to the Ecosystem",
    slug: "salesforce-products-overview",
    excerpt: "Explore the comprehensive Salesforce product ecosystem including Sales Cloud, Service Cloud, Marketing Cloud, and more.",
    date: "2025-10-10",
    author: "Salih Yazar",
    tags: ["salesforce", "products", "overview"]
  },
  {
    title: "What is Salesforce? A Beginner's Guide",
    slug: "what-is-salesforce",
    excerpt: "A quick introduction to the world of Salesforce.",
    date: "2025-09-22",
    author: "Salih Yazar",
    tags: ["salesforce", "basics"]
  }
];

export function PopularPosts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Articles
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our most popular articles covering Salesforce basics, certifications, career advice, and best practices.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {popularPosts.slice(0, 6).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="h-full rounded-xl overflow-hidden glass-effect hover:shadow-xl transition-all">
                  {/* Placeholder Image/Gradient */}
                  <div className="h-48 bg-gradient-to-br from-salesforce-blue via-salesforce-indigo to-salesforce-purple relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-salesforce-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiUser size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-4 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-blue-dark transition-colors shadow-lg"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
