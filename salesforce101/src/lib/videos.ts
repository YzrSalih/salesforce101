// Featured videos from Salesforce 101 YouTube channel
export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  duration?: string;
  uploadDate?: string;
  views?: string;
}

export const featuredVideos: Video[] = [
  {
    id: 'dQw4w9WgXcQ', // Replace with actual video IDs
    title: 'What is Salesforce? Complete Beginner Guide 2025',
    description: 'Learn the fundamentals of Salesforce CRM and why it\'s the world\'s #1 customer platform.',
    duration: '15:30',
    uploadDate: '2025-10-01',
    views: '10K'
  },
  {
    id: 'dQw4w9WgXcQ', // Replace with actual video IDs
    title: 'Salesforce Admin Certification Study Guide',
    description: 'Everything you need to know to pass the Salesforce Administrator certification exam.',
    duration: '25:45',
    uploadDate: '2025-09-28',
    views: '8.5K'
  },
  {
    id: 'dQw4w9WgXcQ', // Replace with actual video IDs
    title: 'Getting Started with Trailhead - Step by Step',
    description: 'Complete tutorial on how to use Salesforce Trailhead for learning and earning badges.',
    duration: '12:20',
    uploadDate: '2025-09-25',
    views: '12K'
  },
  {
    id: 'dQw4w9WgXcQ', // Replace with actual video IDs
    title: 'Salesforce Career Path: Admin vs Developer',
    description: 'Explore different career paths in the Salesforce ecosystem and find the right one for you.',
    duration: '18:15',
    uploadDate: '2025-09-20',
    views: '15K'
  }
];

export const channelInfo = {
  url: 'https://www.youtube.com/@salesforce101',
  subscriberCount: '10K+',
  videoCount: '50+',
  description: 'Learn Salesforce through comprehensive video tutorials, guides, and career advice.'
};
