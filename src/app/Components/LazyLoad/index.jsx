'use client';

import { useEffect, useState } from 'react';

export default function LazyLoad({ children, threshold = 0.1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, isVisible, threshold]);

  return (
    <div 
      ref={setRef} 
      className={`transition-opacity duration-1000 ${isVisible && window.scrollY > ref.getBoundingClientRect().top ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}
