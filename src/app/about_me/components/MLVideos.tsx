'use client';

import { useEffect, useRef } from 'react';

export default function MLVideos() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];
    
    videos.forEach((video) => {
      if (video) {
        video.playbackRate = 2.0;
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
      <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
        <video
          ref={video1Ref}
          src="/about_me/machine_learning/1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
        <video
          ref={video2Ref}
          src="/about_me/machine_learning/2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
        <video
          ref={video3Ref}
          src="/about_me/machine_learning/3.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
