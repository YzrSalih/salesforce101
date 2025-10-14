'use client';

import { Hero } from '@/components/Hero';
import { CourseCard } from '@/components/CourseCard';
import { LatestVideos } from '@/components/LatestVideos';
import { FiDatabase, FiShoppingCart, FiHeadphones, FiMail, FiCode, FiPackage } from 'react-icons/fi';

const featuredCourses = [
  {
    title: 'CRM Fundamentals',
    description: 'Learn the basics of Customer Relationship Management and how Salesforce revolutionizes business processes.',
    icon: FiDatabase,
    difficulty: 'Beginner' as const,
    href: '/courses/crm-fundamentals',
  },
  {
    title: 'Sales Cloud Basics',
    description: 'Master Sales Cloud to manage leads, opportunities, and close deals faster with powerful automation.',
    icon: FiShoppingCart,
    difficulty: 'Beginner' as const,
    href: '/courses/sales-cloud',
  },
  {
    title: 'Service Cloud Essentials',
    description: 'Deliver exceptional customer service with case management, knowledge base, and omnichannel support.',
    icon: FiHeadphones,
    difficulty: 'Intermediate' as const,
    href: '/courses/service-cloud',
  },
  {
    title: 'Marketing Cloud',
    description: 'Create personalized customer journeys and campaigns with Marketing Cloud automation tools.',
    icon: FiMail,
    difficulty: 'Intermediate' as const,
    href: '/courses/marketing-cloud',
  },
  {
    title: 'Platform Development',
    description: 'Build custom applications with Apex, Visualforce, and Lightning Web Components.',
    icon: FiCode,
    difficulty: 'Advanced' as const,
    href: '/courses/platform-development',
  },
  {
    title: 'AppExchange',
    description: 'Explore and integrate third-party apps to extend Salesforce functionality.',
    icon: FiPackage,
    difficulty: 'Beginner' as const,
    href: '/courses/appexchange',
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Courses
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Start your Salesforce journey with our carefully crafted courses covering essential topics from beginner to advanced levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <LatestVideos />

      {/* Why Learn Salesforce Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Learn Salesforce?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl glass-effect">
                <h3 className="text-xl font-bold mb-3 text-salesforce-blue">High Demand Career</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Salesforce professionals are in high demand globally. With millions of jobs in the ecosystem, your skills will open doors to exciting opportunities.
                </p>
              </div>

              <div className="p-6 rounded-xl glass-effect">
                <h3 className="text-xl font-bold mb-3 text-salesforce-indigo">Competitive Salaries</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Salesforce expertise commands premium salaries. Certified professionals earn significantly more than industry averages.
                </p>
              </div>

              <div className="p-6 rounded-xl glass-effect">
                <h3 className="text-xl font-bold mb-3 text-salesforce-purple">Continuous Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Salesforce releases three major updates annually, ensuring you&apos;re always working with cutting-edge technology.
                </p>
              </div>

              <div className="p-6 rounded-xl glass-effect">
                <h3 className="text-xl font-bold mb-3 text-salesforce-green">Community Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Join the vibrant Trailblazer community with millions of members ready to help you succeed in your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

