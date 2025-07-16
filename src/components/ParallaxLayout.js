'use client';
import { useEffect, useRef, useState } from 'react';

const ParallaxLayout = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden">
      {/* Layer 1: Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-00 to-gray-900 animate-gradient-x"></div>
      </div>

      {/* Layer 2: Infinite CSS Chess Pattern with Parallax */}
      <div 
        className="fixed inset-0 z-10 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="infinite-chess-bg"></div>
      </div>

      {/* Layer 3: Main Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default ParallaxLayout;