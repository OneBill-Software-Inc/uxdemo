import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'; // For the close button icon
import { LuYoutube } from "react-icons/lu";
const VideoPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      {/* Card */}
      <div
        className="max-w-sm flex gap-1 items-center bg-sky-100 border border-sky-400 text-sky-700 px-2 py-1 text-sm rounded-md overflow-hidden cursor-pointer"
        onClick={() => setIsPopupOpen(true)}
      >
         <LuYoutube size={18} />Watch Video
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-3/4 h-3/4 ">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              onClick={() => setIsPopupOpen(false)}
            >
              <IoClose size={24} />
            </button>

            {/* YouTube Video */}
            <div className="aspect-w-16 aspect-h-16 h-full w-full">
              <iframe
                src="https://www.youtube.com/embed/_-8ohMvR6AY?si=v8JQwGJlrPvB46x1?autoplay=1" // Replace with your video ID
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;