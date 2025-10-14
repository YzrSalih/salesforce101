'use client';

import Link from 'next/link';
import { CourseCard } from '@/components/CourseCard';
import { FiDatabase, FiShoppingCart, FiHeadphones, FiMail, FiCode, FiPackage, FiZap, FiSettings, FiSmartphone } from 'react-icons/fi';

const courses = [
  {
    title: 'CRM Fundamentals',
    description: 'Understand Customer Relationship Management basics and how CRM systems transform business operations.',
    icon: FiDatabase,
    difficulty: 'Beginner' as const,
    href: '/courses/crm-fundamentals',
  },
  {
    title: 'Sales Cloud Basics',
    description: 'Master lead management, opportunity tracking, and sales automation with Sales Cloud.',
    icon: FiShoppingCart,
    difficulty: 'Beginner' as const,
    href: '/courses/sales-cloud',
  },
  {
    title: 'Service Cloud Essentials',
    description: 'Learn case management, knowledge base, and customer service automation.',
    icon: FiHeadphones,
    difficulty: 'Intermediate' as const,
    href: '/courses/service-cloud',
  },
  {
    title: 'Marketing Cloud Introduction',
    description: 'Create personalized customer journeys and email campaigns with Marketing Cloud.',
    icon: FiMail,
    difficulty: 'Intermediate' as const,
    href: '/courses/marketing-cloud',
  },
  {
    title: 'Platform Development',
    description: 'Build custom applications using Apex, Visualforce, and Lightning Web Components.',
    icon: FiCode,
    difficulty: 'Advanced' as const,
    href: '/courses/platform-development',
  },
  {
    title: 'AppExchange Basics',
    description: 'Discover and integrate third-party applications to extend Salesforce functionality.',
    icon: FiPackage,
    difficulty: 'Beginner' as const,
    href: '/courses/appexchange',
  },
  {
    title: 'Lightning Experience',
    description: 'Navigate and customize the modern Lightning Experience interface.',
    icon: FiZap,
    difficulty: 'Beginner' as const,
    href: '/courses/lightning-experience',
  },
  {
    title: 'Administration Basics',
    description: 'Learn user management, security, data management, and system configuration.',
    icon: FiSettings,
    difficulty: 'Beginner' as const,
    href: '/courses/administration-basics',
  },
  {
    title: 'Mobile App Development',
    description: 'Build mobile-first applications with Salesforce Mobile SDK and Lightning.',
    icon: FiSmartphone,
    difficulty: 'Advanced' as const,
    href: '/courses/mobile-development',
  },
];

export default function CoursesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Salesforce Courses</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive learning paths from beginner to advanced. Start with fundamentals or dive into specialized topics.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <button className="px-6 py-2 rounded-lg bg-salesforce-blue text-white font-semibold">
            All Courses
          </button>
          <button className="px-6 py-2 rounded-lg glass-effect hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Beginner
          </button>
          <button className="px-6 py-2 rounded-lg glass-effect hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Intermediate
          </button>
          <button className="px-6 py-2 rounded-lg glass-effect hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Advanced
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

        {/* Learning Path Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Recommended Learning Paths</h2>
          
          <div className="space-y-6">
            {/* Administrator Path */}
            <div className="p-6 rounded-xl glass-effect">
              <h3 className="text-2xl font-bold mb-4 text-salesforce-blue">Administrator Path</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Perfect for those who want to configure and manage Salesforce organizations.
              </p>
              <ol className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>CRM Fundamentals → Understanding the basics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Lightning Experience → Navigate the platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Administration Basics → Core admin skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-blue text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span>Sales/Service Cloud → Specialize in your area</span>
                </li>
              </ol>
            </div>

            {/* Developer Path */}
            <div className="p-6 rounded-xl glass-effect">
              <h3 className="text-2xl font-bold mb-4 text-salesforce-indigo">Developer Path</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For those interested in building custom applications and solutions.
              </p>
              <ol className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-indigo text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>CRM Fundamentals → Platform understanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-indigo text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Administration Basics → Learn the data model</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-indigo text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Platform Development → Apex and Lightning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-indigo text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span>Mobile Development → Advanced applications</span>
                </li>
              </ol>
            </div>

            {/* Business User Path */}
            <div className="p-6 rounded-xl glass-effect">
              <h3 className="text-2xl font-bold mb-4 text-salesforce-green">Business User Path</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Learn to use Salesforce effectively in your daily work.
              </p>
              <ol className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-green text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>CRM Fundamentals → What is Salesforce?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-green text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Lightning Experience → Using the interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-green text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Sales/Service/Marketing Cloud → Your role-specific module</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-salesforce-green text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span>AppExchange → Extend your capabilities</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-salesforce-blue to-salesforce-purple text-white">
            <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
            <p className="text-lg mb-6 opacity-90">
              Check out our blog for guidance on choosing the right learning path for your career goals.
            </p>
            <Link
              href="/blog"
              className="inline-block px-8 py-4 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Read Our Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
