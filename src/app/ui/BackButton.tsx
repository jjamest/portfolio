"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function BackButton({
  className = "",
  children,
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back();
    } else {
      // Fallback to home page if no history
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors duration-200 ${className}`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      {children || "Back"}
    </button>
  );
}
