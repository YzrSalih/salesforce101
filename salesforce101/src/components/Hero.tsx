'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBook, FiUsers, FiAward } from 'react-icons/fi';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-salesforce-blue via-salesforce-indigo to-salesforce-purple py-20 lg:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Master Salesforce
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
                Transform Your Career
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Your comprehensive guide to learning Salesforce. From CRM basics to advanced administration, we provide everything you need to succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/courses"
              className="group px-8 py-4 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Start Learning
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Read Blog
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            <div className="text-white">
              <div className="flex justify-center mb-2">
                <FiUsers size={32} />
              </div>
              <div className="text-3xl font-bold mb-1">10K+</div>
              <div className="text-white/80">Active Learners</div>
            </div>
            <div className="text-white">
              <div className="flex justify-center mb-2">
                <FiBook size={32} />
              </div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-white/80">Courses & Topics</div>
            </div>
            <div className="text-white">
              <div className="flex justify-center mb-2">
                <FiAward size={32} />
              </div>
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
