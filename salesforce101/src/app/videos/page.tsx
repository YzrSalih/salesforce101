'use client';

import { featuredVideos, channelInfo } from '@/lib/videos';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import { FiClock, FiEye } from 'react-icons/fi';

export default function VideosPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaYoutube className="text-red-600 text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">Salesforce Video Tutorials</h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Learn Salesforce through our comprehensive video library. From beginner basics to advanced topics, 
            we&apos;ve got video tutorials to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={channelInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
            >
              <FaYoutube size={24} />
              Subscribe to Our Channel
            </a>
            <div className="flex flex-col text-center">
              <span className="text-2xl font-bold">{channelInfo.subscriberCount}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Subscribers</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl font-bold">{channelInfo.videoCount}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Videos</span>
            </div>
          </div>
        </div>

        {/* Video Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {['All Videos', 'Salesforce Basics', 'Admin Tutorials', 'Developer Content', 'Certifications', 'Career Advice'].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  category === 'All Videos'
                    ? 'bg-red-600 text-white'
                    : 'glass-effect hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...featuredVideos, ...featuredVideos].map((video, index) => (
            <a
              key={`${video.id}-${index}`}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                      <FaPlay className="text-white ml-1" size={28} />
                    </div>
                  </div>
                  {video.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                      {video.duration}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 bg-white dark:bg-gray-800">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    {video.views && (
                      <div className="flex items-center gap-1">
                        <FiEye size={14} />
                        <span>{video.views}</span>
                      </div>
                    )}
                    {video.uploadDate && (
                      <div className="flex items-center gap-1">
                        <FiClock size={14} />
                        <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Playlists Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Salesforce Basics', count: 12, duration: '3h 45m' },
              { name: 'Admin Certification Prep', count: 15, duration: '6h 20m' },
              { name: 'Developer Fundamentals', count: 20, duration: '8h 15m' },
            ].map((playlist) => (
              <div key={playlist.name} className="p-6 rounded-xl glass-effect hover:shadow-lg transition-all cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <FaYoutube className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{playlist.name}</h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {playlist.count} videos • {playlist.duration}
                    </div>
                  </div>
                </div>
                <a
                  href={channelInfo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  Watch Playlist
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with New Videos</h2>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to our channel and never miss a new tutorial. We upload new videos every week!
          </p>
          <a
            href={channelInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <FaYoutube size={24} />
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
}
