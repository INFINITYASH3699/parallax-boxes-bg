'use client';
import { useEffect, useRef, useState } from 'react';

const ContentSection = ({ title, content, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {content}
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white hover:scale-105 transition-all duration-300">
              Try Now
            </button>
          </div>
        </div>
        
        <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
          <div className="relative group">
            <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 p-8 hover:scale-105 transition-all duration-500">
              <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 rounded-xl flex items-center justify-center">
                <div className="text-6xl text-white/30">
                  {index + 1}
                </div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;  