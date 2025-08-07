"use client";

import Image from "next/image";
import { useState } from "react";

interface ExpandableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  expandedClassName?: string;
}

export default function ExpandableImage({
  src,
  alt,
  width,
  height,
  className = "",
  expandedClassName = "",
}: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsExpanded(true);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  const handleOverlayClick = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {/* Normal Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer ${className}`}
        onClick={handleImageClick}
      />

      {/* Expanded Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseClick}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close expanded image"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Expanded Image */}
          <div className="relative max-w-[70vw] max-h-[70vh] flex items-center justify-center">
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="70vw"
              className={`w-auto h-auto max-w-full max-h-full object-contain ${expandedClassName}`}
              onClick={(e) => e.stopPropagation()}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
