'use client';

import { useState } from 'react';

interface YouTubeProps {
  videoId: string;
  title?: string;
}

export function YouTube({ videoId, title = 'YouTube video' }: YouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="my-8 rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {!isLoaded && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 cursor-pointer group"
            onClick={() => setIsLoaded(true)}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        {isLoaded && (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
