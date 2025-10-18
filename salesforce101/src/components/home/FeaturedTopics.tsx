'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const topics = [
  {
    title: 'Getting Started',
    description: 'Begin your Salesforce journey with our beginner-friendly guides',
    icon: '🚀',
    href: '/blog',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Certifications',
    description: 'Prepare for Salesforce certifications with expert guidance',
    icon: '🏆',
    href: '/blog',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Lightning Experience',
    description: 'Master the modern Salesforce interface and features',
    icon: '⚡',
    href: '/blog',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Career Paths',
    description: 'Explore different Salesforce career opportunities',
    icon: '💼',
    href: '/career-paths',
    color: 'from-green-500 to-teal-500',
  },
];

export function FeaturedTopics() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Topics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explore key areas to accelerate your Salesforce learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={topic.href}>
                <div className="h-full p-6 bg-white dark:bg-gray-900 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                  <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${topic.color} flex items-center justify-center text-3xl`}>
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {topic.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
