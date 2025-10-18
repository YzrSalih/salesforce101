import { FiTarget, FiEye, FiHeart, FiUsers } from 'react-icons/fi';
import Link from 'next/link';

export const metadata = {
  title: 'About - Salesforce 101',
  description: 'Learn about our mission to make Salesforce education accessible to everyone.',
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Salesforce 101</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We&apos;re on a mission to make Salesforce education accessible, comprehensive, and enjoyable for everyone, from beginners to advanced professionals.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl glass-effect">
            <div className="w-16 h-16 bg-gradient-to-br from-salesforce-blue to-salesforce-indigo rounded-xl flex items-center justify-center mb-6">
              <FiTarget size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To empower individuals and organizations worldwide with comprehensive Salesforce knowledge, 
              enabling them to leverage the platform&apos;s full potential and accelerate their digital transformation journey.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-effect">
            <div className="w-16 h-16 bg-gradient-to-br from-salesforce-purple to-salesforce-pink rounded-xl flex items-center justify-center mb-6">
              <FiEye size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To become the go-to resource for Salesforce learning, fostering a community where 
              knowledge sharing, continuous improvement, and professional growth are at the forefront.
            </p>
          </div>
        </div>

        {/* Why Learn Salesforce */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Learn Salesforce?</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl glass-effect">
              <h3 className="text-xl font-bold mb-3 text-salesforce-blue">🚀 Career Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The Salesforce ecosystem is projected to create 9.3 million jobs by 2026. Learning Salesforce 
                opens doors to high-paying, in-demand careers across industries.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-effect">
              <h3 className="text-xl font-bold mb-3 text-salesforce-indigo">💰 Lucrative Compensation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Salesforce professionals earn 25% more than their peers on average. With the right certifications 
                and experience, you can command premium salaries in the six-figure range.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-effect">
              <h3 className="text-xl font-bold mb-3 text-salesforce-purple">🌍 Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Salesforce powers businesses worldwide, from startups to Fortune 500 companies. Your skills 
                can help organizations transform their customer relationships and drive meaningful change.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-effect">
              <h3 className="text-xl font-bold mb-3 text-salesforce-green">📈 Continuous Growth</h3>
              <p className="text-gray-600 dark:text-gray-400">
                With three major releases annually and constant innovation, Salesforce keeps you at the 
                cutting edge of technology, ensuring your skills remain relevant and valuable.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl glass-effect">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Courses</h3>
              <p className="text-gray-600 dark:text-gray-400">
                From CRM basics to advanced development, our courses cover all aspects of the Salesforce ecosystem.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl glass-effect">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold mb-3">Expert Articles</h3>
              <p className="text-gray-600 dark:text-gray-400">
                In-depth blog posts covering best practices, tips, and the latest Salesforce features.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl glass-effect">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Certification Guides</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Step-by-step guidance to help you prepare for and pass Salesforce certifications.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl glass-effect">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Practical Examples</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Real-world scenarios and hands-on projects to reinforce your learning.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl glass-effect">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">Regular Updates</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stay current with new content covering the latest Salesforce releases and features.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl glass-effect">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Community Focus</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join a supportive community of learners and professionals on their Salesforce journey.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl glass-effect flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-salesforce-blue/10 dark:bg-salesforce-blue/20 rounded-lg flex items-center justify-center">
                  <FiHeart size={24} className="text-salesforce-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Quality education should be accessible to everyone, regardless of background or experience level.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl glass-effect flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-salesforce-indigo/10 dark:bg-salesforce-indigo/20 rounded-lg flex items-center justify-center">
                  <FiUsers size={24} className="text-salesforce-indigo" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe in the power of community and collaboration in the learning journey.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl glass-effect flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-salesforce-purple/10 dark:bg-salesforce-purple/20 rounded-lg flex items-center justify-center">
                  <FiTarget size={24} className="text-salesforce-purple" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We strive for excellence in every piece of content we create and share.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl glass-effect flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-salesforce-green/10 dark:bg-salesforce-green/20 rounded-lg flex items-center justify-center">
                  <FiEye size={24} className="text-salesforce-green" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We embrace innovation and continuously improve our platform and content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-salesforce-blue to-salesforce-indigo text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of learners who are building successful Salesforce careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="px-8 py-4 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Explore Courses
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
