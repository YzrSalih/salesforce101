'use client';

import { featuredVideos, channelInfo } from '@/lib/videos';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import { FiClock, FiEye } from 'react-icons/fi';
import { motion } from 'framer-motion';

export function LatestVideos() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaYoutube className="text-red-600 text-4xl" />
            <h2 className="text-3xl md:text-4xl font-bold">Latest from Our YouTube Channel</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Watch our Salesforce tutorials, certification guides, and career advice videos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={channelInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
            >
              <FaYoutube size={24} />
              Subscribe to Channel ({channelInfo.subscriberCount})
            </a>
            <span className="text-gray-600 dark:text-gray-400">
              {channelInfo.videoCount} videos and growing!
            </span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
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
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <FaPlay className="text-white ml-1" size={24} />
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
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href={channelInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-600 text-red-600 dark:border-red-500 dark:text-red-500 rounded-lg font-semibold hover:bg-red-600 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-all"
          >
            View All Videos on YouTube
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
