'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface CourseCardProps {
  title: string;
  description: string;
  icon: IconType;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress?: number;
  href: string;
}

const difficultyColors = {
  Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export function CourseCard({ title, description, icon: Icon, difficulty, progress = 0, href }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href}>
        <div className="h-full p-6 rounded-xl glass-effect hover:shadow-lg transition-all cursor-pointer group">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-salesforce-blue to-salesforce-indigo rounded-lg group-hover:scale-110 transition-transform">
              <Icon size={28} className="text-white" />
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-salesforce-blue transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {description}
          </p>

          {progress > 0 && (
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-400">Progress</span>
                <span className="font-semibold">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-salesforce-blue to-salesforce-indigo h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
