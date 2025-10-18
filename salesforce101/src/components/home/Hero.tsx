'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-salesforce-dark bg-gradient-to-br from-salesforce-dark via-salesforce-indigo to-salesforce-dark">
      {/* Decorative radial glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-salesforce-blue blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-salesforce-light blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto text-white">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Salesforce 101
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-4 text-lg md:text-xl text-white/90"
          >
            Your comprehensive guide to mastering Salesforce
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-2 text-base md:text-lg text-white/80"
          >
            From basics to advanced topics, learn everything you need to become a Salesforce professional
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/blog"
              className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition bg-gradient-to-r from-salesforce-blue to-salesforce-indigo text-white"
            >
              Explore Blog Posts
            </Link>
            <Link
              href="/courses"
              className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition border-2 border-salesforce-light text-salesforce-light hover:bg-white/10"
            >
              Browse Courses
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
