"use client"

import React, { useState } from 'react';

const VideoPlayer = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative aspect-w-16 aspect-h-9">
      {!showVideo ? (
        <div
          className="cursor-pointer bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url('https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg')` }} // Replace with your video's thumbnail URL
          onClick={() => setShowVideo(true)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-20 h-20 text-white opacity-75 hover:opacity-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Replace with your video ID
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;