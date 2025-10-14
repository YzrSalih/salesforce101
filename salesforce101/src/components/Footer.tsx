'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

const footerLinks = {
  product: [
    { name: 'Blog', href: '/blog' },
    { name: 'Courses', href: '/courses' },
    { name: 'Videos', href: '/videos' },
    { name: 'Resources', href: '/resources' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Trailhead', href: 'https://trailhead.salesforce.com' },
    { name: 'Documentation', href: 'https://developer.salesforce.com' },
    { name: 'Community', href: 'https://trailhead.salesforce.com/community' },
  ],
};

const socialLinks = [
  { icon: FaYoutube, href: 'https://www.youtube.com/@salesforce101', label: 'YouTube', color: 'hover:text-red-600' },
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub', color: '' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-700' },
  { icon: FiMail, href: 'mailto:contact@salesforce101.com', label: 'Email', color: '' },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-salesforce-blue to-salesforce-indigo rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SF</span>
              </div>
              <span className="font-bold text-xl">Salesforce 101</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Your comprehensive guide to learning Salesforce. From basics to advanced topics, we&apos;ve got you covered.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-salesforce-blue dark:hover:text-salesforce-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-salesforce-blue dark:hover:text-salesforce-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-salesforce-blue dark:hover:text-salesforce-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Salesforce 101. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
