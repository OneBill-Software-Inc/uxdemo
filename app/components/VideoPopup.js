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
              <iframe  className="w-full h-full"  src="https://www.youtube.com/embed/AFWrHRwaItw?si=IuSlhQgSLMYdUHSB" title="Create Subscriber" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;