'use client'

import { useEffect, useRef } from "react";

const YouTubePlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (window.YT) {
      new window.YT.Player(playerRef.current, {
        height: "360",
        width: "640",
        videoId: "cHq7lP-Y3t3rju02", // Replace with a YouTube video ID
        playerVars: {
          controls: 0, // Hides default controls
          modestbranding: 1, // Removes YouTube logo
          showinfo: 0, // Hides video title & uploader
          rel: 0, // Prevents showing related videos at the end
          disablekb: 1, // Disables keyboard shortcuts
          fs: 0, // Disables fullscreen button
        },
      });
    }
  }, []);

  return <div ref={playerRef} className="h-80 border border-red-500"> sdfasfsdafasf s</div>;
};

export default YouTubePlayer;