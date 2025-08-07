'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set hydration flag to prevent hydration mismatch
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    
    const cursor = cursorRef.current;
    if (!cursor) return;

    let isVisible = false;

    const updatePosition = (e: MouseEvent) => {
      if (!cursor) return;
      
      // Use transform for better performance
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      
      if (!isVisible) {
        cursor.style.opacity = '1';
        isVisible = true;
      }

      // Optimized interactive element detection
      const target = e.target as Element;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.hasAttribute('role') && target.getAttribute('role') === 'button' ||
        target.hasAttribute('tabindex') ||
        target.classList.contains('clickable') ||
        !!target.closest('a') ||
        !!target.closest('button');

      cursor.classList.toggle('hovering', isInteractive);
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.opacity = '0';
        isVisible = false;
      }
    };

    // Use passive listeners for better performance
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHydrated]);

  // Don't render anything until hydrated to prevent hydration mismatch
  if (!isHydrated) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        opacity: 0,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
